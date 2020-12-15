<template>
    <v-row class="mb-8 ml-0 mr-0" >
        <v-col cols="12" md="3" lg="3" min-he sm="4" xs="4" v-for="col in 5" :key="col"  >
            <v-card max-width="800"   color="grey lighten-5"  flat >
                <v-img
                    height="300"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <v-card-title>Titulo</v-card-title>
                <v-card-actions>
                    <v-row>
                        <v-btn
                        color="deep-purple lighten-2"
                        text
                        >Hola</v-btn>
                    </v-row>
                </v-card-actions>
            </v-card>
            
        </v-col>
        
    </v-row>
 

</template>

<script lan="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Card extends Vue {}
</script>