<script lang="ts">
  import "../app.css";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import type { LayoutData } from "./$types";
  import Header from "$lib/components/header.svelte";
  import Saos from "saos";
  import { onMount } from "svelte";

  let show = false;
  onMount(() => (show = true));
  export let data: LayoutData;
</script>

<div class="bg-slate-900 text-blue-300 min-h-screen">
  {#if show}
    <Saos once={true} animation={"slide-in-top .4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <Header />
    </Saos>
    <PageTransition pathname={data.pathname}>
      <slot />
    </PageTransition>
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
