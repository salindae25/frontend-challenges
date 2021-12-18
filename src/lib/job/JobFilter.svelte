<script lang="ts">
	import { getContext } from 'svelte';
	const { toggleCategories, clearFilter } = getContext('jobList');
	export let categories: string[] = [];
</script>

<section
	class="
        bg-white
        flex
        p-4
        rounded-[8px]
        shadow-lg shadow-job-cyan-600/50
        gap-4
        relative
        md:flex-row md:item-center md:px-8
        top-[-30px]
        flex-wrap
        w-5/6
        mx-auto
        min-h-xs
      ">
	{#each categories as category}
		<div class="flex rounded item-center">
			<span class="bg-job-cyan-200 text-job-cyan-500 py-1 px-2 font-bold">{category}</span>
			<button class="bg-job-cyan-500 w-8 text-white rounded-r font-bold bg-[url('/images/icon-remove.svg')] bg-no-repeat bg-center hover:bg-job-cyan-800" on:click="{() => toggleCategories(category)}"></button>
		</div>
	{/each}
	<button class="text-job-cyan-500 underline ml-auto font-medium" on:click="{clearFilter}">Clear</button>
</section>
