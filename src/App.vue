<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
@import url('https://fonts.googleapis.com/css?family=Roboto');

<template>
<div>
<div id="container">
<div class="goTo">
<router-link class="text" to="/projetos">Projetos</router-link>
</div>
<div class="goTo">
<router-link class="text" to="/dashboard">Dashboard</router-link>
</div>
</div>
<router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
  
<style>
html, body {
    margin: 0px;
    padding: 0px;

    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
}

#container {
    display: flex;
    align-items: center;

    width: 100%;
    height: 40px;
    background-color: #0275d8;
    padding: 5px;
  }

  #containerConteudo {
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        padding: 20px;
        width: 100%;
    }

.goTo {
  margin: 0px 20px;
  font-size: 20px;
}
.text{
  text-decoration: none;
  color: white !important;  
}
</style>
