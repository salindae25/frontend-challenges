<script lang="ts">
	import ECommCart from '$lib/e-comm/ECommCart.svelte';

	import { fade, fly } from 'svelte/transition';

	let navVisible = false;
</script>

<nav class=" flex py-6 px-5 w-full justify-between lg:border-b lg:pt-6 lg:pb-0">
	<div class="self-start flex gap-4">
		<i
			class="bg-[url('/e-comm-images/icon-menu.svg')] h-6 w-6 bg-center bg-cover lg:hidden"
			on:click="{() => {
				navVisible = !navVisible;
			}}"></i>
		<img src="/e-comm-images/logo.svg" class="h-6 w-auto lg:h-7" alt="logo" />
		<ul class="hidden text-e-comm-gray-blue-600 ml-10 text-lg lg:flex  gap-4 space-x-8">
			<li class="border-b-4 cursor-pointer border-transparent hover:border-e-comm-orange h-full pb-6 transition ease-linear duration-300 hover:text-e-comm-gray-blue-800">Collections</li>
			<li class="border-b-4 cursor-pointer border-transparent hover:border-e-comm-orange h-full pb-6 transition ease-linear duration-300 hover:text-e-comm-gray-blue-800">Men</li>
			<li class="border-b-4 cursor-pointer border-transparent hover:border-e-comm-orange h-full pb-6 transition ease-linear duration-300 hover:text-e-comm-gray-blue-800">Women</li>
			<li class="border-b-4 cursor-pointer border-transparent hover:border-e-comm-orange h-full pb-6 transition ease-linear duration-300 hover:text-e-comm-gray-blue-800">About</li>
			<li class="border-b-4 cursor-pointer border-transparent hover:border-e-comm-orange h-full pb-6 transition ease-linear duration-300 hover:text-e-comm-gray-blue-800">Contact</li>
		</ul>
	</div>
	<div class="self-end flex gap-4 pb-6 items-center">
		<ECommCart />
		<img src="/e-comm-images/image-avatar.png" class="h-6 w-auto lg:h-8 hover:border hover:border-e-comm-orange rounded-full cursor-pointer" alt="avatar" />
	</div>
</nav>
{#if navVisible}
	<div
		class="bg-e-comm-gray-blue-800/40  h-full overflow-hidden w-screen top-0 z-50 fixed"
		on:click|preventDefault|stopPropagation="{() => {
			navVisible = !navVisible;
		}}"
		in:fly="{{ delay: 200, duration: 600 }}"
		out:fly="{{ delay: 200, duration: 600 }}">
		<div class="bg-white h-full w-2/3 shadow-lg p-6">
			<div
				on:click|preventDefault|stopPropagation="{() => {
					navVisible = !navVisible;
				}}">
				<img src="/e-comm-images/icon-close.svg" class="h-4" alt="" />
			</div>
			<ul class="relative top-14 font-bold text-xl flex flex-col gap-4">
				<li>Collections</li>
				<li>Men</li>
				<li>Women</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	</div>
{/if}
