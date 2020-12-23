<template>
    <v-skeleton-loader
        class="mx-auto"
        :max-width="width"
        :type="type"
    ></v-skeleton-loader>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Skeleton extends Vue {
    @Prop() width!: string
    @Prop() type!: string
}
</script>