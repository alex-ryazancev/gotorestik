import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: [],
    randomRestaurant: null,
    idRestaurant: null,
    selected: false,
  },
  getters: {
  },
  mutations: {
    SET_RESTAURANTS(state, restaurants) {
      if (Array.isArray(restaurants) && restaurants.length > 0) {
        state.restaurants = restaurants;
      }
    },
    SET_RANDOM_RESTAURANT(state, randomRestaurant) {
      state.randomRestaurant = randomRestaurant;
    },
    SET_ID_RESTAURANT(state, newIdRestaurant) {
      state.idRestaurant = newIdRestaurant;
    },
    SET_SELECTED(state, value) {
      state.selected = value;
    },
  },
  actions: {
    async fetchRestaurants({ commit }) {
      try {
        let response = await axios.get('https://bandaumnikov.ru/api/test/site/get-index');
        commit('SET_RESTAURANTS', response.data.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },
    async getRestorauntById({ state, commit }) {
      try {
        let response = await axios.get('https://bandaumnikov.ru/api/test/site/get-view?id=' + state.idRestaurant);
        commit('SET_RANDOM_RESTAURANT', response.data.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
  }
});
