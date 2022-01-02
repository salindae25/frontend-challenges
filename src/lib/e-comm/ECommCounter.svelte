<script lang="ts">
	let count = 0;
</script>

<div class="flex bg-e-comm-gray-blue-400/50 w-full rounded-md justify-evenly py-2 lg:w-2/3">
	<button
		class="rounded-l-md  flex items-center justify-start px-5 w-full  h-8 "
		on:click="{() => {
			count = Math.max(count - 1, 0);
		}}">
		<svg width="11" height="3" xmlns="http://www.w3.org/2000/svg" class="hover:stroke-comment-blue hover:stroke-1">
			<path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF" class="fill-e-comm-orange"></path>
		</svg>
	</button>
	<span class="font-medium w-full my-auto text-center text-e-comm-gray-blue-800 lg:font-bold">{count}</span>

	<button class="rounded-r-md  h-8 flex items-center justify-end   w-full px-5"
		><svg
			width="11"
			height="11"
			xmlns="http://www.w3.org/2000/svg"
			class="hover:stroke-comment-blue hover:stroke-1"
			on:click="{() => {
				count = count + 1;
			}}"
			><path
				d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
				class="fill-e-comm-orange"
				fill="#C5C6EF"></path
			></svg>
	</button>
</div>
