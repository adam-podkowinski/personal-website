<script lang="ts">
  import Saos from "saos";
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";

  let jsHovered = false;
  let flutterHovered = false;
  const transitionDuration = 300;
  const jsClass = `row-start-1 col-start-1 row-end-4 col-end-4 text-blue-300/50
cursor-pointer
            hover:shadow-sm hover:text-yellow-300
duration-[300ms]
            lg:hover:scale-[200%]          lg:origin-top-left          transition-all`;
  const flutterClass = `row-start-4 col-start-4 row-end-7 col-end-7
lg:hover:scale-[200%] cursor-pointer
          duration-[300ms]
          lg:origin-bottom-right text-blue-300/50 hover:text-blue-500
          transition-all hover:shadow-sm`;
  const mobile = (cls: string) => `${cls} lg:hidden`;
  const desktop = (cls: string) => `${cls} lg:block hidden`;
</script>

<div class="lg:flex-row flex items-center flex-col px-8 lg:px-40 pb-12">
  <div class="lg:w-[60%]">
    <Saos once={true} animation={"slide-in-top .4s cubic-bezier(0.35, 0.5, 0.65, 0.95) .4s both"}>
      <div class="lg:py-12 py-3 text-xl tracking-wide lg:mr-9">
        <p class="lg:text-6xl text-5xl font-bold grid py-4 lg:py-10 leading-tight tracking-normal">
          Hello, It's Adam 👨‍💻
        </p>
        <p>
          I'm Adam Podkowinski, a Mobile (<a
            href="https://flutter.dev"
            target="_blank"
            rel="noreferrer"
            class="text-blue-500 underline">Flutter</a
          >) and full-stack JavaScript developer, ready to design and code your website!
        </p>
        <p class="mt-5">
          I strive to make my websites as performant and user-accessible as possible.
        </p>
        <p>
          Because of that, I take great pleasure in using technologies such as
          <a
            href="https://svelte.dev"
            class="underline text-orange-600"
            target="_blank"
            rel="noreferrer">Svelte</a
          >&nbsp;and&nbsp;<a
            href="https://tailwindcss.com"
            class="underline text-blue-400"
            target="_blank"
            rel="noreferrer">Tailwind&nbsp;CSS</a
          >.
        </p>
        <p class="mt-4">I'm currently a high-school student actively looking for a job.</p>
        <p>If you're interested, please feel free to contact me!</p>
        <a
          class="font-medium px-6 py-4 text-black rounded-xl mt-8 bg-green-400
          hover:bg-green-500 w-full text-center
          lg:w-fit
          transition-colors duration-300 inline-block lg:mr-5"
          href="/contact">Contact</a
        >
        <a
          class="font-medium px-6 py-4 border-2 rounded-xl mt-8 border-slate-700
          transition-colors      duration-300      hover:border-blue-500 w-full
          lg:w-fit
          text-center
          hover:text-blue-400 inline-block"
          href="/work"
        >
          See my work
        </a>
      </div>
    </Saos>
  </div>
  <div class="lg:w-[40%] mt-6 lg:mt-0 relative">
    <Saos once={true} animation={"slide-in-right .6s cubic-bezier(0.35, 0.5, 0.65, 0.95) .4s both"}>
      {#if !flutterHovered && !jsHovered}
        <div
          class="absolute bottom-[-10%] left-[100%] font-bold text-sm whitespace-nowrap
      -rotate-45
      animate-pulse"
          in:fade={{ duration: transitionDuration }}
          out:fade={{ duration: transitionDuration }}
        >
          ⬆ Click Me
        </div>
      {/if}
      <div
        class="flex gap-6 w-36 lg:w-auto lg:grid lg:gap-0 relative grid-cols-6
        grid-rows-6 auto-cols-fr auto-rows-fr"
      >
        <div class={mobile(jsClass)}>
          <Icon icon="simple-icons:javascript" width="100%" />
        </div>
        <div class={mobile(flutterClass)}>
          <Icon icon="simple-icons:flutter" width="100%" />
        </div>
        {#if !flutterHovered}
          <div
            class={desktop(jsClass)}
            on:mouseenter={() => (jsHovered = true)}
            on:mouseleave={() => (jsHovered = false)}
            out:fade={{ duration: transitionDuration - 100 }}
            in:fade={{ duration: transitionDuration - 100 }}
          >
            <Icon icon="simple-icons:javascript" width="100%" />
          </div>
        {/if}
        {#if !jsHovered}
          <div
            class={desktop(flutterClass)}
            on:mouseenter={() => (flutterHovered = true)}
            on:mouseleave={() => (flutterHovered = false)}
            out:fade={{ duration: transitionDuration - 100 }}
            in:fade={{ duration: transitionDuration - 100 }}
          >
            <Icon icon="simple-icons:flutter" width="100%" />
          </div>
        {/if}
      </div>
    </Saos>
  </div>
</div>
