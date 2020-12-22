<template>

    <v-row  class="">
        <v-col cols="12">
            <AvatarList :avatarData="this.dataAvatar"></AvatarList>
        </v-col>
        <v-col cols="12" >
            <CardList />
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardList from '../components/Cards/CardList.vue'
import AvatarList from '../components/Avatar/AvatarList.vue'
import {categoriesQuery} from '../graphql/queries/categories'
import gql from 'graphql-tag'
@Component({
  components: {
    CardList,
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

export default class Content extends Vue {
  data () {
    return {
      dataAvatar: []
    }
  }
}
</script>