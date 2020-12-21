<template>
    <!-- <v-row > -->
        <!-- <v-col cols="12" md="3" lg="3" min-he sm="4" xs="4"  > -->
            <v-card max-width="400"   color="grey lighten-5" class="mx-2 my-2">
                <v-img
                   height="400"
                   width="400"
                    :src="dataCard.src"
                ></v-img>
                <v-card-title>{{dataCard.name}}</v-card-title>
                <v-card-actions>
                    <v-row>
                        <v-btn
                        color="deep-purple lighten-2"
                        text
                        >Comprar</v-btn>
                    </v-row>
                </v-card-actions>
            </v-card>
        <!-- </v-col> -->
    <!-- </v-row> -->
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
@Component
export default class Card extends Vue {
  @Prop() dataCard!: object
}
</script>