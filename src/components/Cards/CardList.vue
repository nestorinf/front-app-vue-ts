<template>
    <v-row :style="changeDisplay">
        <div  v-for="(card, index) in this.dataProducts" :key="index" >
            <v-flex xs12 md12 lg12 sm12 >
                <Card :dataCard="card"></Card>
            </v-flex>
        </div>
    </v-row>
</template>

<script lang="ts">

import {Component, Vue, Watch} from 'vue-property-decorator'
import Card from '../Cards/Card.vue'
import {mapGetters} from 'vuex'
@Component({
  components: {
    Card
  },
  computed: {
    ...mapGetters({
      storeProducts: 'Product/GETPRODUCT'
    })
  }
})
export default class AvatarList extends Vue {
  public dataProducts: Array<object> = []

  get changeDisplay () {
    let display = 'display:flex'
    if (this.$vuetify.breakpoint.mobile) {
      display  = 'display:block' 
    }
    return display
   
  }
  getProducts () {
    this.$store.dispatch('Product/PRODUCTSDATA')
  }
  mounted () {
    this.getProducts()
  }
  
  @Watch('storeProducts')
  onDataProduct (data: []) {
    this.dataProducts = data
  }

}

</script>