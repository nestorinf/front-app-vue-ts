<template>
    <v-avatar>
      <img
        :src="cover"
        alt="John"
      >
    </v-avatar>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
@Component
export default class Avatar extends Vue {
  @Prop() cover!: string
}
</script>