<script>
	import Counter from '$lib/e-comm/ECommCounter.svelte';
	import NavBar from '$lib/e-comm/EcommNavBar.svelte';
	import Gallery from '$lib/e-comm/EcommGallery.svelte';
</script>

<div class="w-screen min-h-screen bg-white font-e-comm-font relative lg:px-32">
	<NavBar />
	<div class="flex flex-col md:w-[500px] md:mx-auto lg:flex-row lg:pt-24 lg:gap-24 lg:pb-10 xl:w-[1000px] xl:mx-auto">
		<Gallery />
		<article class="flex flex-col px-5 py-5 gap-4 lg:gap-7">
			<h6 class="uppercase text-e-comm-orange font-bold text-sm tracking-wider lg:text-base">Sneaker Company</h6>
			<h4 class="capitalize text-3xl font-bold text-e-comm-gray-blue-800 lg:text-5xl">Fall Limited Edition Sneakers</h4>
			<p class="text-e-comm-gray-blue-600">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
			<div class="flex items-center gap-4 w-full">
				<div class="text-3xl font-bold text-e-comm-gray-blue-800">$125.00</div>
				<div class="text-e-comm-orange font-bold text-sm bg-e-comm-orange-100 py-1 px-2 rounded-md">50%</div>
				<div class="text-e-comm-gray-blue-400  line-through font-bold ml-auto ">$250.00</div>
			</div>
			<div class="flex flex-col lg:flex-row gap-4">
				<Counter />
				<button class="w-full flex items-center text-center bg-e-comm-orange gap-4 font-bold text-sm text-white py-3 justify-center rounded-md shadow-2xl shadow-e-comm-orange/50 hover:bg-e-comm-orange/70">
					<i class="h-5 text-white ">
						<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" class="aspect-auto "
							><path
								class="fill-white"
								d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
								fill="#69707D"
								fill-rule="nonzero"></path
							></svg
						></i
					><span>Add to cart</span>
				</button>
			</div>
		</article>
	</div>
</div>
