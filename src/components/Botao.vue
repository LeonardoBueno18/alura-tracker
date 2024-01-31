<template>
    <button class="button" @click="clicado" :disabled="desabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'BotaoTracker',
        emits: ['aoclicar'],
        props: {
            desabilitado: {
                type: Boolean,
            },
            icone: {
                type: String,
                required: true,
            },
            texto:{
                type: String,
                required: true,
            }
        },
        methods: {
            clicado() : void {
                this.$emit('aoclicar');
            }
        }
    });
</script>

<style scoped>
.button {
    width: 40%;
}

@media only screen and (max-width: 768px) {
    .button {
        width: 35%;
    }
}
</style>
```