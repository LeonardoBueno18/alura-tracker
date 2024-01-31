<template>
    <section>
        <strong class="display">{{ tempoDecorrido }}</strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CronometroTracker',
    computed: {
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000).toLocaleTimeString('pt-BR', {
                hour12: false,
                timeZone: 'UTC'
            });
        },
    },
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0,
        }
    }

});
</script>

<style scoped>
.display {
    color: var(--texto-primario);
}
</style>