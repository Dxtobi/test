<script>
    import { writable } from 'svelte/store';
    import '@xyflow/svelte/dist/style.css';
    import { SvelteFlow, Background, Controls } from '@xyflow/svelte';

    const nodes = writable([
        {
            id: 'twitter-trending-topic-1',
            position: { x: 0, y: 0 },
            data: {
                label: 'Trending Topic 1',
                tweets: [
                    { id: 'tweet-1', text: '...' },
                    { id: 'tweet-2', text: '...' },
                ],
            },
        },
        {
            id: 'twitter-trending-topic-2',
            position: { x: 100, y: 100 },
            data: {
                label: 'Trending Topic 2',
                tweets: [
                    { id: 'tweet-3', text: '' },
                    { id: 'tweet-4', text: '' },
                ],
            },
        },
        {
            id: 'google-trending-topic-1',
            position: { x: 200, y: 0 },
            data: {
                label: 'Google Trending Topic 1',
            },
        },
        {
            id: 'google-trending-topic-2',
            position: { x: 300, y: 100 },
            data: {
                label: 'Google Trending Topic 2',
            },
        },
        {
            id: 'ai-generated-post-1',
            position: { x: 400, y: 0 },
            data: {
                label: 'AI Generated Post 1',
                text: '...',
            },
        },
        {
            id: 'ai-generated-post-2',
            position: { x: 500, y: 100 },
            data: {
                label: 'AI Generated Post 2',
                text: '...',
            },
        },
    ]);
    const edges = writable([
        {
            id: 'twitter-trending-topic-1-google-trending-topic-1',
            source: 'twitter-trending-topic-1',
            target: 'google-trending-topic-1',
        },
        {
            id: 'twitter-trending-topic-2-google-trending-topic-2',
            source: 'twitter-trending-topic-2',
            target: 'google-trending-topic-2',
        },
        {
            id: 'ai-generated-post-1-twitter-trending-topic-1',
            source: 'ai-generated-post-1',
            target: 'twitter-trending-topic-1',
        },
        {
            id: 'ai-generated-post-2-twitter-trending-topic-2',
            source: 'ai-generated-post-2',
            target: 'twitter-trending-topic-2',
        },
    ]);
</script>

<main>
    <SvelteFlow {nodes} {edges} fitView>
        <Background bgColor="rgba(126,159,219,0.5)" patternColor="white" />
        <Controls showInteractive={false} />
    </SvelteFlow>
</main>

<style>
    main {
        height: 100vh;
    }
</style>
