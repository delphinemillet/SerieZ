<template>
  <div class="card">
    <img v-bind:src="image" class="media-left"/>
    <img v-if="serie.image" />
    <div class="content">
      <h1
        @click="onClick"
        class="title"
      >
        {{ name }}
        <i class="fa-grin-stars icon" :class="[isFavorite ? 'fas': 'far']"></i>
      </h1>
      <p class="subtitle" v-html="summary" />
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
import favoritesService from '@/services/favorites'

export default {
  props: {
    serie: {
      id: Number,
      name: String,
      summary: String,
      image: { medium: String }
    }
  },

  methods: {
    onClick() { this.$emit('onSerieClicked', this.serie) }
  },

  computed: {
    isFavorite() {
      return this.favorites.find(fav => fav.id == this.serie.id)
    }
  },
  
  data() {
    return {
      image: this.serie.image ? this.serie.image.medium : logo,
      name: this.serie.name,
      summary: this.serie.summary,
      favorites: favoritesService.favorites
    }
  }
}
</script>

<style>
.icon {
  color: darkcyan;
}
</style>
