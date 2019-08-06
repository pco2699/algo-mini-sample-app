<template>
  <v-layout>
    <v-flex class="text-center">
      <v-form ref="form">
        <v-text-field
          v-model="model"
          :counter="max"
          label="チケット番号"
        ></v-text-field>
        <v-slider
          class="mt-3"
          v-model="max"
          :thumb-size="24"
          thumb-label="always"
        ></v-slider>
      </v-form>
    </v-flex>
  </v-layout>
</template>
