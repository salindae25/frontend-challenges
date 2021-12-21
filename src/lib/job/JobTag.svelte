<script lang="ts">
	import { getContext } from 'svelte';

	const { toggleCategories } = getContext('jobList');

	export let text = 'Text';
	let active = false;

	function onTagClick() {
		toggleCategories(text);
	}
</script>

<button
	class="
  bg-job-cyan-500/10
  text-job-cyan-500
  p-1
  rounded
  font-bold
  md:self-center
  hover:bg-job-cyan-500 hover:text-job-cyan-200 cursor-pointer

"
	on:click|preventDefault="{onTagClick}">{text}</button
>
