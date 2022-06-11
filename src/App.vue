<template>
	<div id="app">
		<PageTitle :title="'Sara\'s Task'" />
		<Dashboard />
	</div>
</template>

<script>
	import PageTitle from '@/components/Page/PageTitle.vue';
	import Dashboard from '@/components/Dashboard/Dashboard.vue';

	export default {
		components: {
			PageTitle,
			Dashboard
		}
	};
</script>

<style lang="scss">
	#app {
		width: 100%;
	}

	[v-cloak] {
		display: none;
	}
</style>
