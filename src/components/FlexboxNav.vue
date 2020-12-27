<template>
	<ul class="nav">
		<li>
			Items number
			<input
				type="number"
				min="1"
				v-model.number="itemsNumber"
			/>
		</li>
		<li
			v-for="( props, el, idx ) in flex"
			:key="idx"
		>
			{{ el }}
			<ul>
				<li
					v-for="( data, prop ) in props"
					:key="el + prop"
				>
					{{ prop }}
					<ul>
						<li
							v-for="( status, val ) in data.values"
							:key="el + prop + val"
						>


							<a
								href="#"
								:class="{ active: status }"
								v-if="( 'optional' !== val )"
								@click.prevent="setActiveProp( [ el, prop, val ] )"
							>
								{{ val }}
							</a>


							<!-- BEGIN Optional -->
							<span
								v-else
								class="optional"
							>
								<a
									href="#"
									:class="{ active: data.values[ val ].active }"
									@click.prevent="setActiveProp( [ el, prop, val ] )"
								>
									{{ val }}
								</a>
								
								<input
									:value="data.values[ val ].value"
									@input="setNewVal( [ $event, el, prop, val ] )"
									:step="data.values[ val ].step"
									:min="data.values[ val ].min"
									:max="data.values[ val ].max"
									type="number"
								/>

								<select
									v-if="data.values[ val ].unit"
									@change="setUnit( [ $event, el, prop, val ] )"
								>
									<option
										v-for="( unit, idx ) in units"
										:key="idx"
										:value="unit"
										:selected="data.values[ val ].unit === unit"
									>
										{{ unit }}
									</option>
								</select>
							</span>
							<!-- END Optional -->

							

						</li>
						<li
							v-if="data.in"
							:key="el + prop + '-in'"
							class="in-box"
						>
							in {{ flex[ el ][ prop ].in }}
							<label
								v-for="( num, idx ) in itemsNumber"
								:key="el + prop + idx"
								class="in"
							>
								<input
									:value="num"
									:checked="isChecked( data.in, num )"
									@change="setIn( [ el, prop, num ] )"
									type="checkbox"
								/>
								{{ num }}
							</label>
						</li>
					</ul>

				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'

	export default {
		name: 'FlexboxNav',
		
		computed: {
			...mapState( [
				'flex',
				'units'
			]),

			itemsNumber: {
				get() {
					// console.log( this.$store.state.items )
					return this.$store.state.items
				},

				set( num ) {
					// this.$store.commit( 'setItemsNumber', num )
					this.$store.dispatch( 'changeItemsNumber', num )
				}
			},
		},

		methods: {
			...mapMutations( [
				'setActiveProp',
				'setNewVal',
				'setUnit',
				'setIn',
			] ),

			isChecked: ( arr, num ) => {
				return arr.includes( num )
			},
		}
	}
</script>

<style lang="sass" scoped>
	.nav
		height: 75vh
		margin: 0
		padding: 0 30px
		text-align: left
		border: 1px dashed #ccc
		overflow: auto
		&>li
			margin-top: 15px
		li
			&:last-child
				margin-bottom: 15px
			.active
				color: #f00
			input,
			select
				margin-top: 5px

			select,
			input[type=number],
			label.in
				display: block

			input[type=number]
				max-width: 150px


</style>
