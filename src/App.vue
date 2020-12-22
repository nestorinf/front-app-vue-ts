<template>
  <!-- App.vue -->
  <v-app>
    <Header />
    <v-main>
      <v-container class="padding__muted" >
        <Content />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
import Content from './layout/Content.vue'
@Component({
  components: {
    Header,
    Content,
    Footer
  }
})
export default class App extends Vue {
  
  //mounted () { }
}
</script>

<style scoped>
  .padding__muted {
    margin-right: 0px !important;
  }
</style>