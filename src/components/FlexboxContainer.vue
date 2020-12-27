<template>
	<div class="container-wrap">
		<div
			:class="[ 'container', $style ]"
			:style="getActiveProps( 'container' )"
		>
			<!-- {{ getActiveProps( 'container' ) }} -->
			
			<!-- :style="props.container" -->
				<!-- v-for="n of items" -->
			<FlexboxItem
				v-for="( n, idx ) in getItemsNumber"
				:key="n + idx"
				:style="getActiveProps( 'item', n )"
			>
				<!-- :style="props.item" -->
				item<br />{{ n }}
			</FlexboxItem>
			<!-- <span>{{ $style.colorexp }}</span> -->
		</div>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	import FlexboxItem from '@/components/FlexboxItem.vue'
	// import containerCss from '@/assets/styles/container.module.sass'

	export default {
		name: 'FlexboxContainer',

		data() {
			return {
				/*props: {
					container: {},
					item: {}
				}*/
				// containerCss
			}
		},

		created() {
			// console.log( this.containerCss )
			// console.log( this.$style.container )
			
			// this.getProps()

			// console.log( window )
		},

		computed: {
			...mapState( [
				'items'
			] ),

			...mapGetters( [
				'getItemsNumber',
				'getActiveProps'
			] ),
		},

		methods: {
			/*getProps() {
				this.props.container = this.getActiveProps( 'container' )
				this.props.item = this.getActiveProps( 'item' )

				console.log( 'props', this.props )
			}*/
		},

		components: {
			FlexboxItem
		}
	}
</script>

<style lang="scss" module>
	.container {
		color: red
	}

	:export {
		colorexp: green
	}

</style>

<style lang="sass" scoped>
	.container-wrap
		flex: 1
		height: 75vh
		margin-left: 30px
		border: 1px dashed #ccc
		overflow-x: auto
		.container
			display: flex
			height: 100%
			background-color: #fafafa
</style>
