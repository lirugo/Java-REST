<template>
    <v-layout row>
        <v-text-field label="New message" placeholder="Write something" v-model="text"/>
        <v-btn icon large value="Save" @click="save"><v-icon>send</v-icon></v-btn>
    </v-layout>
</template>

<script>
    import { sendMessage } from "utils/ws";

    export default {
        props: ['messages', 'messageAttr'],
        data() {
            return {
                text: '',
                id: '',
            }
        },
        watch: {
            messageAttr(newVal, oldVal) {
                this.id = newVal.id
                this.text = newVal.text
            }
        },
        methods: {
            save() {
                sendMessage({id: this.id, text: this.text})
                this.text = ''
                this.id = ''
                // var message = {text: this.text}
                //
                // if (this.id)
                //     this.$resource('/message{/id}').update({id: this.id}, message).then(result =>
                //         result.json().then(data => {
                //             const index = getIndex(this.messages, data.id);
                //             this.messages.splice(index, 1, data);
                //             this.text = ''
                //             this.id = ''
                //         })
                //     )
                // else
                //     this.$resource('/message{/id}').save({}, message).then(result =>
                //         result.json().then(data => {
                //             this.messages.push(data);
                //             this.text = ''
                //             this.id = ''
                //         })
                //     )
            }
        }
    }
</script>

<style>

</style>