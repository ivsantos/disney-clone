const categories = [
  {
    title: 'Top rated movies',
    type: 'movie',
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
  },
  {
    title: 'Top voted movies',
    type: 'movie',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
  },
  {
    title: 'Top rated series',
    type: 'tv',
    url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
  },
  {
    title: 'Top voted series',
    type: 'tv',
    url: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
  },
];

export default categories;
