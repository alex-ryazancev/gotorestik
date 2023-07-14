<template>
  <div id="app">
    <b-button class="mt-3 mb-3" v-if="$route.path === '/'" variant="outline-dark" pill @click="$router.push('/about')">Выбрать из списка</b-button>
    <b-button class="mt-3 mb-3" v-else variant="outline-dark" pill @click="$router.push('/')">Рулетка</b-button>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
