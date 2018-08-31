<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">Accueil</router-link>
      <router-link to="/favorites" class="navbar-item">Favoris</router-link>
    </div>
  </nav>
</template>

<script>
import api from '@/services/api'

export default {
  data() {
    return {
      search: ''
    }
  },

  methods: {
    searchSerie() {
      return api.getSeries(this.search)
    }
  }
}
</script>

<style>
</style>
