<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	let cart = [
		{ id: 1, name: 'Autumn Limited Edition Edition Edition', imageThumbnail: 'image-product-2-thumbnail.jpg', unitPrice: 125.0, count: 2 },
		{ id: 2, name: 'Autumn Limited Edition', imageThumbnail: 'image-product-1-thumbnail.jpg', unitPrice: 155.0, count: 2 },
		{ id: 3, name: 'Autumn Limited Edition', imageThumbnail: 'image-product-3-thumbnail.jpg', unitPrice: 165.0, count: 1 },
		{ id: 4, name: 'Autumn Limited Edition', imageThumbnail: 'image-product-4-thumbnail.jpg', unitPrice: 145.0, count: 1 },
		{ id: 5, name: 'Autumn Limited Edition', imageThumbnail: 'image-product-4-thumbnail.jpg', unitPrice: 145.0, count: 1 },
		{ id: 6, name: 'Autumn Limited Edition', imageThumbnail: 'image-product-4-thumbnail.jpg', unitPrice: 145.0, count: 1 },
		{ id: 7, name: 'Autumn Limited Edition', imageThumbnail: 'image-product-4-thumbnail.jpg', unitPrice: 145.0, count: 1 }
	];
	let noOfUnitInCart = 0;
	let visibleCart = false;
	function calculateNoofUnits(content = []) {
		let totalUnit = 0;
		content.forEach((item) => {
			if (!item.count) {
				totalUnit = +1;
				return;
			}

			totalUnit = totalUnit + item.count;
		});
		return totalUnit;
	}
	function deleteItem(item) {
		cart = cart.filter((x) => x.id !== item.id);
	}
	function openCartDetail() {
		visibleCart = !visibleCart;
	}
	$: noOfUnitInCart = calculateNoofUnits(cart);
</script>

<button class="bg-[url('/e-comm-images/icon-cart.svg')] h-4 w-4 bg-center bg-cover relative" on:click|preventDefault|stopPropagation="{openCartDetail}">
	{#if noOfUnitInCart !== 0}
		<span class="absolute bg-e-comm-orange text-white text-xs font-bold rounded-lg px-2 -top-3 -right-3 ">{noOfUnitInCart}</span>
	{/if}
	{#if visibleCart}
		<div
			class="fixed top-0 left-0 h-screen w-screen z-30"
			on:click|preventDefault|stopPropagation="{() => {
				visibleCart = false;
			}}"
			in:fade="{{ duration: 600 }}">
			<div class="relative top-20 left-1 bg-white rounded-lg shadow-lg flex  flex-col pl-6 pr-4  pt-4 pb-10  w-[98vw] text-left lg:w-[400px] lg:right-20 lg:ml-auto lg:fixed" out:fly="{{ duration: 600, y: -200 }}">
				<span class="font-bold pb-4">Cart</span>
				<div class="border-t flex flex-col gap-3 py-2 max-h-64 overflow-y-scroll">
					{#each cart as item (item.id)}
						<div class=" flex gap-3 pr-2" out:fly="{{ delay: 500, duration: 600, x: 200 }}">
							<img src="{`/e-comm-images/${item.imageThumbnail}`}" alt="{item.name}" class="h-12 w-12 aspect-square rounded-md" />
							<div class="flex flex-col text-e-comm-gray-blue-600 text-base w-full truncate pr-5">
								<span class="truncate ">{item.name}</span>
								<div class="  flex flex-grow gap-2">
									<span>${`${item.unitPrice} x ${item.count || 1} `} </span>
									<span class="text-e-comm-gray-blue-800 font-bold">${`${item.unitPrice * (item.count || 1)}`} </span>
								</div>
							</div>
							<button class=" self-center justify-self-end mr-2" on:click|preventDefault|stopPropagation="{() => deleteItem(item)}">
								<img src="/e-comm-images/icon-delete.svg" alt="delete" class="h-4 w-4" />
							</button>
						</div>
					{/each}
					{#if cart.length === 0}
						<div class=" flex gap-3 justify-center py-4 h-32 items-center" in:fade="{{ delay: 600 }}">
							<span class="font-bold text-e-comm-gray-blue-400">Your cart is empty. </span>
						</div>
					{/if}
				</div>
				{#if cart.length !== 0}
					<button class="bg-e-comm-orange text-white font-bold py-3 text-center rounded-md mt-4"> Checout </button>
				{/if}
			</div>
		</div>
	{/if}
</button>
