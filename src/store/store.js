import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state, payload = 0) {
      state.counter += payload;
    }
  },
  actions: {
    increment(context, payload = 0) {
      context.commit('increment', payload);
    }
  },
  getters: {
    counter(state) {
      return state.counter
    }
  }
});
