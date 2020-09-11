<template>
  <ul>
    <li v-for="(message, index) in messages" :key="index">{{ message.content }} index:{{ index }}</li>
  </ul>
</template>

<script>
export default {
  name: "NoteList",
  props: {
    noteBookId: String,
  },
  mounted() {},
};
</script>