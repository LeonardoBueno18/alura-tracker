<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroTracker :tempoEmSegundos="tempoEmSegundos" />
        <BotaoTracker @aoclicar="iniciarTarefa" :desabilitado="cronometroRodando" icone="fas fa-play" texto="play" />
        <BotaoTracker @aoclicar="pararTarefa" :desabilitado="!cronometroRodando" icone="fas fa-stop" texto="stop" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroTracker from './CronometroTracker.vue';
import BotaoTracker from './Botao.vue';

export default defineComponent({
    name: 'TemporizadorTracker',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        CronometroTracker,
        BotaoTracker,
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
        }
    },
    methods: {
        iniciarTarefa() {
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++;
            }, 1000);
        },
        pararTarefa() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
});
</script>

<style scoped></style>
