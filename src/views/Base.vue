<template>
  <v-row class="d-flex">
    <Card />
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '../components/Card.vue'
@Component({
  components: {
    Card
  }
})
export default class Base extends Vue {}
</script>