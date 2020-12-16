<template>
  <v-row class="d-flex">
    <Card />
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '../components/Card.vue'
import gql from 'graphql-tag'

@Component({
  components: {
    Card
  }
})
export default class Base extends Vue {
  Categories: any
  get apollo () {
    return {
      Categories: {
        query: gql`query {
            categories{
              id
              cover
            }
          }`
      }
    }
  }
}
</script>