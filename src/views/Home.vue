<template>
  <Header @search="handleSearch" />
  <p v-if="!blogPosts.length" class="noBlogPost">No blog post available</p>
  <div v-else class="blogList wrapper">
    <BlogCard
      v-for="post in filtered"
      :slug="post.slug"
      :image="post.featured_image"
      :date="new Date(post.created).toISOString().split('T')[0]"
      :title="post.title"
      :summary="post.summary"
      :authorImage="post.author.profile_image"
      :authorName="post.author.first_name + post.author.last_name"
    />
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";

  import Header from "../components/Header.vue";
  import BlogCard from "../components/BlogCard.vue";

  const blogPosts = ref([]);
  const filtered = ref([])

  watch(blogPosts, (newData) => {
    filtered.value = newData
  })

  fetch(`https://api.buttercms.com/v2/posts/?exclude_body=true&auth_token=${import.meta.env.VITE_READ_API_TOKEN}`)
    .then((res) => res.json())
    .then((data) => {
      blogPosts.value = data.data
  })

 const handleSearch = (searchValue) => {
  const result = blogPosts.value.filter((post) => (
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  ))
  filtered.value = result
 }
</script>

<style scoped>
.blogList {
  display: grid;
  margin-top: 20px;
  place-content: center;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 15px;
}

.noBlogPost {
  margin-top: 20px;
  text-align: center;
}
</style>