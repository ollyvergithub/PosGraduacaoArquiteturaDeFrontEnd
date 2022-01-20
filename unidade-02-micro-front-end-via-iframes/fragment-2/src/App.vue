<template>
    <div id="app">
        <h1>
            I'm fragment with <span style="color: green;">Vue</span>. Click the
            button to get user from Satellite Application
        </h1>
        <button v-on:click="getUser()">Get user</button>
        <div v-if="user">
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Github:</strong><a :href="user.github" target="_blank"> {{ user.github }}</a></p>
        </div>
    </div>
</template>

<script>
import { IframeMessageProxy } from 'iframe-message-proxy';

export default {
    name: 'App',
    data() {
        return {
            user: undefined,
        }
    },
    methods: {
        async getUser() {
            const { response } = await IframeMessageProxy.sendMessage({
                action: 'getUser',
            });

            this.user = response;
        }
    }
};
</script>
