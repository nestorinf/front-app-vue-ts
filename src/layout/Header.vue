<template>
    <v-app-bar app color="indigo" flat>
      <!-- -->
      <v-icon color="white">mdi-menu</v-icon>
      <v-spacer></v-spacer>
     
      <v-icon color="white">mdi-lock-open</v-icon>
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Header extends Vue {}
</script>