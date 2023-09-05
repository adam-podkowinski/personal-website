<script lang="ts">
  import Icon from "@iconify/svelte";
  import Saos from "saos";

  export let icon: string;
</script>

<Saos once={true} animation={`slide-in-right .3s cubic-bezier(0.35, 0.5, 0.65, 0.95) both`}>
  <div class="flex gap-3 text-xl items-center">
    <div class="border-2 border-slate-700 rounded-full p-3 text-3xl">
      <Icon {icon} />
    </div>
    <p>
      <slot />
    </p>
  </div>
</Saos>
