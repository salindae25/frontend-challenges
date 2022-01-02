<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	const imageArray = ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4'];
	let activeImage = 0;

	enum Direction {
		previous = 'PREV',
		next = 'NXT'
	}
	function move(dir: Direction): void {
		if (dir === Direction.next) {
			activeImage = Math.min(activeImage + 1, imageArray.length - 1);
			if (activeImage === imageArray.length - 1) activeImage = 0;
			return;
		}
		activeImage = Math.max(0, activeImage - 1);
		if (activeImage === 0) activeImage = imageArray.length - 1;

		return;
	}
</script>

<div class="flex flex-col gap-8">
	<div class="h-[300px] bg-center bg-cover w-full flex justify-between items-center overflow-hidden relative  bg-orange-400 lg:rounded-lg lg:h-[400px] lg:aspect-square ">
		{#each [imageArray[activeImage]] as src (activeImage)}
			<img src="{`/e-comm-images/${src}.jpg`}" alt="previous" class=" object-cover transition ease-linear duration-300 " in:fly="{{ delay: 200, duration: 1200 }}" out:fade="{{ delay: 200, duration: 600 }}" />
		{/each}
		<div
			class="bg-white h-[40px] aspect-square  rounded-full flex items-center justify-center absolute  left-4 lg:hidden"
			on:click="{() => {
				move(Direction.previous);
			}}">
			<img src="/e-comm-images/icon-previous.svg" alt="previous" class="h-[15px] ml-[-5px]" />
		</div>
		<div
			class="bg-white h-[40px] aspect-square   rounded-full flex items-center justify-center absolute  right-4 lg:hidden"
			on:click="{() => {
				move(Direction.next);
			}}">
			<img src="/e-comm-images/icon-next.svg" alt="next" class="h-[15px] mr-[-5px]" />
		</div>
	</div>
	<div class="w-full lg:flex justify-between hidden">
		{#each imageArray as src, i}
			<div
				class=" h-auto bg-white/30 flex border  rounded-lg cursor-pointer "
				class:border-e-comm-orange="{activeImage === i}"
				on:click="{() => {
					activeImage = i;
				}}">
				<img src="{`/e-comm-images/${src}.jpg`}" alt="previous" class=" object-cover rounded-lg transition ease-linear duration-200 h-20 aspect-square hover:contrast-50" class:contrast-50="{activeImage === i}" in:fly="{{ delay: 200, duration: 1200 }}" out:fade="{{ delay: 200, duration: 600 }}" />
			</div>
		{/each}
	</div>
</div>
