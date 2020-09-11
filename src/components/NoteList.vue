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
  computed: {

  },
  methods: {},
  mounted() {
    this.noteBookId;
    firebase.database().ref("notebooks" + "/" + this.noteBookId)
    .on('value', (snapshot) =>
    {
        this.noteIds = snapshot.val().notes;
    for (const id in this.noteIds) {
        var noteId = this.noteIds[id]
        console.log('for');
        console.log(noteId);
        firebase.database().ref('notes/' + noteId).on('value', (snapshot) => this.notes.push[snapshot.val()]);
    };
    }
  }
};
</script>