<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app color="grey lighten-5" flat >
      <!-- -->
    </v-app-bar>
    <v-main>
      <v-container align="center" justify="center">
        <Base />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
// import HelloWorld from "./components/HelloWorld.vue";
import Base from './views/Base.vue'
@Component({
  components:{
    Base
  }
})
export default  class App extends Vue {}
</script>
