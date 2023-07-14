<template>
  <div class="about">
    <CustomViewer msg="показать только с бизнес-ланчем "/>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomViewer from '@/components/CustomViewer.vue'

export default {
  name: 'HomeView',
  components: {
    CustomViewer
  }
}
</script>