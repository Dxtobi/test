<script>
	import { tiltCard } from '$lib/js/card_hover';
	import Audio from '../components/Audio.svelte';
	import Post from '../components/Post.svelte';
	import Select from '../components/Select.svelte';

	$effect(() => {
		tiltCard('.tilt', { max: 25, perspective: 1000, scale: 1, speed: 150, easing: 'ease-in' });
	});

	const pros = $state([
		{
			name: 'Creative Agency',
			content: 'An agency focused on SEO, Web Dev/Design and Product branding ',
			href: '/agency',
		},
		{
			name: 'Advertising Platform',
			content: 'A platform pined on broadcasting your products or services on all available media.',
			href: '/platform',
		},
		{
			name: 'Task Manager UI',
			content: 'A simple drag and drop task manager.',
			href: '/drags',
		},
		{
			name: 'Form builder UI',
			content: 'A simple drag and drop form builder.',
			href: '/formbuilder',
		},
	]);

	let input_values = $state({
		select_value: '',
		options: ['Others', 'Angular', 'React', 'Vue', 'Svelte'],
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header
	class="flex fixed w-full justify-between items-center md:w-[50%] m-auto md:rounded-full p-2 left-0 top-6 right-0 border px-6 z-50 backdrop-blur-md"
>
	<div class="flex gap-2 items-center">
		<a href="#header">Home</a>
		<span class="block w-1 h-1 rounded-full bg-blue-600"></span>
		<a href="#projects">About</a>
	</div>
	<div class="flex font-bold items-center">
		<div class="relative flex font-bold text-3xl items-center gap-2">
			UI<span class="text-blue-600 text-[4rem]">/</span>UX
		</div>
	</div>
	<div class="flex gap-2 items-center">
		<a href="#projects">Projects</a>
		<span class="block w-1 h-1 rounded-full bg-blue-600"></span>
		<a href="#content">Contact</a>
	</div>
</header>
<section class=" bg-gradient-to-tl main m-auto w-full">
	<section
		class="min-h-screen w-full flex overflow-visible md:justify-between items-center md:px-16 px-4 gap-8 flex-col md:flex-row pt-28 md:pt-2"
	>
		<div class="w-full md:w-1/2 font-bold text-5xl grid place-content-center">
			<h1>Custom components Svelte & HTML</h1>
		</div>
		<div class="flex flex-wrap w-full md:w-1/2 gap-4 justify-between">
			{#each [1, 1, 1, 1, 1, 1, 1, 1] as _, i}
				{#if i % 2 === 0}
					<div class="flex justify-between gap-4 h-fit p-2 items-center shadow-md rounded-full">
						<img src="/avatars/av1.jpg" alt="" class="rounded-full w-10 h-10 object-cover shadow-md" />
						<div>Components</div>
					</div>
				{:else if i % 3 === 0}
					<div
						class="flex justify-between gap-4 bg-blue-400 text-white h-fit p-2 items-center shadow-md rounded-full"
					>
						<img src="/avatars/av1.jpg" alt="" class="rounded-full w-10 h-10 object-cover" />
						<div>Components</div>
					</div>
				{:else}
					<div
						class="flex justify-between gap-4 bg-blue-500 text-white h-fit p-2 items-center shadow-md rounded-full"
					>
						<img src="/avatars/av1.jpg" alt="" class="rounded-full w-10 h-10 object-cover" />
						<div>Components</div>
					</div>
				{/if}
			{/each}
		</div>
	</section>
	<section class="min-h-screen w-full flex flex-flow overflow-visible justify-between items-center px-16 gap-8">
		<Select
			options={input_values.options}
			callBackFun={(/** @type {any} */ e) => {
				input_values.select_value = e;
				console.log(e);
			}}
			value={input_values.select_value}
		/><Audio />
		<Post />
	</section>

	<section class="min-h-screen w-full grid place-content-center overflow-visible" id="projects">
		<div class="p-3 md:p-6 w-full md:w-11/12 m-auto">
			<p class="text-5xl font-bold md:w-[70%] w-full">
				Still confuse<span class="text-blue-600">?</span>
				<span class="text-gray-400"> This is just a template website</span>
				for some of my
				<span class="text-gray-400"
					><span class="text-blue-600">UI</span> projects that did not make it to production</span
				>
				and also some <span class="text-blue-600">UI designs</span> that i liked on
				<span class="text-gray-400">Pinterest</span>.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
				{#each pros as pro, i}
					<div class="min-h-[40vh] relative flex flex-col justify-between p-4 border rounded-md text-white">
						<img
							src="/SVG/Asset2.svg"
							alt=""
							class="w-full h-full absolute -z-10 left-0 top-0 object-cover bg-blue-500 rounded-md"
						/>
						<div class="px-4 py-1 w-fit rounded-full border">{pro.name}</div>

						<div class="flex justify-between items-end h-fit gap-10 w-[80%]">
							<p class=" text-3xl font-bold">{pro.content}</p>
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
