<template>
  <v-layout>
    <v-flex class="text-center">
      <v-form ref="form">
        <v-text-field label="チケット番号" />
        <v-slider class="mt-3" :thumb-size="24" thumb-label="always" />
      </v-form>
    </v-flex>
  </v-layout>
</template>
<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Search extends Vue {
  created() {
    this.$parent.title = '探索アプリ'
  }
}
</script>
