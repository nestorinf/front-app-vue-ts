<template>
  <div class="avatar__list">
    <v-row class="m-0 p-0">
      <v-col class="stories__center" >
        <v-list v-for="(dataAvatar ,index) in avatarData" :key="index">
          <v-list-item>
            <Avatar :avatarData="dataAvatar"></Avatar>
              
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Avatar from './Avatar.vue'
@Component({
  components: {
    Avatar
  }
})
export default class AvatarList extends Vue {
  @Prop() avatarData!: object
}
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