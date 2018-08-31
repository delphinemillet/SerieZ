<template>
  <div class="home">
    <div class="navbar-end">
      <input v-model="search"/>
      <span class="navbar-item" @click="searchSerie">Rechercher</span>
    </div>
    <div>
      <Serie v-for="serie in series" :key="serie.id" v-bind:serie="serie" @onSerieClicked="handleSerieClicked($event)"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Serie from "@/components/Serie.vue"
import api from '@/services/api'
import favoritesService from '@/services/favorites'

export default {
  name: "home",
  components: {
    Serie
  },

  methods: {
    handleSerieClicked: (serie) => {
      favoritesService.isFavorite(serie) ?
        favoritesService.removeFavorite(serie)
      :
        favoritesService.addFavorites(serie)
    },
    async searchSerie() {
      const series = await api.getSeries(this.search)
      this.series = series.map(serie => serie.show)
    }
  },

 data() {
  return {
    series: [],
    search: ''
  }
 },
  
  async mounted() {
    const series = await api.getSeries()
    this.series = series.map(serie => serie.show)
    console.log(this.series)
  }
};
</script>
