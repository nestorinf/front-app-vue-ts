<template>
    <v-row :style="changeDisplay">
        <div  v-for="(card, index) in dataArray" :key="index" >
            <v-flex xs12 md12 lg12 sm12 >
                <Card :dataCard="card"></Card>
            </v-flex>
        </div>
    </v-row>
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

  get changeDisplay () {
    let display = 'display:flex'
    if (this.$vuetify.breakpoint.mobile) {
      display  = 'display:block' 
    }
    return display
   
  }
  
  data () {
    return {
      dataArray: []
    }
  }
}

</script>