<script lang="ts">
	import CommentForm from '$lib/comment/CommentForm.svelte';
	import LikesCounter from './LikesCounter.svelte';

	let isEdit = false;
	let allowReply = false;
	export let isOwner = false;
	export let comment: FMComment | CommentReplies;
</script>

<article class="flex flex-col p-4 rounded-md bg-white gap-4 w-100 lg:flex-row lg:p-8">
	{#if !isEdit}
		<div class="hidden lg:flex"><LikesCounter score="{comment.score}" /></div>
	{/if}

	<div class="flex flex-col  gap-y-4 w-full">
		<div class="flex gap-4  items-center justify-between">
			<div class="flex gap-4  items-center ">
				<div>
					<!-- avatar -->
					<img src="{comment.user.image.png}" class="w-8 lg:w-12" alt="{comment.user.username}" />
				</div>

				<div class="font-bold text-comment-gray-blue-600">
					<!-- name -->
					{comment.user.username}
				</div>
				{#if isOwner}
					<div class=" bg-comment-blue text-white  px-2">you</div>
				{/if}
				<div class="text-comment-gray-blue-500">
					<!-- posted at -->
					{comment.createdAt}
				</div>
			</div>
			{#if !isEdit}
				<div class=" gap-4 hidden lg:flex">
					{#if isOwner}
						<button class="font-medium  text-comment-red flex items-center hover:opacity-50 transition delay-75 duration-75">
							<span class="bg-[url('/images/icon-delete.svg')] bg-no-repeat bg-center w-8 h-8 "></span><span>Delete</span>
						</button>
						<button
							class="font-medium  text-comment-blue flex items-center hover:opacity-50 transition delay-75 duration-75"
							on:click="{() => {
								isEdit = true;
							}}"
						>
							<span class="bg-[url('/images/icon-edit.svg')] bg-no-repeat bg-center w-8 h-8 "></span><span>Edit</span>
						</button>
					{:else}
						<button
							class="font-medium  text-comment-blue flex items-center hover:opacity-50 transition delay-75 duration-75"
							on:click="{() => {
								allowReply = true;
							}}"
						>
							<span class="bg-[url('/images/icon-reply.svg')] bg-no-repeat bg-center w-8 h-8 "></span><span>Reply</span>
						</button>
					{/if}
				</div>
			{/if}
		</div>
		{#if !isEdit}
			<div class="text-comment-gray-blue-500">{comment.content}</div>
		{:else}
			<form class="flex flex-col gap-4">
				<textarea name="comment" id="comment-input" cols="30" rows="5" class="border border-comment-gray-blue-400  rounded-md py-4 px-6 placeholder:text-comment-gray-blue-500 lg:grow focus:text-gray-700 focus:border-comment-blue focus:outline-none" placeholder="Add a comment.." value="{comment.content}"></textarea>
				<button class="text-white bg-comment-blue py-4 px-6 rounded-md font-medium uppercase hover:bg-comment-gray-blue-400 transition delay-75 duration-75 self-end lg:px-10 "> Update </button>
			</form>
		{/if}
	</div>
	<div class="flex justify-between md:hidden">
		{#if !isEdit}
			<LikesCounter score="{comment.score}" />

			{#if isOwner}
				<button class="font-medium  text-comment-red flex items-center hover:opacity-50 transition delay-75 duration-75">
					<span class="bg-[url('/images/icon-delete.svg')] bg-no-repeat bg-center w-8 h-8 "></span><span>Delete</span>
				</button>
				<button
					class="font-medium  text-comment-blue flex items-center hover:opacity-50 transition delay-75 duration-75"
					on:click="{() => {
						isEdit = true;
					}}"
				>
					<span class="bg-[url('/images/icon-edit.svg')] bg-no-repeat bg-center w-8 h-8 "></span><span>Edit</span>
				</button>
			{:else}
				<button
					class="font-medium  text-comment-blue flex items-center hover:opacity-50 transition delay-75 duration-75"
					on:click="{() => {
						allowReply = true;
					}}"
				>
					<span class="bg-[url('/images/icon-reply.svg')] bg-no-repeat bg-center w-8 h-8 "></span><span>Reply</span>
				</button>
			{/if}
		{/if}
	</div>
</article>
{#if allowReply}
	<CommentForm />
{/if}
