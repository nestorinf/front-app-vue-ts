<template>
<div class="row-fluid justify-center">
    <CardList />

</div>
  <!-- <v-row > -->
  <!-- </v-row> -->
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardList from '../components/Cards/CardList.vue'

@Component({
  components: {
    CardList
  }
})
export default class Base extends Vue {
  categories: any = []
}
</script>