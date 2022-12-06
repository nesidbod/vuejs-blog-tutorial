<template>
  <div class="blogDetail">
    <h1>{{blogPost.title}}</h1>
    <div class="blogDetail__head">
      <img :src="blogPost.author.profile_image" class="blogDetail__profileImg" />
      <span>{{blogPost.author.first_name + ' ' + blogPost.author.last_name}}</span>
      <span>{{new Date(blogPost.created).toISOString().split('T')[0]}}</span>
    </div>
    <img :src="blogPost.featured_image"/>
    <div class="blogDetail__body" v-html="blogPost.body"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug;
const blogPost = ref({});

fetch(
  `https://api.buttercms.com/v2/posts/${slug}/?auth_token=${
    import.meta.env.VITE_READ_API_TOKEN
  }`
)
  .then((res) => res.json())
  .then((data) => {
    blogPost.value = data.data;
  });
</script>

<style>
.blogDetail {
  width: 95%;
  max-width: 900px;
  margin: 50px auto;
}

.blogDetail__head span:nth-child(2):after {
  content: '.';
  margin-left: 5px;
  vertical-align: top;
}

.blogDetail__head span {
  margin-left: 5px;
  color: rgb(128, 128, 128);
}

.blogDetail > h1 {
  margin-bottom: 15px;
}

.blogDetail > img {
  margin: 15px 0;
}

.blogDetail img{
  width: 100%;
}

.blogDetail .blogDetail__profileImg {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  vertical-align: middle;
}

.blogDetail__body p {
  color: rgb(62, 60, 60);
  font-size: 18px;
}

.blogDetail__body h2, h3{
  margin: 20px 0 5px;
}

.blogDetail__body img, video {
  margin: 5px 0;
}
</style>
