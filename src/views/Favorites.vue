<template>
  <div class="about">
    <h1 v-for="serie in favorites" :key="serie.id">{{ serie.name }}</h1>
  </div>
</template>

<script>
import favorites from '@/services/favorites'

export default {
  data() {
    return {
      favorites: favorites.favorites
    }
  }
}
</script>
