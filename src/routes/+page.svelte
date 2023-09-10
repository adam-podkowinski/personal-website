<script lang="ts">
  // TODO: don't use grid in js/flutter section
  // TODO: add new route with my work listed inside
  import Saos from "saos";
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";
  import InfoPoint from "$lib/components/InfoPoint.svelte";
  import ContactItem from "$lib/components/ContactItem.svelte";

  let jsHovered = false;
  let flutterHovered = false;
  const transitionDuration = 300;
  const jsClass =
    "row-start-1 col-start-1 row-end-4 col-end-4 text-blue-300/50 cursor-pointer hover:shadow-sm hover:text-yellow-300 duration-[300ms] lg:hover:scale-[200%] lg:origin-top-left transition-all";
  const flutterClass =
    "row-start-4 col-start-4 row-end-7 col-end-7 lg:hover:scale-[200%] cursor-pointer duration-[300ms] lg:origin-bottom-right text-blue-300/50 hover:text-blue-500 transition-all hover:shadow-sm";
  const mobile = (cls: string) => `${cls} lg:hidden`;
  const desktop = (cls: string) => `${cls} lg:block hidden`;
</script>

<svelte:head>
  <title>Adam Podkowiński</title>
  {@html `
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "type": "WebSite",
      "name": "Adam Podkowiński - Web Developer",
      "url": "https://adam-podkowinski.github.io/"
    }
  </script>
`}
</svelte:head>

<main class="page-spacing">
  <section class="lg:flex-row flex flex-col items-center pb-24">
    <div class="lg:w-[60%]">
      <Saos once={true} animation={"slide-in-top .4s cubic-bezier(0.35, 0.5, 0.65, 0.95) .4s both"}>
        <div class="lg:py-12 py-3 text-xl tracking-wide lg:mr-9">
          <p class="lg:text-6xl text-5xl font-bold grid py-4 lg:py-10 leading-tight tracking-normal">
            Hello, It's Adam 👨‍💻
          </p>
          <p>
            I'm <strong class="font-medium">Adam Podkowinski</strong>, a Mobile (<a
              href="https://flutter.dev"
              target="_blank"
              rel="noreferrer"
              class="text-blue-500 underline"
            >
              Flutter</a
            >) and full-stack JavaScript developer, ready to design and code your website!
          </p>
          <p class="mt-5">I strive to make my websites as performant and user-accessible as possible.</p>
          <p>
            Because of that, I take great pleasure in using technologies such as
            <a href="https://svelte.dev" class="underline text-orange-600" target="_blank" rel="noreferrer"> Svelte </a>
            and
            <a href="https://tailwindcss.com" class="underline text-blue-400" target="_blank" rel="noreferrer">
              Tailwind&nbsp;CSS</a
            >.
          </p>
          <p class="mt-4">I'm looking for a job, so if you're interested, please feel free to contact me!</p>
          <a
            class="font-medium px-6 py-4 text-black rounded-xl mt-8 bg-green-400
          hover:bg-green-500 w-full text-center
          lg:w-fit
          transition-colors duration-300 inline-block lg:mr-5"
            href="#contact"
          >
            Contact
          </a>
          <a
            class="font-medium px-6 py-4 border-2 rounded-xl mt-8 border-slate-700
          transition-colors      duration-300      hover:border-blue-500 w-full
          lg:w-fit
          text-center
          hover:text-blue-400 inline-block"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/adam-podkowinski"
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
            class="absolute bottom-[-10%] left-[100%] font-medium text-sm whitespace-nowrap -rotate-45 animate-pulse"
            in:fade={{
              duration: transitionDuration
            }}
            out:fade={{
              duration: transitionDuration
            }}
          >
            ⬆ Click Me
          </div>
        {/if}
        <a
          rel="noreferrer"
          target="_blank"
          href={jsHovered
            ? "https://github.com/adam-podkowinski"
            : "https://github.com/adam-podkowinski?tab=repositories&language=dart"}
          class="flex gap-6 w-36 lg:w-auto lg:grid lg:gap-0 relative grid-cols-6 grid-rows-6 auto-cols-fr auto-rows-fr"
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
              out:fade={{
                duration: transitionDuration - 100
              }}
              in:fade={{
                duration: transitionDuration - 100
              }}
            >
              <Icon icon="simple-icons:javascript" width="100%" />
            </div>
          {/if}
          {#if !jsHovered}
            <div
              class={desktop(flutterClass)}
              on:mouseenter={() => (flutterHovered = true)}
              on:mouseleave={() => (flutterHovered = false)}
              out:fade={{
                duration: transitionDuration - 100
              }}
              in:fade={{
                duration: transitionDuration - 100
              }}
            >
              <Icon icon="simple-icons:flutter" width="100%" />
            </div>
          {/if}
        </a>
      </Saos>
    </div>
  </section>
  <section class="my-3 text-lg relative">
    <h2 class="font-bold text-4xl mb-8 flex items-center gap-2">
      <Icon icon="material-symbols:person" />
      About me
    </h2>
    <div class="grid gap-3 leading-wide tracking-wide max-w-6xl ">
      <InfoPoint icon="material-symbols:school-rounded">
        I'm a high-school student (17 yo) who's passion were always computers.
      </InfoPoint>
      <InfoPoint icon="material-symbols:laptop-chromebook-outline-rounded">
        I've came on programming at a very young age with C++, game development (as all kids do).
      </InfoPoint>
      <InfoPoint icon="material-symbols:send-to-mobile">
        However, I quickly switched to mobile development and then web development.
      </InfoPoint>
      <InfoPoint icon="teenyicons:linux-alt-solid">I also love Linux and FOSS.</InfoPoint>
      <InfoPoint icon="mdi:language-rust">I'm currently learning Rust.</InfoPoint>
    </div>
  </section>
  <section class="my-16 text-lg">
    <Saos once={true} animation={"slide-in-right .4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <h2 class="font-bold text-4xl mb-8 flex items-center gap-2" id="contact">
        <Icon icon="material-symbols:call" />
        Contact
      </h2>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <ContactItem
          content="adampodkdev@gmail.com"
          link="mailto:adampodkdev@gmail.com"
          title="E-Mail"
          hoverClass="hover:bg-rose-400 hover:border-rose-400 hover:text-slate-900"
          icon="material-symbols:mail-rounded"
          delay={0}
        />
        <ContactItem
          title="Phone + Signal"
          link="tel:+48609105454"
          delay={0.3}
          hoverClass="hover:bg-green-400 hover:border-green-400 hover:text-slate-900"
          icon="material-symbols:phone-in-talk"
          content="+48 609 105 454"
        />
        <ContactItem
          title="Github"
          delay={0.6}
          hoverClass="hover:bg-black hover:border-black hover:text-white"
          icon="mdi:github"
          link="https://github.com/adam-podkowinski"
          content="github.com/adam-podkowinski"
        />
      </div>
    </Saos>
  </section>
</main>
