<template>
    <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component
export default class Avatar extends Vue {}
</script>