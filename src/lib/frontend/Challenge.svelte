<script lang="ts">
  export let link = "/jobs";
  export let imageUrl =
    "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/i4yfvoqdzya3dlizdyfk.jpg";
</script>

<div
  class="rounded-md border border-blue-400/50 flex flex-col gap-4 w-[360px] overflow-hidden"
>
  <img
    alt=""
    src={imageUrl}
    class="w-[360px] h-auto hover:scale-110 transition ease-linear duration-300 object-cover"
  />
  <div class="flex flex-col gap-3 p-4 min-w-full">
    <a
      href={link}
      class="text-xl font-bold hover:text-teal-500 transition ease-linear duration-300 delay-100"
    >
      <slot name="title">Jobs listing with filtering</slot>
    </a>
    <div class="grid grid-flow-col w-4/6  text-gray-500 font-medium">
      <slot name="tech"
        ><span>HTML</span><span> Tailwindcss</span><span> Svelte</span><span>
          Css</span
        ></slot
      >
    </div>
    <slot name="description">
      <p class=" capitalize">
        tailwind for styling. filter out jobs based on the categories selected
        <a
          href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
          target=""
          class="text-blue-600 font-medium  hover:underline"
        >
          for more info.</a
        >
      </p>
    </slot>
  </div>
</div>
