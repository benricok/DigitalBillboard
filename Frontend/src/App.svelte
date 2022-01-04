<script>
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	const userStore = writeable(null);
	async function getUser() {
		let response = await fetch("/user");
		return response.ok ? await response.json() : null;
	}
	onMount(async () => {
		let user = await getUser();
		if(user) userStore.update(data => user);
	});
</script>

<main>
	<h1>test</h1>
	{#if $userStore}
	<h1>Hello! {$userStore.name}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>