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
			<Challenge imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/i8zblmqsbqixz1tbhc0v.jpg" link="/comment">
				<div slot="title">Interactive comments section</div>
				<sapn slot="tech" class="flex gap-3"><span>HTML</span><span> Tailwindcss</span><span> Svelte</span><span> Css</span><span>FetchAPI</span></sapn>
				<div slot="description">
					<p class=" capitalize">
						tailwind for styling. comments arranged in hierarchical order
						<a href="https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9" target="" class="text-blue-600 font-medium  hover:underline"> for more info.</a>
					</p>
				</div>
			</Challenge>
			<Challenge imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/fhzpdnabrek50hvhftnl.jpg" link="/e-comm">
				<div slot="title">E-commerce product page</div>
				<sapn slot="tech" class="flex gap-3"><span>HTML</span><span> Tailwindcss</span><span> Svelte</span><span> Css</span><span>FetchAPI</span></sapn>
				<div slot="description">
					<p class=" capitalize">
						tailwind for styling used with Svelte. cart functionality and mobile gallery implemented.
						<a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6" target="" class="text-blue-600 font-medium  hover:underline"> for more info.</a>
					</p>
				</div>
			</Challenge>
		</div>
	</div>
</section>
