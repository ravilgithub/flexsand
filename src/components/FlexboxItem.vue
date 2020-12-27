<template>
	<!-- <div :class="[ 'item', itemCss.item ]"> -->
	<div
		class="item"
	>
		<!-- :style="getActiveProps( 'item' )" -->
		<slot>Default item name</slot>
	</div>
</template>

<script>
	// import { mapGetters } from 'vuex'
	import itemCss from '@/assets/styles/item.module.sass'
	// console.log( itemCss );

	export default {
		name: 'FlexboxItem',

		data() {
			return {
				itemCss
			}
		},

		/*created() {
			this.getProps
		},

		computed: {
			...mapGetters( [
				'getActiveProps'
			] ),

			getProps() {
				let item = this.getActiveProps( 'item' )
				console.log( 'item', item )
				return item
			}
		},*/
	}
</script>


<!-- <style lang="sass" module>
	.item
		border-color: red !important
</style> -->

<style lang="sass" scoped>
	.item
		/*padding: 10px 0*/
		border: 1px solid #6d0
		background-color: rgba( 112, 239, 0, 0.3 )
</style>
