<style>
	@media screen and (min-width: 675px) {
		.banner {
			background-image: url('/images/bg-header-mobile.svg');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: left;
			background-color: hsl(180, 29%, 50%);
		}
	}

	.banner {
		background-image: url('/images/bg-header-desktop.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: right;
		background-color: hsl(180, 29%, 50%);
	}
	body {
		background-color: hsl(180, 52%, 96%);
	}
</style>

<script lang="ts">
	import { setContext } from 'svelte';
	import JobItem from '$lib/job/JobItem.svelte';
	import JobFilter from '$lib/job/JobFilter.svelte';
	import { addFilter, filterJobs } from '$lib/job/util';

	let jobs = [];
	let visibleJobs = [];
	let selectedCategories: string[] = [];

	function handleCategoriesClick(filterItem) {
		selectedCategories = addFilter(selectedCategories, filterItem);
	}

	function handleClearFilter() {
		selectedCategories = [];
	}

	setContext('jobList', {
		toggleCategories: handleCategoriesClick,
		clearFilter: handleClearFilter,
		selectedCategories
	});

	async function getJobList() {
		const res = await fetch(`/api/jobs`);
		jobs = await res.json();
		visibleJobs = jobs;
		if (res.ok) {
			return jobs;
		} else {
			throw new Error('Error occured');
		}
	}

	let promise = getJobList();
	$: visibleJobs = filterJobs(jobs, selectedCategories);
</script>

<svelte:head>
	<title>Jobs | listing</title>
</svelte:head>

<div class="relative flex flex-col w-screen overflow-x-hidden job-font">
	<!-- banner -->
	<section class="banner h-[200px]"></section>
	<!-- filter -->
	{#if selectedCategories.length > 0}
		<JobFilter categories="{selectedCategories}" />
	{/if}
	<!-- list area -->
	<section
		class="flex flex-col item-center mt-24 mx-auto
  gap-10
  md:gap-4 md:mt-10 md:w-5/6
  w-screen
  mb-10
  ">
		{#await promise}
			<div class="border border-blue-300 shadow rounded-md p-4  w-full ">
				<div class="animate-pulse flex space-x-4">
					<div class="rounded-full bg-job-cyan-600 h-10 w-10"></div>
					<div class="flex-1 space-y-6 py-1">
						<div class="h-2 bg-job-cyan-600 rounded"></div>
						<div class="space-y-3">
							<div class="grid grid-cols-3 gap-4">
								<div class="h-2 bg-job-cyan-600 rounded col-span-2"></div>
								<div class="h-2 bg-job-cyan-600 rounded col-span-1"></div>
							</div>
							<div class="h-2 bg-job-cyan-600 rounded"></div>
						</div>
					</div>
				</div>
			</div>
		{:then jobs}
			{#each visibleJobs as job}
				<JobItem job="{job}" />
			{/each}
		{:catch error}
			<p>something went wrong</p>
		{/await}
	</section>
</div>
