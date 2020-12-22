<template>
    <BottomNav />
</template>

<script lang="ts">
import BottomNav from '../components/BottomNav.vue'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components:{
    BottomNav
  }
})
export default class Footer extends Vue {}
</script>