<script>
    // @ts-nocheck

    // let { startX, startY, endX, endY } = $props();
    let comp1 = $state({ di: null, dii: null });

    console.log(comp1);
    $inspect(comp1.di?.getBoundingClientRect().x);
    let { startX, startY, endX, endY } = $state({
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
    });
    $effect(() => {
        if (comp1.di && comp1.dii) {
            const rect1 = comp1.di.getBoundingClientRect();
            const rect2 = comp1.dii.getBoundingClientRect();
            startX = rect1.left;
            startY = rect1.top;
            endX = rect2.left;
            endY = rect2.top;
        }
    });
</script>

<div bind:this={comp1.di} class="h-[300px] w-[200px] border border-green-500"></div>

<div bind:this={comp1.dii} class="h-[300px] w-[200px] border border-red-500"></div>

<svg viewBox="0 0 100 100"> <line x1={startX} y1={startY} x2={endX} y2={endY} stroke="black" stroke-width="2" /> </svg>
