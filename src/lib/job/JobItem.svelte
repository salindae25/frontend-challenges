<script lang="ts">
  import JobTag from "./JobTag.svelte";

  export let job: Job;
</script>

<article
  class="
bg-white
flex flex-col
mx-4
p-4
rounded-[8px]
shadow-lg shadow-job-cyan-600/50
border-l-4 border-job-cyan-500
gap-4
relative
md:flex-row md:item-center md:px-8 md:mx-0
"
  class:border-job-cyan-500={job.featured}
>
  <!-- card icon -->
  <img
    class="
w-14
h-14
rounded-full
absolute
top-[-30px]
md:static md:self-center md:w-20 md:h-20
"
    src={job.logo}
    alt={job.company}
  />
  <!-- card detail -->
  <div class="gap-2 flex flex-col font-medium mt-4 md:mt-0 md:grow">
    <!-- company name & pills -->
    <div class="flex item-center">
      <h6 class="text-job-cyan-500 mr-4">{job.company}</h6>
      {#if job.new}
        <span
          class="
    bg-job-cyan-500
    text-white
    uppercase
    mr-2
    text-xs
    inline-flex
    rounded-full
    h-6
    px-2
    justify-center
    items-center
  ">New !</span
        >
      {/if}
      {#if job.featured}
        <span
          class="
    bg-job-cyan-800
    text-white
    uppercase
    mr-2
    text-xs
    inline-flex
    rounded-full
    h-6
    px-2
    justify-center
    items-center
  ">Featured</span
        >{/if}
    </div>
    <!-- job title -->
    <h4
      class="text-job-cyan-800 text-lg font-bold hover:text-job-cyan-500 cursor-pointer"
    >
      {job.position}
    </h4>
    <!-- job related sub detail -->
    <div class="flex text-job-cyan-600 font-semibold">
      {job.postedAt} . {job.contract} . {job.location}
    </div>
    <hr class="border-t-2 md:invisible" />
  </div>
  <!-- card tags -->
  <div
    class="
flex flex-wrap
w-9/12
gap-x-4 gap-y-4
md:flex-nowrap md:gap-2 md:justify-self-end md:shrink md:w-auto
"
  >
    <!-- Role -->

    <JobTag text={job.role} />

    <!-- Level -->
    <JobTag text={job.level} />

    <!-- Languages -->
    {#each job.languages as language}
      <JobTag text={language} />
    {/each}
    {#each job.tools as tool}
      <JobTag text={tool} />
    {/each}
  </div>
</article>
