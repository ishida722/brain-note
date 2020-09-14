<template>
  <ul>
    <li v-for="note in notes" :key="note.name">{{ note.name }}</li>
  </ul>
</template>

<script>
import firebase from "../firebase.js";

export default {
  name: "NoteList",
  data() {
    return {
      noteIds: [],
      notes: [],
    };
  },
  props: {
    noteBookId: String,
  },
  computed: {},
  methods: {},
  mounted() {
    firebase.bindChildList("notebooks" + "/" + this.noteBookId + "/" + "notes", this.notes, 'notes');
  },
};
</script>