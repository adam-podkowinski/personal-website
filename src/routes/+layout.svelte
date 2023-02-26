<script lang="ts">
  import "../app.css";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import type { LayoutData } from "./$types";
  import Header from "$lib/components/header.svelte";

  export let data: LayoutData;
</script>

<div class="bg-slate-900 text-blue-300 min-h-screen">
  <Header />
  <PageTransition pathname={data.pathname}>
    <slot />
  </PageTransition>
</div>
