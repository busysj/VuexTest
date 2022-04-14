import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    board: [
      { id: 1, title: "첫 번째 제목", memo: "첫 번째 작성된 내용", count: 0 },
      { id: 2, title: "두 번째 제목", memo: "두 번째 작성된 내용", count: 0 },
    ],
  },
  getters: {},
  mutations: {
    addmemo(state, memo) {
      const id = state.board.length + 1;
      state.board.push({
        id: id,
        title: memo.title,
        memo: memo.memo,
        count: 0,
      });
    },
    addCount(state, id) {
      state.board[id - 1].count++;
    },
  },
  actions: {},
  modules: {},
});
