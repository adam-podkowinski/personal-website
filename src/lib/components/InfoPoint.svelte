<script lang="ts">
  // TODO: add Saos
  import Icon from "@iconify/svelte";

  export let icon: string;
</script>

<div class="flex gap-3 text-xl items-center">
  <div class="border-2 border-slate-700 rounded-full p-3 text-3xl">
    <Icon {icon} />
  </div>
  <p><slot /></p>
</div>

