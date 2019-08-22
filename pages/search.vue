<template>
  <v-layout>
    <v-flex class="text-center ms-10">
      <v-form ref="form">
        <v-text-field label="チケット番号" />
        <v-slider
          class="mt-7"
          :thumb-size="32"
          thumb-label="always"
          min="10"
          max="10000"
          step="1000"
          label="チケット数"
        />
        <v-radio-group v-model="row" row>
          <v-radio label="線形探索" value="radio-1" />
          <v-radio label="二分探索" value="radio-2" />
        </v-radio-group>
        <v-btn class="primary">検索</v-btn>
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
