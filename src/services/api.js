export default {
  getSeries: query =>
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`).then(res =>
      res.json()
    )
};
