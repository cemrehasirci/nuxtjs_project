<template>

    <div class="son_yazilar">
      <div class="son_bloglar">
        <div class="baslik"><h3>✏️ Blog'dan Son Yazılar</h3></div>
        <div class="yazi_box">
          <ul>
            <li v-for="(Blog, index) in latestBlogs" :key="index">
            <a :href="Blog.link"><h4>{{ Blog.title }}</h4></a>
            <small><i>{{ Blog.date }}</i></small>
          </li>
          </ul>
        </div>
      </div>
    
      <Islem_rehberi />
      
    </div>
    
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { Blog } from '@/components/Blogs_container.vue';
    import Islem_rehberi from '@/components/Islem_rehberi.vue';
    
    
    const latestBlogs = ref<Blog[Blog]>([]);
    
    // Dinamik olarak blog verilerini al
    onMounted(() => {
      latestBlogs.value = Blog.slice(0, 4); // Son 4
    });
</script>
    
<style>

  .son_yazilar { 
    padding: 10px;
  }

  .yazi_box {
    border: 1px solid #eee4cd;
    margin: 5px 10px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }

  .son_bloglar a {
    text-decoration: none;
    color: #333;
  }

  .son_bloglar h3 {
    color: #931818;
  }

  .son_bloglar h4 {
    font-weight: 400;
    margin-bottom: 5px;
  }

  .son_bloglar li {
    text-indent: 20px;
    margin: 5px;
    list-style-type: none;
  }
    
</style>