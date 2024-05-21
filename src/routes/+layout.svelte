<script>
	import Header from './Header.svelte';
	import './styles.css';
	import 'iconify-icon';
	import '@xyflow/svelte/dist/style.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer></footer>
</div>
