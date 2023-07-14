<template>
  <div class="d-flex justify-content-center">
    <div v-if="randomRestaurant">

      <h4 class="mb-3" style="max-width: 300px; height: 60px">Идем в {{randomRestaurant.name}} ?</h4>
      <div class="d-flex justify-content-center">
        <h6 class="m-1 mb-2">только с бизнес-ланчем </h6><b-form-checkbox v-model="selected"></b-form-checkbox>
      </div>

      <b-card
        no-body
        style="width: 20rem;"
      >
        <b-card-body class="card-name">
          <b-card-sub-title class="mb-2">{{randomRestaurant.address}}</b-card-sub-title>
          <b-card-title style="color: blue;">{{randomRestaurant.name}}</b-card-title>
        </b-card-body>

        <b-list-group flush>
          <b-list-group-item :style="isLanch()">Бизнес-ланч - {{(randomRestaurant.business_lunch ? 'ЕСТЬ' : 'НЕТ')}}</b-list-group-item>
          <b-list-group-item>Кухня - {{randomRestaurant.cuisine || 'не указано'}}</b-list-group-item>
          <b-list-group-item>расстояние м. - {{randomRestaurant.distance || 'не указано'}}</b-list-group-item>
          <b-list-group-item>Чек р. - {{randomRestaurant.price || 'не указано'}}</b-list-group-item>
        </b-list-group>

        <b-card-body>
          <div class="d-flex justify-content-between">
            <b-button variant="danger" @click="getRandomRestoraunt">Хочу другое</b-button>
            <b-button variant="success" @click="showModal=true">Да, спасибо!</b-button>
          </div>
        </b-card-body>

        <b-card-footer>{{randomRestaurant.landmark}}</b-card-footer>

        <b-card-img :src="randomRestaurant.photo ? randomRestaurant.photo : logo" alt="Изображение" bottom></b-card-img>
      </b-card>
    </div>

    <div v-else-if="!restaurants">
      <h3>Загрузка...</h3>
    </div>
    <div v-else>
      <h3>Нет данных о ресторанах</h3>
      <b-button variant="danger" @click="getRandomRestoraunt">Найти</b-button>
    </div>

    <b-modal v-model="showModal" hide-header-close title="Отправить через телеграм">
      <b-form-input class="mb-3" type="text" v-model="botToken" placeholder="токен бота"></b-form-input>
      <b-form-input type="text" v-model="chatId" placeholder="ваш Chat ID"></b-form-input>
      <h6 class="mt-3">сообщение: </h6>
      <h5 class="mt-3">{{msg}}</h5>
      <b-form-input id="textarea" class="mb-3 mt-3" v-model="text" placeholder="можно добавить какой то текст"></b-form-input>
      <template #modal-footer>
        <div class="w-100 d-flex justify-content-between">
          <b-button variant="danger" size="sm" @click="showModal=false">Отмена</b-button>
          <b-button variant="success" size="sm" @click="sendTelegramMessage(msg)">Отправить</b-button>
        </div>
      </template>
    </b-modal>
  </div>

</template>
 
<script>
import axios from 'axios';

export default {
  name: 'HomePage',
    props: {
  },
  data () {
    return {
      showModal: false,
      text: '',
      botToken: 'YOUR_BOT_TOKEN', // Замените на ваш токен бота
      chatId: 'YOUR_CHAT_ID', // Замените на ваш Chat ID
      // нейтральная картинка на случай отсутствия ориги 
      logo: "https://img.freepik.com/free-vector/top-view-of-dishes-on-restaurant-table_23-2147913090.jpg?w=740&t=st=1689257738~exp=1689258338~hmac=81e2e2a7128d54ce9db0800320bff1fde319da23333771da6d976330698ba8fd",
    }
  },
  created() {
    // инициализируем необходимое для работы
    this.init()
  },
  mounted() {

  },
  computed: {
    idRestaurant() {
      return this.$store.state.idRestaurant;
    },
    restaurants() {
      return this.$store.state.restaurants;
    },
    randomRestaurant() {
      return this.$store.state.randomRestaurant;
    },
    msg() {
      if (this.randomRestaurant !== null) {
        let restaurant = this.randomRestaurant;
        let address = restaurant.address || '';
        return 'Идем в кафе: ' + restaurant.name + ' ' + address + this.text;
      } else {return ""}
    },
    selected: {
      get() {
        return this.$store.state.selected;
      },
      set(value) {
        this.$store.commit('SET_SELECTED', value);
      }
    }
  },
  watch: {
    // если поставили флаг на бланч то обновляем рандомный рестик если в нем нет бланча ибо нефиг лишний раз пользователя напрягать
    selected(value) {
      console.log(this.randomRestaurant.business_lunch);
      if (value === true && this.randomRestaurant.business_lunch === false) {
        this.getRandomRestoraunt();
      }
    },
    // если id поменялся находим соответствующий рестик 
    idRestaurant() {
      this.findRestaurant();
    },
  },
  methods: {
    // генерим рандомный id из списка доступных и сохраняем его в store (предпологая что значение является уникальным)
    getRandomRestoraunt() {
      let randomIndex;

      if (this.selected) {
        let selectedRestaurant;
        do {
          randomIndex = Math.floor(Math.random() * this.restaurants.length);
          selectedRestaurant = this.restaurants[randomIndex];
        } while (!selectedRestaurant.business_lunch);
        this.$store.commit('SET_ID_RESTAURANT', selectedRestaurant.id);
      } else {
        randomIndex = Math.floor(Math.random() * this.restaurants.length);
        this.$store.commit('SET_ID_RESTAURANT', this.restaurants[randomIndex].id);
      }
    },
    // обновляем список доступных рестиков
    async init() {
      if (this.restaurants.length === 0) {
        await this.$store.dispatch('fetchRestaurants');
      }
      if (this.idRestaurant === null) {
        this.getRandomRestoraunt();
      }
    },
    // находим рестик по id
    async findRestaurant() {
      await this.$store.dispatch('getRestorauntById');
    },
    // функция с возможностью отправки данных через телегу
    async sendTelegramMessage(message) {
      let botToken = 'YOUR_BOT_TOKEN'; // Замените на ваш токен бота
      let chatId = 'YOUR_CHAT_ID'; // Замените на ваш Chat ID

      try {
        let response = await axios.get(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          params: {
            chat_id: chatId,
            text: message,
          },
        });

        console.log('Сообщение успешно отправлено в Telegram:', response.data);
      } catch (error) {
        console.error('Ошибка при отправке сообщения в Telegram:', error);
      }
    },
    // подсвечиваем есть ли бланч
    isLanch() {
      return this.randomRestaurant.business_lunch ? "color: green;" : "color: red;";
    },
  }
}
</script>
 
<style scoped>
.card-name {
  height: 115px;
}
</style>
