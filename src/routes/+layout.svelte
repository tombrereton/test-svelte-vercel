<script lang="ts">
	import type { PageData } from './$types';
	import type { Snippet } from 'svelte';
	import logo from '$lib/images/logo.svg';
	let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<div class="app flex min-h-screen flex-col">
	<header class="flex items-center justify-between border-b-2 p-2">
		<a href="/">
			<img src={logo} class="h-8 w-auto" alt="Soundsort" />
		</a>

		<nav class="flex items-center gap-6">
			<a href="/">Home</a>
			<a href="/playlists">Dashboard</a>
			<a href="/playlists/create">Create Playlist</a>
			<a href="/playlists/results">Results</a>
			<p>{data.session?.name}</p>
		</nav>
	</header>
	<main class="flex-grow">
		{@render children()}
	</main>
	<footer class="border-t-2 p-2">
		<p>Footer</p>
	</footer>
</div>
