<style>
</style>

<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Challenge from '$lib/frontend/Challenge.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Home | FM</title>
</svelte:head>

<section class="flex flex-col md:w-5/6 min-h-screen mx-auto self-start pt-10 ">
	<h1 class="text-3xl font-bold  job-font text-center">Frontend Mentor @salinda</h1>
	<div class="rounded-sm border-gray-100 border p-6 mt-10 flex flex-col gap-4">
		<h2 class="text-3xl font-bold uppercase">Challenges</h2>
		<div class="flex flex-wrap gap-4">
			<Challenge />
			<Challenge />
		</div>
	</div>
</section>
