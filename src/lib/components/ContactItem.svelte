<script lang="ts">
  import Icon from "@iconify/svelte";
  import Saos from "saos";

  export let delay: number;
  export let title: string;
  export let content: string;
  export let link: string;
  export let icon: string;
  export let hoverClass: string;
</script>

<Saos once={true} animation={`slide-in-bot .3s cubic-bezier(0.35, 0.5, 0.65, 0.95) ${delay}s both`}>
  <a
    href={link}
    class={`border-2 rounded-xl px-6 py-3 border-slate-700 text-center transition-colors ${hoverClass} block duration-300`}
  >
    <h3 class="tracking-wide font-medium text-xl flex justify-center items-center gap-2">
      <Icon {icon} />
      {title}
    </h3>
    {content}
  </a>
</Saos>
