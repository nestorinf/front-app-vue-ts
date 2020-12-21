<template>
    <div class="row ">
            <div v-for="(card, index) in dataArray" :key="index" >
                <v-col md="12" lg="12" sm="6" xs="6" class="ma-0 pa-0 " >
                    <Card :dataCard="card"></Card>
                </v-col>
            </div>
    </div>
    <!-- <div class="row card__list"  > -->
    <!-- </div> -->
</template>

<script lang="ts">
import gql from 'graphql-tag'
import {Component, Vue} from 'vue-property-decorator'
import Card from '../Cards/Card.vue'
import { productsQuery } from '../../graphql/queries/products'
@Component({
  components: {
    Card
  },
  apollo: {
    products: {
      query: gql`${productsQuery}`,
      result ({data, loading}) {
        if (!loading) {
          this.dataArray = data.photos
        }
      }
    }
  }
})
export default class AvatarList extends Vue {

  data () {
    return {
      dataArray: []
    }
  }
}

</script>