import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
	strict: true,
	state: {
		items: 5,
		units: [ 'px', '%', 'em', 'rem', 'pt', 'pc', 'mm', 'cm', 'ex', 'ch', 'wv', 'vh', 'vmin', 'vmax' ],

		flex: {
			container: {
				width: {
					values: {
						auto: false,
						optional: {
							active: true,
							value: 100,
							unit: '%',
							max: 101,
						}
					}
				},

				'flex-direction': {
					values: {
						row: true,
						'row-reverse': false,
						column: false,
						'column-reverse': false,
						initial: false,
						inherit: false
					}
				},

				'flex-wrap': {
					values: {
						'nowrap': false,
						'wrap': true,
						'wrap-reverse': false,
						'initial': false,
						'inherit': false
					}
				},

				'justify-content': {
					values: {
						left: false,
						right: false,
						stretch: false,
						center: false,
						'flex-start': false,
						'flex-end': false,
						'space-around': false,
						'space-between': true,
						'space-evenly': false,
						initial: false,
						inherit: false
					}
				},

				'align-items': {
					values: {
						'flex-start': false,
						'flex-end': false,
						center: false,
						baseline: false,
						stretch: false,
						initial: true,
						inherit: false
					}
				},

				'align-content': {
					values: {
						'flex-start': false,
						'flex-end': false,
						center: false,
						'space-between': false,
						'space-around': false,
						stretch: false,
						initial: true,
						inherit: false
					}
				}
			},

			item: {
				order: {
					values: {
						initial: true,
						inherit: false,
						optional: {
							active: false,
							value: 0,
							min: -1,
							max: 1,
						}
					},
					in: [],
					default: 'initial'
				},

				'align-self': {
					values: {
						auto: false,
						'flex-start': false,
						'flex-end': false,
						center: true,
						baseline: false,
						stretch: false,
						initial: false,
						inherit: false
					},
					in: [],
					default: 'initial'
				},

				'flex-grow': {
					values: {
						initial: false,
						inherit: false,
						optional: {
							active: true,
							value: 0, // Положительное целое или дробное
							step: 0.1,
							min: 0,
							// max: 5,
						},
					},
					in: [ 1, 3, 5 ],
					default: 'initial',
				},

				'flex-shrink': {
					values: {
						initial: false,
						inherit: false,
						optional: {
							active: true,
							value: 0, // Положительное целое или дробное
							step: 0.1,
							min: 0,
							// max: 5,
						}
					},
					in: [],
					default: 'initial'
				},

				'flex-basis': {
					values: {
						auto: false,
						content: false,
						initial: false,
						inherit: false,
						optional: {
							active: true,
							value: 150, // width
							unit: 'px',
							step: 5,
							min: 0,
						}
					},
					in: [],
					default: 'initial'
				},
			},
		},
	},

	getters: {
		getItemsNumber: state => state.items,

		getActiveProps: state => ( elemName, itemNum ) => {
			// console.log( itemNum )

			let activeProps = {},
					element = state.flex[ elemName ]


			for ( let prop in element ) {
				let vals = element[ prop ].values,
						propVal = ''

			// console.log( vals )

				for ( let i in vals ) {
					if ( 'in' === i || 'default' === i ) {
						continue
					}

					if ( 'optional' === i ) {
						if ( vals[ i ].active ) {
							propVal = vals[ i ].value
							
							if ( vals[ i ].unit ) {
								propVal += vals[ i ].unit
							}
						}
					} else {
						if ( vals[ i ] ) {
							propVal = i
						}
					}

					if ( itemNum ) {
						if ( element[ prop ].in && element[ prop ].in.length ) {
								// console.log( 'vals.in', vals.in )
							if ( ! element[ prop ].in.includes( itemNum ) ) {
								propVal = element[ prop ].default || 'initial'
								// console.log( 'prop', prop )
								// console.log( 'itemNum', itemNum )
								// console.log( 'propVal', propVal )
							}
						}
					}

					activeProps[ prop ] = propVal
				}
			}

			// console.log( activeProps )

			return activeProps
		},
	},

	mutations: {
		setItemsNumber: ( state, num ) => {
			state.items = num
		},

		delFromIn: state => {
			for ( let el in state.flex ) {
				for ( let prop in state.flex[ el ] ) {
					let vals = state.flex[ el ][ prop ]
					if ( vals.optional && vals.optional.in ) {
						let ins = vals.optional.in.filter( val => val <= state.items )

						// console.log( 'ins', vals )
						state.flex[ el ][ prop ].optional.in = ins
					}
				}
			}
		},

		/*setIn: ( state, atts ) => {
			let [ el, prop, val, num ] = atts,
					ins = state.flex[ el ][ prop ][ val ].in

			let position = ins.indexOf( num )
			if ( -1 !== position ) {
				ins.splice( position, 1 )
			} else {
				ins.push( num )
			}

			// ins.sort( ( a, b ) => a - b )

			state.flex[ el ][ prop ][ val ].in = ins
		},*/

		setIn: ( state, atts ) => {
			let [ el, prop, num ] = atts,
					ins = state.flex[ el ][ prop ].in

			let position = ins.indexOf( num )
			if ( -1 !== position ) {
				ins.splice( position, 1 )
			} else {
				ins.push( num )
			}

			// ins.sort( ( a, b ) => a - b )

			state.flex[ el ][ prop ].in = ins
		},

		setActiveProp: ( state, atts ) => {
			let [ el, prop, val ] = atts,
					vals = state.flex[ el ][ prop ].values
			
			// console.log( 'setActiveProp atts', atts )


			for ( let i in vals ) {
				if ( ( 'optional' == val ) && ( i == val ) ) {
					vals[ i ].active = true
				} else if( val == i ) {
					vals[ i ] = true
				} else {
					if ( 'optional' == i ) {
						vals[ i ].active = false
					} else {
						vals[ i ] = false
					}
				}
			}
		},

		setNewVal: ( state, atts ) => {
			let [ evt, el, prop, val ] = atts
			// console.log( 'setNewVal evt', evt.target.value )
			// console.log( 'setNewVal el', el )
			// console.log( 'setNewVal prop', prop )
			// console.log( 'setNewVal val', val )

			// console.log( state.flex[ el ][ prop ][ 'values' ][ val ] )
			state.flex[ el ][ prop ][ 'values' ][ val ].value = evt.target.value

		},

		setUnit: ( state, atts ) => {
			let [ evt, el, prop, val ] = atts,
					optional = state.flex[ el ][ prop ][ 'values' ][ val ]

			if ( optional.unit ) {
				optional.unit = evt.target.value
			}

			// console.log( 'el', el )
			// console.log( 'prop', prop )
			// console.log( 'val', val )
			// console.log( 'evt', evt.target.value )
		},
	},

	actions: {
		async changeItemsNumber( { commit }, num ) {
			await commit( 'setItemsNumber', num )
			commit( 'delFromIn' )
		}
	},

	modules: {
	}
} )
