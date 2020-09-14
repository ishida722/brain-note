<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <NoteList noteBookId="testnotebook1"/> -->
    <Note notekId="testnote1"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import NoteList from '@/components/NoteList.vue'
import Note from '@/components/Note.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // NoteList
    Note
  }
}
</script>
