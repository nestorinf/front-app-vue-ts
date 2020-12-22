<template>
  
      <v-bottom-navigation  color="blue"  height="50"  app grow shift>
    <v-btn>
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorito</span>

      <v-icon>mdi-cards-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Ubicame</span>

      <v-icon>mdi-google-maps</v-icon>
    </v-btn>

    <v-btn>
      <span>Carrito</span>

      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class BottomNav extends Vue {}
</script>