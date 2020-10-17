<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
<div id="containerConteudo">
  <label for="nome">Nome</label>
  <input class="inputs" type="text" id="nome" value="" v-model="nome">
  <label for="area">Area</label>
  <input class="inputs" type="text" id="area" value="" v-model="area">
  <label for="prazo">Prazo</label>
  <input class="inputs" type="text" id="prazo" value="" v-model="prazo">
  <label for="orcamento">Orcamento</label>
  <input class="inputs" type="text" id="orcamento" value="" v-model="orcamento">
  <input type="button" id="botao" value="Salvar" @click="salvar()">
</div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Dashboard',
  components: {
  },
  data () {
    return {
      nome: "",
      area: "",
      prazo: "",
      orcamento: ""
    }
  },
  methods: {
      salvar: function() {
          if(nome.value == "" || area.value == "" || prazo.value == "" || orcamento.value == "" || orcamento.value < 5000 || orcamento.value > 100000000) {
            alert("Existem erros!")   
            return;
          }
          

          const json = { 
              nome: nome.value, 
              area: area.value, 
              prazo: prazo.value, 
              orcamento: orcamento.value
          };

          axios.post("https://projeto-prova.herokuapp.com/projeto", json)
          .then(response =>  alert("certo"));
      }
  }
}
</script>

<style>
    .inputs{
        padding: 5px;
        max-width: 300px;
        width:100%;
        height: 20px;
    }

     #botao{
        padding: 5px;
        margin: 10px;
        max-width: 150px;
        width:100%;
    }
</style>