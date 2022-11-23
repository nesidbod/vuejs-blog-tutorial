<template>
  <div class="card" @click="$router.push(`/detail/${slug}`)">
    <img :src="image" />
    <div class="card__details">
      <span class="mgn">{{ date }}</span>
      <h3>{{ title }}</h3>
      <p class="mgn">{{ summary }}</p>
      <div class="card__author">
        <img :src="authorImage" />
        <span>{{ authorName }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps([
    "slug",
    "image",
    "date",
    "title",
    "summary",
    "authorImage",
    "authorName",
  ]);
</script>

<style scoped>
.mgn {
  margin-bottom: 15px;
  display: block;
}
.card {
  max-width: 350px;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0 2px 6px gainsboro;
}

.card > img {
  object-fit: cover;
  width: 100%;
  height: 200px;
}

.card__details {
  padding: 10px;
}

.card__details span:first-child {
  color: gray;
}

.card__details p {
  font-size: 16px;
  color: rgb(63 63 66);
}

.card__author img {
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  vertical-align: middle;
}

.card__author span {
  margin-left: 10px;
}
</style>