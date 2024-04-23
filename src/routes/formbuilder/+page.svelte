<script>
    import { draggable_form } from '$lib/js/dnd';
    import Layout from '../+layout.svelte';

    let components = {
        layouts: [
            {
                name: 'sections',
                icon: 'fluent:poll-horizontal-16-regular',
            },
            {
                name: 'table',
                icon: 'mynaui:table',
            },
        ],
        texts: [
            {
                name: 'line text',
                icon: 'mingcute:text-line',
            },
            {
                name: 'multiline',
                icon: 'majesticons:text',
            },
            {
                name: 'multiline',
                icon: 'tabler:number-123',
            },
        ],

        multi_element: [
            {
                name: 'switch',
                icon: 'iconoir:switch-on',
            },
            {
                name: 'dropdown',
                icon: 'radix-icons:dropdown-menu',
            },
            {
                name: 'checkbox',
                icon: '"mingcute:checkbox-fill',
            },
            {
                name: 'checklist',
                icon: 'line-md:check-list-3',
            },
            {
                name: 'profile',
                icon: 'carbon:user-profile-alt',
            },
        ],
        others: [
            {
                name: 'pole',
                icon: 'fluent:poll-32-filled',
            },
            {
                name: 'Test',
                icon: 'healthicons:i-exam-multiple-choice-outline',
            },
        ],
        input: [
            {
                name: 'button',
                icon: 'teenyicons:button-outline',
            },
            {
                name: 'text',
                icon: 'streamline:input-box',
            },
            {
                name: 'big text',
                icon: 'bi:textarea-resize',
            },
            {
                name: 'date',
                icon: 'bi:calendar-date',
            },
            {
                name: 'date time',
                icon: 'fluent-mdl2:date-time',
            },
        ],
    };
</script>

<section class="w-full bg-green">
    <aside class="flex flex-col p-4 w-[20%] border-r">
        <div class="mt-4">
            <h3 class="my-4 text-gray-500 font-bold">Layout section</h3>
            <div class=" flex flex-wrap gap-2">
                {#each components.layouts as lt}
                    <button
                        class="border rounded-md flex gap-2 pl-2 pr-4 p-1 items-center"
                        use:draggable_form={lt.name}
                    >
                        <iconify-icon class="" icon={lt.icon}></iconify-icon>
                        <span class="  capitalize">{lt.name}</span>
                    </button>
                {/each}
            </div>
        </div>

        <div class="mt-4">
            <h3 class="my-4 text-gray-500 font-bold">Texts</h3>
            <div class=" flex flex-wrap gap-2">
                {#each components.texts as lt}
                    <button
                        class="border rounded-md flex gap-2 pl-2 pr-4 p-1 items-center"
                        use:draggable_form={lt.name}
                    >
                        <iconify-icon class="" icon={lt.icon}></iconify-icon>
                        <span class="  capitalize">{lt.name}</span>
                    </button>
                {/each}
            </div>
        </div>

        <div class="mt-4">
            <h3 class="my-4 text-gray-500 font-bold">Inputs</h3>
            <div class=" flex flex-wrap gap-2">
                {#each components.input as lt}
                    <button
                        class="border rounded-md flex gap-2 pl-2 pr-4 p-1 items-center"
                        use:draggable_form={lt.name}
                    >
                        <iconify-icon class="" icon={lt.icon}></iconify-icon>
                        <span class="  capitalize">{lt.name}</span>
                    </button>
                {/each}
            </div>
        </div>

        <div class="mt-4">
            <h3 class="my-4 text-gray-500 font-bold">Multi Element</h3>
            <div class=" flex flex-wrap gap-2">
                {#each components.multi_element as lt}
                    <button
                        class="border rounded-md flex gap-2 pl-2 pr-4 p-1 items-center"
                        use:draggable_form={lt.name}
                    >
                        <iconify-icon class="" icon={lt.icon}></iconify-icon>
                        <span class="  capitalize">{lt.name}</span>
                    </button>
                {/each}
            </div>
        </div>

        <div class="mt-4">
            <h3 class="my-4 text-gray-500 font-bold">Other</h3>
            <div class=" flex flex-wrap gap-2">
                {#each components.others as lt}
                    <button
                        class="border rounded-md flex gap-2 pl-2 pr-4 p-1 items-center"
                        use:draggable_form={lt.name}
                    >
                        <iconify-icon class="" icon={lt.icon}></iconify-icon>
                        <span class="  capitalize">{lt.name}</span>
                    </button>
                {/each}
            </div>
        </div>
    </aside>
</section>
