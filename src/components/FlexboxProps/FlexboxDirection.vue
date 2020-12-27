<template>
	<FlexboxContainer></FlexboxContainer>
</template>

<script>
	import FlexboxContainer from '@/components/FlexboxContainer.vue'

	export default {
		name: 'FlexboxDirection',

		data() {
			return {}
		},

		components: {
			FlexboxContainer
		}
	}
</script>

<style lang="sass" scoped>
	.container
		display: flex
		// display: inline-flex

		flex-direction: row-reverse
		// flex-direction: column-reverse

		justify-content: space-around
</style>
