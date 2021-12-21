<script lang="ts">
	import { getContext } from 'svelte';

	const { currentUser } = getContext('commentList');
</script>

<form class="flex flex-col p-4 rounded-md bg-white gap-y-4 w-100 lg:p-8" on:submit="{() => {}}">
	<div class="flex w-full gap-4">
		<div class="hidden lg:block">
			<!-- avatar -->
			<img src="{currentUser.image.png}" class="w-10 lg:w-12" alt="{currentUser.username}" />
		</div>
		<textarea name="comment" id="comment-input" cols="10" rows="2" class="border border-comment-gray-blue-400  rounded-md py-4 px-6 w-full placeholder:text-comment-gray-blue-500 lg:grow focus:text-gray-700 focus:border-comment-blue focus:outline-none" placeholder="Add a comment.."></textarea>
		<button class="text-white bg-comment-blue py-4 px-10 rounded-md font-medium uppercase hidden lg:block lg:self-start hover:bg-comment-gray-blue-400 transition delay-75 duration-75"> Send </button>
	</div>
	<div class="flex gap-4 justify-between items-center lg:hidden">
		<div>
			<!-- avatar -->
			<img src="{currentUser.image.png}" class="w-10" alt="{currentUser.username}" />
		</div>

		<button class="text-white bg-comment-blue py-4 px-6 rounded-md font-medium uppercase hover:bg-comment-gray-blue-400 transition delay-75 duration-75"> Send </button>
	</div>
</form>
