import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    cards: [],
    loading: true,
  },

  mutations: {
    SET_CARDS(state, cards) {
      state.cards = cards;
      state.loading = false;
    },
  },

  actions: {
    async loadCards({ commit }) {
      try {
        const response = await axios.get(
          'https://db.ygoprodeck.com/api/v7/cardinfo.php'
        );

        const cards = response.data.data;

        commit('SET_CARDS', cards);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
