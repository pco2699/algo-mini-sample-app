<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-img src="img/front_image.png" max-width="400px" />
    </v-flex>
  </v-layout>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {}
</script>
