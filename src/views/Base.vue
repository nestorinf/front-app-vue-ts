<template>
    <v-row align="center" class="d-flex">
        <Card v-for="col in 5" :key="col" />
    </v-row>

</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Card from '../components/Card.vue'
@Component({
  components:{
    Card
  }
})
export default class Base extends Vue {}
</script>