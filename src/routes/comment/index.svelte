<script lang="ts">
	import CommentForm from '$lib/comment/CommentForm.svelte';
	import CommentList from '$lib/comment/CommentList.svelte';
	import { setContext } from 'svelte';
	let currentUser = {
		image: {
			png: './images/avatars/image-juliusomo.png',
			webp: './images/avatars/image-juliusomo.webp'
		},
		username: 'juliusomo'
	};
	setContext('commentList', {
		currentUser: currentUser
	});
	let comments: FMComment[] = [];
	async function getCommentList() {
		const res = await fetch(`/api/comments`);
		if (res.ok) {
			comments = await res.json();
		} else {
			throw new Error('Error occured');
		}
	}
	async function editComment(comment) {
		const res = await fetch(`/api/comments`, {
			method: 'POST',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: currentUser,
				comment: comment
			})
		});
		if (res.ok) {
			let comment = await res.json();
			// replcae comments using comment
			comments = comments.map((item) => (item.id !== comment.id ? item : comment));
		} else {
			throw new Error(await res.json());
		}
	}
	let promise = getCommentList();
</script>

<div class="w-screen min-h-screen bg-comment-gray-blue-300">
	<section class="flex flex-col w-screen  font-comment-font font-normal px-4 py-6 gap-4 lg:w-4/6 lg:mx-auto">
		{#await promise}
			<span>Loading....</span>
		{:then}
			<CommentList list="{comments}" />
		{/await}
		<CommentForm />
	</section>
</div>
