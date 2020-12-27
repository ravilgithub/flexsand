<template>
	<div class="box">
		<FlexboxNav></FlexboxNav>
		<FlexboxContainer></FlexboxContainer>
	</div>
</template>

<script>
	import FlexboxNav from '@/components/FlexboxNav.vue'

	export default {
		name: 'Flexbox',

		components: {
			FlexboxNav,
			FlexboxContainer: () => import( '@/components/FlexboxContainer.vue' ),
		}
	}
</script>

<style lang="sass">
	*
		box-sizing: border-box

	.box
		display: flex
		flex-wrap: wrap
		flex-direction: row
		justify-content: space-between
</style>
