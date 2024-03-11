<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para a criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <TemporizadorTracker @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import TemporizadorTracker from './Temporizador.vue';
import { computed } from 'vue';
import { useStore } from '@/store';
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { NOTIFICAR } from '@/store/tipo-mutacoes';

export default defineComponent({
    name: 'FormularioTracker',
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorTracker
    },
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            if (!this.idProjeto) {
                this.store.commit(NOTIFICAR, {
                    tipo: TipoNotificacao.FALHA,
                    titulo: 'OPS! Um erro aconteceu!',
                    texto: `Você esqueceu de selecionar o projeto!`,
                })
                this.descricao = '';
            } else {
                this.$emit('aoSalvarTarefa', {
                    duracaoEmSegundos: tempoDecorrido,
                    descricao: this.descricao,
                    projeto: this.projetos.find(proj => proj.id == this.idProjeto)
                });
                this.descricao = '';
            }
        }
    },
    setup() {
        const store = useStore();
        return {
            projetos: computed(() => store.state.projetos),
            store
        }
    }
});
</script>


<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>
