<template>
  <!-- <div class=""> -->
    <CardList />
  <!-- </div> -->
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