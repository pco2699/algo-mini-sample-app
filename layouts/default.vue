<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click="setTitle(item.title)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app color="primary" class="white--text">
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text" v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
import { Vue, Component, Provide } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  @Provide() drawer = false

  @Provide()
  items = [
    {
      icon: 'mdi-apps',
      title: 'トップページ',
      to: '/'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'ソート',
      to: '/search'
    }
  ]

  @Provide()
  title = 'Nuxt.jsとfirebaseでつくるアルゴリズムミニアプリ'

  setTitle(title) {
    this.title = title
  }
}
</script>
