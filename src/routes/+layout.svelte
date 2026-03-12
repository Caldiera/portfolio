<script lang="ts">
	import '../app.scss';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />

<style lang="scss">
	main {
		min-height: calc(100vh - 120px);
	}
</style>
