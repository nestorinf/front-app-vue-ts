<template>
    <div>
        <v-card max-width="400" color="grey lighten-5" class="mx-2 my-2" >
            <v-img height="350" width="350" :src="dataCard.img"></v-img>
            <v-card-title>{{ dataCard.name }}</v-card-title>
            <v-card-actions>
                <div>
                    <v-btn color="deep-purple lighten-2" text>Comprar</v-btn>
                </div>
            </v-card-actions>
            
        </v-card>

    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Card extends Vue {
  @Prop() dataCard!: object;
}
</script>