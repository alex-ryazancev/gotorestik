<template>
  <div class="m-3" style="height: 75vh; overflow-y: auto;">
    <div class="d-flex justify-content-center">
      <h6 class="m-1">только с бизнес-ланчем </h6><b-form-checkbox v-model="selected"></b-form-checkbox>
    </div>
    <b-table
      class="mb-2 mt-2"
      :items="filteredRestaurants"
      :fields="visibleFields"
      striped hover
      @row-clicked="onRowClicked"
    >
      <template v-slot:cell(business_lunch)="data">
        <span>{{ data.item.business_lunch ? 'есть' : 'нет' }}</span>
      </template>
      <template v-slot:cell(distance)="data">
        <span v-if="data.item.distance == 0">-</span>
        <span v-else>{{data.item.distance}}</span>
      </template>
      <template v-slot:cell(price)="data">
        <span v-if="data.item.price == 0">-</span>
        <span v-else>{{data.item.price}}</span>
      </template>
      <template v-slot:cell(time)="data">
        <span v-if="data.item.time == 0">-</span>
        <span v-else>{{data.item.time}}</span>
      </template>
    </b-table>
  </div>
</template>
 
<script>

export default {
  name: 'CustomViewer',
    props: {
    msg: String
  },
  data () {
    return {
      // настраеваем что будет видеть пользователь в таблице
      fields: [
        { key: 'name', label: 'Название', visible: true},
        { key: 'address', label: 'Адрес', visible: true},
        { key: 'business_lunch', label: 'Б.ланч', visible: true},
        { key: 'cuisine', label: 'Кухня', visible: true},
        { key: 'distance', label: 'Расстояние', visible: true},
        { key: 'landmark', label: 'Расположение', visible: true},
        { key: 'price', label: 'Чек', visible: true},
        { key: 'time', label: 'Время в пути', visible: true},
      ],
      screenWidth: window.innerWidth,
    }
  },
  created() {
    // инициализируем все необходимое для работы
    this.init();
    window.addEventListener('resize', this.handleResize);
  },  
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    idRestaurant() {
      return this.$store.state.idRestaurant;
    },
    restaurants() {
      return this.$store.state.restaurants;
    },
    visibleFields() {
      return this.fields.filter(field => field.visible);
    },
    filteredRestaurants() {
      if (this.selected) {
        return this.restaurants.filter(restaurant => restaurant.business_lunch === true);
      } else {
        return this.restaurants;
      }
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
    idRestaurant() {
      this.$router.push('/');
      this.findRestaurant();
    },
  },
  methods: {
    async init() {
      this.handleResize()
      if (this.restaurants.length === 0) {
        await this.$store.dispatch('fetchRestaurants');
      }
    },
    // получаем стейт row по клику на него в списке
    onRowClicked(item) {
      this.$store.commit('SET_ID_RESTAURANT', item.id);
    },
    async findRestaurant() {
      await this.$store.dispatch('getRestorauntById');
    },
    // если ресайзим окно в минус 900 то меняем отображение колонк - их слишком много для маленького окна
    handleResize() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth < 900) {
        this.fields.forEach(field => {
          if (field.key !== 'name' && field.key !== 'address' && field.key !== 'business_lunch') {
            field.visible = false;
          }
        });
      } else {
        this.fields.forEach(field => {field.visible = true});
      }
    },
  }
}
</script>
 
<style scoped>
</style>