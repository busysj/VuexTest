<template>
  <div>
    <p>{{ getTitle }}</p>
    <p>{{ getmemo }}</p>
  </div>
</template>

<script>
export default {
  name: "PageView",
  computed: {
    getTitle() {
      return this.$store.state.board[this.$route.params.id - 1].title;
    },
    getmemo() {
      return this.$store.state.board[this.$route.params.id - 1].memo;
    },
  },
};
</script>
