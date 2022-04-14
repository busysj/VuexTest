<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>
    <input type="text" size="28" v-model="memo.title" /> <br />
    <textarea v-model="memo.memo" cols="30" rows="10"></textarea> <br />
    <button @click="addmemoMu">완료</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memo: {
        title: "",
        memo: "",
      },
    };
  },
  methods: {
    addmemo() {
      const id = this.$store.state.board.length + 1;
      this.$store.state.board.push({
        id: id,
        title: this.memo.title,
        memo: this.memo.memo,
        count: 0,
      });
    },
    addmemoMu() {
      this.$store.commit("addmemo", this.memo);
      this.$router.push("/");
    },
  },
};
</script>
