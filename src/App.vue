<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app color="blue lighten-1" flat>
      <!-- -->
    </v-app-bar>
    <v-main>
      <v-container>
        <AvatarList />

        <v-layout class="mr-0 ml-0">
          <Base />
        </v-layout>
      </v-container>
    </v-main>
    <BottomNav />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BottomNav from './components/BottomNav.vue'
import AvatarList from './components/Avatar/AvatarList.vue'
import Base from './views/Base.vue'
@Component({
  components: {
    Base,
    BottomNav,
    AvatarList
  }
})
export default class App extends Vue {}
</script>

