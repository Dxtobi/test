import { readable } from "svelte/store";
import Input from "../../routes/formbuilder/components/inputs/input.svelte";

export const components = readable({
    layouts: [
        {
            name: 'Sections',
            icon: 'fluent:poll-horizontal-16-regular',
            state: {
                id: '',
                styles: {
                    display: 'flex',
                    justify_content: 'space-between',
                    border_radius: '',
                    border_width: '1px',
                    padding: '',
                    background_color: '#fcff00',
                    border_color: '',
                    color: '',
                    width: '100%',
                    min_height: '100px'
                }
            }
        },
    ],
    texts: [
        {
            name: 'Text',
            icon: 'mingcute:text-line',
            state: {
                id: 'none',
                component: '',
                value: 'Text',
                styles: {
                    border_width: '',
                    border_radius: '',
                    text_align: 'start',
                    font_size: '24px',
                    padding: '',
                    border_color: '',
                    background_color: '',
                    color: '',
                },
            }
        },
        {
            name: 'Multiline',
            icon: 'majesticons:text',
            state: {
                id: '',
                component: '',
                value: 'A Lot of texts and more',
                styles: {
                    border_width: '',
                    border_radius: '',
                    text_align: 'start',
                    padding: '',
                    border_color: '',
                    background_color: '',
                    color: '',
                    //text: 'center',
                },
            }
        }, {
            name: 'Label',
            icon: 'material-symbols:label-sharp',
            state: {
                id: '',
                component: '',
                value: 'Small text',
                styles: {
                    border_width: '',
                    border_radius: '',
                    padding: '',
                    text_align: 'start',
                    border_color: '',
                    background_color: '',
                    color: '',
                    font_size: '13px',
                    text: 'center',
                },
            }
        },
        // {
        //     name: 'multiline',
        //     icon: 'tabler:number-123',
        // },
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
            icon: "mingcute:checkbox-fill",
        },
        {
            name: 'checklist',
            icon: 'line-md:check-list-3',
        },
        // {
        //     name: 'profile',
        //     icon: 'carbon:user-profile-alt',
        // },
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
            name: 'Button',
            icon: 'teenyicons:button-outline',
            state: {
                value: 'Button',
                type: 'submit',
                func: () => null,
                styles: {
                    border_width: '0px',
                    border_radius: '5px',
                    width: '200px',
                    padding: '5px 10px',
                    background_color: '#020b24',
                    border_color: '#fcff00',
                    color: '#ffffff',
                },
            }
        },
        {
            name: 'Input',
            icon: 'streamline:input-box',
            state: {
                name: 'text',
                type: 'text',
                id: '',
                value: '',
                placeholder: 'Type Something',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: 'gray',
                    border_radius: '5px',
                    padding: '5px 10px',
                    color: 'inherit',
                    width: 'auto'
                },
            }
        },
        {
            name: 'Phone',
            icon: 'streamline:input-box',
            state: {
                name: 'text',
                type: 'tel',
                id: '',
                value: '',
                placeholder: '+432',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: 'gray',
                    border_radius: '5px',
                    padding: '5px 10px',
                    color: 'inherit',
                    width: 'auto'
                },
            }
        },
        {
            name: 'Number',
            icon: 'tabler:number-123',
            state: {
                name: 'text',
                type: 'text',
                id: '',
                value: '',
                placeholder: '123',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: 'gray',
                    border_radius: '5px',
                    padding: '5px 10px',
                    color: 'inherit',
                    width: 'auto'
                },
            }
        },
        {
            name: 'Switch',
            icon: 'iconoir:switch-on',
            state: {
                name: 'text',
                type: 'switch',
                id: '',
                value: '',
                styles: {

                },
            }
        },
        {
            name: 'Dropdown',
            icon: 'radix-icons:dropdown-menu',
            state: {
                name: 'dropdown',
                type: 'text',
                id: '',
                value: '',
                placeholder: '123',
                required: true,
                options: [],
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: 'gray',
                    border_radius: '5px',
                    padding: '5px 10px',
                    color: 'inherit',
                    width: 'auto'
                },
            }
        },
        {
            name: 'checkbox',
            icon: "mingcute:checkbox-fill",
            state: {
                name: 'text',
                type: 'text',
                id: '',
                value: '',
                placeholder: '123',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: 'gray',
                    border_radius: '5px',
                    padding: '5px 10px',
                    color: 'inherit',
                    width: 'auto'
                },
            }
        },
        // {
        //     name: 'checklist',
        //     icon: 'line-md:check-list-3',
        // },
        {
            name: 'Textarea',
            icon: 'bi:textarea-resize',
            state: {
                name: 'textarea',
                type: 'text',
                id: '',
                placeholder: 'Type Something',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: 'gray',
                    border_radius: '5px',
                    padding: '5px 10px',
                    color: 'inherit',
                },
            }
        },
        {
            name: 'Date',
            icon: 'fluent-mdl2:date-time',
            state: {
                name: 'date',
                type: 'date',
                id: '',
                placeholder: 'Type Something',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: 'gray',
                    border_radius: '10px',
                    padding: '5px 10px',
                    color: 'inherit',
                },
            }
        },
        // {
        //     name: 'Date time',
        //     icon: 'fluent-mdl2:date-time',
        // //     state: {
        // label: 'Button',
        // type: 'submit',
        // func: () => null,
        // styles: {
        //     background_color: 'yellow',
        //     border_width: '2px',
        //     border_color: 'black',
        //     border_radius: '10px',
        //     padding: '5px 10px',
        //     color: 'black',
        // },
        //     }
        // },
    ],
});



export const components_raw = [
    {
        name: 'sections',
        icon: 'fluent:poll-horizontal-16-regular',
    },
    {
        name: 'table',
        icon: 'mynaui:table',
    },
    {
        name: 'line text',
        icon: 'mingcute:text-line',
    },
    {
        name: 'multiline',
        icon: 'majesticons:text',
    },

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
    {
        name: 'pole',
        icon: 'fluent:poll-32-filled',
    },
    {
        name: 'Test',
        icon: 'healthicons:i-exam-multiple-choice-outline',
    },
    {
        name: 'button',
        icon: 'teenyicons:button-outline',
        component: Input,
    },
    {
        name: 'text',
        icon: 'streamline:input-box',
        component: Input,
    },
    {
        name: 'number',
        icon: 'tabler:number-123',
        component: Input,
    },
    {
        name: 'big text',
        icon: 'bi:textarea-resize',
        component: Input,
    },
    {
        name: 'date',
        icon: 'bi:calendar-date',
        component: Input,
    },
    {
        name: 'date time',
        icon: 'fluent-mdl2:date-time',
        component: Input,
    },
];