<script lang="ts">
	import CommentView from '$lib/comment/CommentView.svelte';
	import { getContext } from 'svelte';
	const { currentUser } = getContext('commentList');
	export let list: FMComment[] = [];
</script>

{#each list as comment}
	<section class="w-full flex flex-col gap-4">
		<CommentView comment="{comment}" isOwner="{currentUser.username === comment.user.username}" />
		{#if comment.replies && comment.replies.length > 0}
			<section class="w-full border-l-2 border-comment-gray-blue-30000 pl-4 gap-4 flex flex-col  lg:pl-8 lg:w-[97%] lg:self-end">
				{#each comment.replies as replies}
					<CommentView comment="{replies}" isOwner="{currentUser.username === replies.user.username}" />
				{/each}
			</section>
		{/if}
	</section>
{/each}
