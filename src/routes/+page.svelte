<script lang="ts">
  import Saos from "saos";
  import Icon from "@iconify/svelte";
</script>

<div class="lg:flex-row flex items-center flex-col px-8 lg:px-40 pb-12">
  <div class="lg:w-[60%]">
    <Saos
      once={true}
      animation={"slide-in-top .4s cubic-bezier(0.35, 0.5, 0.65, 0.95) .4s both"}
    >
      <div class="lg:py-12 py-3 text-xl tracking-wide lg:mr-9">
        <p class="text-6xl font-bold grid py-4 lg:py-10 leading-snug tracking-normal">
          Hello, It's Adam 👨‍💻
        </p>
        <p>
          I'm Adam Podkowinski, a full-stack JavaScript developer, ready to design and code your
          website!
        </p>
        <p class="mt-5">
          I strive to make my websites as performant and user-accessible as possible.
        </p>
        <p class="mb-4">
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
  <div class="lg:w-[40%] w-[30%] mt-6 lg:mt-0">
    <Saos
      once={true}
      animation={"slide-in-right .6s cubic-bezier(0.35, 0.5, 0.65, 0.95) .5s both"}
    >
      <Icon icon="teenyicons:javascript-outline" height="100%" />
    </Saos>
  </div>
</div>
