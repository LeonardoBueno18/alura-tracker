<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="Logo do alura tracker" />
        </h1>
        <button class="button" @click="alterarTema">{{ textoBotao }}</button>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link"><i class="fa fa-tasks"></i> Tarefas</router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link"><i class="fa fa-project-diagram"></i> Projetos</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoAlternarTema'],
    computed: {
        textoBotao() {
            if (this.modoEscuroAtivo) {
                return 'Desativar modo escuro';
            }
            else {
                return 'Ativar modo escuro';
            }
        }
    },
    data() {
        return {
            modoEscuroAtivo: false,
        }
    },
    methods: {
        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo;
            this.$emit('aoAlternarTema', this.modoEscuroAtivo);
        }
    }
});
</script>


<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

img {
    width: 100%;
    height: auto
}

.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }

    img {
        width: 100%;
        height: auto;
        display: block;
        padding: 0.5rem;
    }
}
</style>
