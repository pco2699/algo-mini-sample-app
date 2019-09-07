<template>
  <v-layout>
    <v-flex class="text-center ms-10">
      <v-form ref="form">
        <v-text-field v-model="ticketNumber" label="チケット番号" />
        <v-slider
          v-model="ticketAmount"
          class="mt-7"
          thumb-size="32"
          thumb-label="always"
          min="10"
          max="10000"
          step="1000"
          label="チケット数"
        />
        <v-radio-group v-model="searchMethod" label="探索方法" row>
          <v-radio label="線形探索" value="liner" />
          <v-radio label="二分探索" value="binary" />
        </v-radio-group>
        <v-input :error-count="errors.length" :error-messages="errors" />
        <v-btn class="primary" @click="checkForm() && execSearch()">
          検索
        </v-btn>
      </v-form>
      <div v-if="submitted" class="mt-2">
        <div v-if="result">
          <p>お探しのチケットが見つかりました！</p>
          <v-card max-width="344" class="mx-auto">
            <v-card-title>ID: {{ result.ticket.id }}</v-card-title>
            <v-card-text>{{ result.ticket.content }}</v-card-text>
          </v-card>
          <p class="mt-2">探すのに{{ result.count }}回 かかりました！</p>
        </div>
        <div v-else>
          <p>残念ながらチケットは見つかりませんでした...</p>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import { Vue, Component, Provide } from 'nuxt-property-decorator'
import ticketGenerator from '../modules/search/search_util'
import Searcher from '../modules/search/searcher'

@Component
export default class Search extends Vue {
  @Provide() ticketNumber = ''

  @Provide() searchMethod = ''

  @Provide() ticketAmount = ''

  @Provide() submitted = false

  @Provide() result = null

  @Provide() errors = []

  checkForm() {
    this.errors = []
    if (!this.ticketNumber) {
      this.errors.push('チケット番号を入れてください')
    } else if (!Search.validNumber(this.ticketNumber)) {
      this.errors.push('チケット番号は数字で入れてください')
    }

    if (!this.searchMethod) {
      this.errors.push('探索方法を入力してください')
    }

    if (this.ticketNumber < 0) {
      this.errors.push('チケット番号は正の数を入力してください')
    } else if (this.ticketNumber > this.ticketAmount) {
      this.errors.push('チケット番号は、チケット数内で入力してください')
    }

    if (!this.errors.length) {
      return true
    }
  }

  execSearch() {
    const tickets = ticketGenerator(this.ticketAmount)
    let result = null

    if (this.searchMethod === 'binary') {
      // eslint-disable-next-line no-console
      console.log('binary search executed ...')
      result = Searcher.binarySearch(tickets, Number(this.ticketNumber))
      // eslint-disable-next-line no-console
      console.log(result)
    } else if (this.searchMethod === 'liner') {
      result = Searcher.linearSearch(tickets, Number(this.ticketNumber))
    }

    if (result) {
      this.result = result
    }
    this.submitted = true
  }

  static validNumber(num) {
    const re = /[0-9]+/
    return re.test(num)
  }
}
</script>
