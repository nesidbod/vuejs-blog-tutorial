<template>
  <header>
    <div class="wrapper">
      <h2>Vue Blog</h2>
      <form @submit.prevent="this.$emit('search', searchValue)">
        <input
          v-model="searchValue"
          placeholder="Search blogs"
        />
        <button>Search</button>
      </form>
    </div>
  </header>
</template>

<script setup>
 import {ref} from 'vue'
 const searchValue = ref('')
</script>

<style scoped>
header {
  border-bottom: 1px solid gainsboro;
}

header .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

form input,button {
  height: 30px;
  padding: 0 10px;
}
</style>