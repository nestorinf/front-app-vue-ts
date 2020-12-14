<template>
    <v-flex md="4" lg="4" sm="2" xl="2" >
        <v-card max-width="380" color="grey lighten-5" class="my-1 rounded" flat>
            <v-card-title>Titulo</v-card-title>
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-actions>
                <v-row>
                    <v-btn
                    color="deep-purple lighten-2"
                    text
                    >Hola</v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-flex>
 

</template>

<script lan="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Card extends Vue {}
</script>