<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app color="blue lighten-1" flat>
      <!-- -->
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <AvatarList :avatarData="this.dataAvatar"  />
        <v-layout class="p-0 ml-0" justify-center align-center>
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
import {categoriesQuery} from './graphql/queries/categories'
import gql from 'graphql-tag'

@Component({
  components: {
    Base,
    BottomNav,
    AvatarList
  },
  apollo: {
    categories: {
      query: gql`${categoriesQuery}`,
      result ({data, loading}) {
        if (!loading) {
          this.dataAvatar = data.categories
        }
      }
    }
  }
})
export default class App extends Vue {
  data () {
    return {
      dataAvatar: []
    }
  }
  //mounted () { }
}
</script>

