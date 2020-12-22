<template>
    <div>
        <v-avatar width="65" height="65">
            <img :src="avatarData.cover" alt="John" />
        </v-avatar>
        <p class="subtitle-2 text-center indigo--text" >{{avatarData.name}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Avatar extends Vue {
  @Prop() avatarData!: object;
}
</script>