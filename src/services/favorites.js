export default {
  favorites: [],

  addFavorites(serie) {
    this.favorites.push(serie);
  },

  removeFavorite(serie) {
    const index = this.favorites.findIndex(item => item.id === serie.id);
    this.favorites.splice(index, 1);
  },

  isFavorite(serie) {
    return this.favorites.find(item => item.id === serie.id);
  }
};
