<template>
  <div class="avatar__list">
    <v-row class="mr-0 ml-0">
      <v-col class="stories__center" >
        <v-list v-for="n in 10" :key="n">
          <v-list-item>
            <Avatar></Avatar>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Avatar from './Avatar.vue'
@Component({
  components: {
    Avatar
  }
})
export default class AvatarList extends Vue {}
</script>

<style >
.stories__center {
  justify-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: auto;
  margin: 0;
  padding: 0;
  /* height:auto; */
}
</style>