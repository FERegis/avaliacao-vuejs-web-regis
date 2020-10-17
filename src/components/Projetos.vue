<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
<div id="containerConteudo">
    <h1>Painel dos projetos</h1>
    <div class="painel">
        <div class="itensPainel"><h4>Tecnológica</h4><h1>{{totais.tec}}%</h1></div>
        <div class="itensPainel"><h4>Humana</h4><h1>{{totais.hum}}%</h1></div>
        <div class="itensPainel"><h4>Médica</h4><h1>{{totais.med}}%</h1></div>
    </div>

    <ul v-if="info != undefined" id="example-1">
        <li v-for="dado in list" :key="dado.id">
            {{ dado.id }}
            {{ dado.nome }}
            {{ dado.orcamento }}
        </li>
    </ul>

    <h2 v-if="info != undefined">Valor Total Orçamento: R${{valorTotal}}</h2>
</div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Projetos',
  components: {
  },
  data () {
    return {
      info: null,
      totais: {
      },
      dataMaiores: []
    }
  },
  mounted () {
    axios
      .get('https://projeto-prova.herokuapp.com/projeto')
      .then(({data}) => {
          var total = data.length;

          this.info = data

          var totais = {
             tec: 0,
             med: 0,
             hum: 0
          };

          data.forEach(element => {
              switch(element.area.toLowerCase()) {
                  case "tecnologica": totais.tec++;
                  break;
                  case "medica": totais.med++;
                  break;
                  case "humana": totais.hum++;
                  break;
              }
          });

          this.totais = {
              tec: ((totais.tec/total)*100).toFixed(2),
              med: ((totais.med/total)*100).toFixed(2),
              hum: ((totais.hum/total)*100).toFixed(2),
          }
      });
  },
  computed: {
    list() {
         function compare( a, b ) {
         if ( a.orcamento < b.orcamento ){
           return 1;
         }
         if ( a.orcamento > b.orcamento ){
           return -1;
         }
         return 0;
         }

        var obj = this.info.sort(compare)

        var objReduzido = []

        for (let index = 0; index < 5; index++) {
             objReduzido.push(this.info[index]);
        }

       return objReduzido;
    },
    valorTotal() {
        return this.info.reduce((a, b) => a.orcamento + b.orcamento)
    }
  },
}
</script>

<style>
    .painel {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        width: 100%;
    }

    .itensPainel {
        display: flex;
        align-items: center;
        justify-content: space-around;

        max-width: 350px;
        width: 100%;
        background-color: #f7f7f7;
        padding: 10px;
        
    }
</style>