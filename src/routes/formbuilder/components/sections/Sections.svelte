<script>
    // @ts-nocheck
    let { ...all } = $props();

    // let styles_option = $derived(all.lt.props.data);

    // // @ts-ignore
    let styles_ = $state(``);
    let drag_enter = $state(false);

    const { tag } = all.data;
    $effect(() => {
        console.log(tag);
        // @ts-ignore
        document.getElementById(tag).addEventListener('click', (e) => {
            // @ts-ignore
            all.call_when_component_on_focus({
                id: tag,
                component: 'Button',
                styles: all.data.state.styles,
                value: all.data.state.value,
            });
        });

        styles_ = `
        display: ${all.data.state.styles.display};
        justify-content: ${all.data.state.styles.justify_content};
        border-color: ${all.data.state.styles.border_color};
        border-width: ${all.data.state.styles.border_width};
        border-radius: ${all.data.state.styles.border_radius};
        padding: ${all.data.state.styles.padding};
        color: ${all.data.state.styles.color};
        width: ${all.data.state.styles.width};
        min-height:${all.data.state.styles.min_height};
        
        `;
    });

    // @ts-ignore
    function call_drag_over(e) {
        e.preventDefault();
    }
    // @ts-ignore
    function handle_drop(e) {
        console.log(e, 'dropped on section');
        call_on_dropped(e, ref);
        isDraggedOver = false;
    }
</script>

<div
    style={styles_}
    class="component"
    id={tag}
    tabindex="-1"
    role="button"
    type="button"
    draggable="true"
    on:drag={() => all.dispatch('dragEventOnBoard', { ...all.data })}
    on:dragenter={() => (drag_enter = true)}
    on:dragleave={() => (drag_enter = false)}
    on:dragover={call_drag_over}
    on:drop={handle_drop}
    class:bg={drag_enter}
    class:border-gray-400={drag_enter}
    data-type="droppable"
>
    <slot />
</div>
