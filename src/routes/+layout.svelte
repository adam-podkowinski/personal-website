<script lang="ts">
  import "../app.css";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import type { LayoutData } from "./$types";
  import Header from "$lib/components/header.svelte";
  import Saos from "saos";
  import { onMount } from "svelte";
  import Footer from "$lib/components/Footer.svelte";

  let show = false;
  onMount(() => (show = true));
  export let data: LayoutData;
</script>

<div class="bg-slate-900 text-blue-300 min-h-screen relative">
  {#if show}
    <div class="min-h-screen bg-gradient-to-b from-slate-800/70 to-slate-900">
      <Saos once={true} animation={"slide-in-top .4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
        <Header />
      </Saos>
      <PageTransition pathname={data.pathname}>
        <div class="z-[2]">
          <slot />
        </div>
      </PageTransition>
    </div>
    <Footer />
  {/if}
</div>

<style>
  @keyframes -global-slide-in-right {
    0% {
      transform: translateX(36px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes -global-slide-in-bot {
    0% {
      transform: translateY(36px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes -global-slide-in-top {
    0% {
      transform: translateY(-36px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
