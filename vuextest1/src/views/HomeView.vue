<template>
  <div class="home">
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>클릭횟수(조회수)</td>
      </tr>
      <tr v-for="board in $store.state.board" :key="board.id">
        <td>{{ board.id }}</td>
        <td @click="addCount(board.id)">{{ board.title }}</td>
        <td>{{ board.count }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    addCount(id) {
      this.$router.push("/board/" + id);
      this.$store.state.board[id - 1].count++;
    },
  },
};
</script>
