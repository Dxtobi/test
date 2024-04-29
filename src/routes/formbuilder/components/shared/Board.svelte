<script>
    import { createEventDispatcher, mount } from 'svelte';
    import Input from '../inputs/input.svelte';
    import Button from '../inputs/button.svelte';
    import Sections from '../sections/Sections.svelte';
    import Multiline from '../texts/Multiline.svelte';
    import Textarea from '../inputs/textarea.svelte';
    import Text from '../texts/Text.svelte';
    import Small from '../texts/Small.svelte';
    import Phone from '../inputs/phone.svelte';
    import Number from '../inputs/number.svelte';
    import Switch from '../inputs/switch.svelte';

    const dispatch = createEventDispatcher();
    /**@type {any}**/
    let { added_comp, call_on_dropped, call_when_component_on_focus, save_progress } = $props();
    let isDraggedOver = $state(false);
    // @ts-ignore
    function call_drag_enter(e) {
        e.preventDefault();
        isDraggedOver = true;
    }

    // @ts-ignore
    function call_drag_leave(e) {
        e.preventDefault();
        isDraggedOver = false;
    }

    // @ts-ignore
    function call_drag_over(e) {
        e.preventDefault();
    }
    // @ts-ignore
    function handle_drop(e) {
        //console.log(e);
        call_on_dropped(e, ref);
        isDraggedOver = false;
    }

    // @ts-ignore
    function handle_(e) {
        // console.log(e);
        // dragging_item(e);
        // call_on_dropped(e, ref);
        // isDraggedOver = false;
    }

    /**@type {any}**/
    let ref;
</script>

<div class="w-full h-full p-8 flex flex-col gap-2">
    <div
        tabindex="-1"
        class="w-full h-full p-8 flex flex-col gap-2 border"
        role="region"
        bind:this={ref}
        on:dragenter={call_drag_enter}
        on:dragleave={call_drag_leave}
        on:dragover={call_drag_over}
        on:drop={handle_drop}
        class:ring={isDraggedOver}
        class:ring-yellow-400={isDraggedOver}
    >
        {#each added_comp as data}
            <!-- SECTIONS -->
            {#if data.name == 'Sections'}
                <Sections {dispatch} {call_when_component_on_focus} {data} />
            {/if}

            {#if data.name == 'Label'}
                <Small {dispatch} {call_when_component_on_focus} {data} />
            {/if}

            <!-- TEXTS -->
            {#if data.name == 'Text'}
                <Text {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Multiline'}
                <Multiline {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Phone'}
                <Phone {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Number'}
                <Number {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Switch'}
                <Switch {dispatch} {call_when_component_on_focus} {data} />
            {/if}

            <!-- INPUT -->
            {#if data.name == 'Date'}
                <Input {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Button'}
                <Button {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Input'}
                <Input {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Textarea'}
                <Textarea {dispatch} {call_when_component_on_focus} {data} />
            {/if}

            <!-- <Comp.comp {handle_} id={'id'} /> -->
        {/each}
    </div>
</div>
<button on:click={() => save_progress(ref)} class=" bg-slate-900 text-white rounded w-fit p-5 fixed bottom-6 right-3"
    >Save</button
>
