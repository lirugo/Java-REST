<template>
    <v-card class="my-2">
        <v-card-text>
            <v-chip>{{message.id}}</v-chip>
            {{message.text}}
        </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon small @click="edit" ><v-icon small>edit</v-icon></v-btn>
        <v-btn icon small @click="del" ><v-icon small>delete</v-icon></v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>

    export default {
        props: ['message', 'editMessage', 'deleteMessage', 'messages'],
        methods: {
            edit() {
                this.editMessage(this.message)
            },
            del() {
                this.deleteMessage(this.message)
            }
        }
    }

</script>

<style>

</style>