<template>
    <div class="blog-page">
        <div class="blog-card">
            <div class="blogs-container">
                <div v-for="(blog, index) in latestBlogs" :key="index" class="blog-card">
                <h2>{{ blog.title }}</h2>
                <div class="blog-box">
                    <img :src= 'blog.image' alt="Blog Image" class="blog-img" />
                    <p>{{ blog.description }}</p>
                    <div class="date-read">
                        <div class="date">{{ blog.date }}</div>
                            <a :href="blog.link" class="read-more">Devamını Oku</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
  import { blogs } from '/components/Blogs_container.vue';
  
  export default {
    name: 'BlogPage',
    data() {
      return {
        latestBlogs: blogs.slice(0, ), //hepsi
      };
    },
  };
</script>


<style scoped>

.blogs-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px; 
    padding: 20px;
}

.blog-card {
    background: #fff;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.blog-box {
    background: #d4d3d37a;
    padding: 15px 20px;
}

.blog-img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
}

.date-read {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.read-more {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

.read-more:hover {
    color: #337ab7;
}

.date {
    font-size: 14px;
}
</style>