<template>
  <ul>
    <li v-for="paragraph in paragraphs" :key="paragraph.text">{{ paragraph.text }}</li>
  </ul>
</template>

<script>
import firebase from "../firebase.js";

export default {
  name: "NoteList",
  data() {
    return {
      paragraphs: [],
    };
  },
  props: {
    noteId: String,
  },
  computed: {},
  methods: {},
  mounted() {
    firebase.bindChildList("notes" + "/" + this.noteId + "/" + "paragraphs", this.paragraphs, 'paragraphs');
  },
};
</script>
