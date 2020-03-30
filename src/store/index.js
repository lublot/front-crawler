import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentMovie: {
      title: "",
      cover: "",
      duration: "",
      contentRating: "",
      sessions: []
    },
    movies: [],
    currentIndex: 0
  },
  mutations: {
    ADD_MOVIES(state, movies) {
      state.movies = movies;
    },
    NEXT_MOVIE(state) {
      if (state.currentIndex == state.movies.length - 1) return;
      state.currentIndex = state.currentIndex++;
      state.currentMovie.title = state.movies[state.currentIndex].title;
      state.currentMovie.cover = state.movies[state.currentIndex].cover;
      state.currentMovie.duration = state.movies[state.currentIndex].duration;
      state.currentMovie.contentRating =
        state.movies[state.currentIndex].contentRating;
      state.currentMovie.sessions = state.movies[state.currentIndex].sessions;
    },
    PREVIOUS_MOVIE(state) {
      if (state.currentIndex == 0) return;
      state.currentIndex = state.currentIndex--;
      state.currentMovie.title = state.movies[state.currentIndex].title;
      state.currentMovie.cover = state.movies[state.currentIndex].cover;
      state.currentMovie.duration = state.movies[state.currentIndex].duration;
      state.currentMovie.contentRating =
        state.movies[state.currentIndex].contentRating;
      state.currentMovie.sessions = state.movies[state.currentIndex].sessions;
    }
  },
  actions: {
    addMovies({ commit }, movies) {
      commit("ADD_MOVIES", movies);
    },
    nextMovie({ commit }) {
      commit("NEXT_MOVIE");
    },
    previousMovie({ commit }) {
      commit("PREVIOUS_MOVIE");
    }
  },
  getters: {
    title: state => state.currentMovie.title,
    cover: state => state.currentMovie.cover,
    duration: state => state.currentMovie.duration,
    contentRating: state => state.currentMovie.contentRating,
    sessions: state => state.currentMovie.sessions,
    isFirst: state => state.currentIndex == 0,
    isLast: state => state.currentIndex == state.movies.length - 1
  },
  modules: {}
});
