<template>
            <FormularioTracker @aoSalvarTarefa="salvarTarefa" />
            <div class="lista">
                <BoxTracker v-if="listaVazia"> Sem Tarefas cadastradas! </BoxTracker>
                <TarefaTracker v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
            </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTracker from '../components/FormularioTracker.vue';
import TarefaTracker from '../components/Tarefa.vue';
import BoxTracker from '../components/Box.vue';
import ITarefa from '../interfaces/ITarefa';

export default defineComponent({
    name: 'App',
    components: {
        FormularioTracker,
        TarefaTracker,
        BoxTracker,
    },
    data() {
        return {
            tarefas: [] as ITarefa[],
        }
    },
    computed: {
        listaVazia(): boolean {
            return this.tarefas.length === 0;
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa);
        },
    }
});
</script>
