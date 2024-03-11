<template>
    <BoxTracker>
        <div class="columns">
            <div class="column is-4">
                {{ tarefa.descricao || 'Tarefa sem Descrição' }}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'Projeto não informado' }}
            </div>
            <div class="column">
                <CronometroTracker :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxTracker>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometroTracker from './CronometroTracker.vue';
import BoxTracker from './Box.vue';
import ITarefa from '@/interfaces/ITarefa';
export default defineComponent({
    name: 'TarefaTracker',
    components: {
        CronometroTracker,
        BoxTracker,
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
});
</script>

<style scoped></style>
```