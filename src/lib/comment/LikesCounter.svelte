<script lang="ts">
	export let score = 0;
</script>

<div class="bg-comment-gray-blue-300  lg:flex-col rounded-md item-center  p-1.5  flex self-start">
	<button
		class="rounded-l-md w-8 h-8 flex items-center justify-center  "
		on:click="{() => {
			score = score + 1;
		}}"
		><svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="hover:stroke-comment-blue hover:stroke-1"
			><path
				d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
				fill="#C5C6EF"></path></svg
		></button
	>
	<span class="font-medium w-8 my-auto text-center text-comment-blue">{score}</span>
	<button
		class="rounded-r-md  flex items-center justify-center w-8 h-8 "
		on:click="{() => {
			score = Math.max(score - 1, 0);
		}}"
	>
		<svg width="11" height="3" xmlns="http://www.w3.org/2000/svg" class="hover:stroke-comment-blue hover:stroke-1">
			<path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"></path>
		</svg>
	</button>
</div>
