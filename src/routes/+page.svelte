<script>
  import SpanSwitch from "../components/SpanSwitch.svelte";

  import Cart from "../components/Cart.svelte";

  import { tiltCard } from "$lib/js/card_hover";
  import Select from "../components/Select.svelte";
  import Mobile from "../components/Mobile.svelte";
  import Post from "../components/Post.svelte";
  import Header from "./Header.svelte";

  $effect(() => {
    tiltCard(".tilt", {
      max: 25,
      perspective: 1000,
      scale: 1,
      speed: 150,
      easing: "ease-in",
    });
  });

  const pros = $state([
    {
      name: "Creative Agency",
      content: "An agency focused on SEO, Web Dev/Design and Product branding ",
      href: "/agency",
    },
    {
      name: "Advertising Platform",
      content:
        "A platform pined on broadcasting your products or services on all available media.",
      href: "/platform",
    },
    {
      name: "Task Manager UI",
      content: "A simple drag and drop task manager.",
      href: "/drags",
    },
    {
      name: "Form builder UI",
      content: "A simple drag and drop form builder.",
      href: "/formbuilder",
    },
  ]);

  let input_values = $state({
    select_value: "",
    options: ["Others", "Angular", "React", "Vue", "Svelte"],
  });
</script>

<svelte:head>
  <title>UI-Test</title>
  <meta name="description" content="" />
</svelte:head>

<Header/>
<section class=" bg-gradient-to-tl main m-auto w-full alternative_bg_box">
  <section
    class="min-h-screen w-full flex overflow-visible md:justify-between items-center md:px-16 px-4 gap-8 flex-col md:flex-row pt-28 md:pt-2"
  >
    <div class="w-full md:w-1/2 grid place-content-center">
      <h1 class=" font-bold text-5xl">
        Custom components Svelte <span class=" text-[4rem] text-red-500">
          &</span
        >
        HTML<span class=" text-[4rem] text-red-500">.</span>
      </h1>
      <br />
      <p class=" text-3xl">
        This are some useful components used in my past projects.
      </p>
    </div>
    <div
      class="flex flex-col w-full md:w-1/2 gap-4 justify-between relative min-h-[50vh]"
    >
      <Select
        options={input_values.options}
        callBackFun={(/** @type {any} */ e) => {
          input_values.select_value = e;
          console.log(e);
        }}
        value={input_values.select_value}
      />
      <Post />
      <Cart></Cart>
      <SpanSwitch></SpanSwitch>
      <Mobile></Mobile>
    </div>
  </section>

  <section
    class="min-h-screen w-full grid place-content-center overflow-visible"
    id="projects"
  >
    <div class="p-3 md:p-6 w-full md:w-11/12 m-auto" id="content">
      <p class="text-2xl font-bold md:w-[70%] w-full">
        Still confuse<span class="text-blue-600">?</span>
        <span class="text-gray-400"> This is just a template website</span>
        for some of my
        <span class="text-gray-400"
          ><span class="text-blue-600">UI</span> projects that did not make it to
          production</span
        >
        and also some <span class="text-blue-600">UI designs</span> that i liked
        on
        <span class="text-gray-400">Pinterest</span>.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {#each pros as pro, i}
          <div
            class="min-h-[20vh] relative flex flex-col justify-between p-4 border rounded-md text-white bg-neutral-900"
          >
            <div class="px-4 py-1 w-fit rounded-full border">{pro.name}</div>

            <div class="flex justify-between items-end h-fit gap-10 w-[60%]">
              <p class=" font-bold">{pro.content}</p>
            </div>
            <a
              href={pro.href}
              class=" w-10 h-10 rounded-full border flex justify-center items-center absolute right-4 bottom-4 hover:scale-110 transition-all"
            >
              &rarr;
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>
</section>

<style>
  h1 {
    width: 100%;
  }

  div {
    overflow: visible;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
