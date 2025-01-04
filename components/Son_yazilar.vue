<template>

    <div class="son_yazilar">
      <div class="son-bloglar">
        <div class="baslik"><h3>✏️ Blog'dan Son Yazılar</h3></div>
        <div class="box">
          <ul>
            <li v-for="(blog, index) in latestBlogs" :key="index">
            <a :href="blog.link"><h4>{{ blog.title }}</h4></a>
            <small><i>{{ blog.date }}</i></small>
          </li>
          </ul>
        </div>
      </div>
    
      <div class="rehber">
        <div class="baslik"><h3>ℹ️ İşlem Rehberi</h3></div>
        <div class="box">
          <ul>
            <li><a href="#">Sistem nasıl işliyor?</a></li>
            <li><a href="#">İstediğim ürünü nasıl alırım?</a></li>
            <li><a href="#">Nasıl ödeme yapabilirim?</a></li>
            <li><a href="#">Kargo ücreti ne kadar?</a></li>
            <li><a href="#">Teslimat süresi nedir?</a></li>
            <li><a href="#">Elden satış imkanı var mı?</a></li>
            <li><a href="#">Ürün hakkında nasıl bilgi alırım?</a></li>
            <li><a href="#">Siparişimi nasıl takip edebilirim?</a></li>
            <li><a href="#">Birden fazla satıcıdan ürün alırsam nasıl gönderilir?</a></li>
            <li><a href="#">Kargo birleştirme nedir?</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    </template>
    
    <style>
      .son_yazilar { 
        padding: 10px;
      }
      .box {
        border: 1px solid #eee4cd;
        margin: 5px 10px;
        padding: 10px 20px;
        margin-bottom: 20px;
      }
      .son_yazilar a {
        text-decoration: none;
        color: #333;
      }
      .son_yazilar h3 {
        color: #931818;
      }
      .son_yazilar h4 {
        font-weight: 400;
        margin-bottom: 5px;
      }
      .son_yazilar li {
        text-indent: 20px;
        margin: 5px;
        list-style-type: none;
      }
    
    </style>
    
<script setup>
    import { ref, onMounted } from 'vue';
    import { blogs } from '@/components/Blogs_container.vue';
    
    const latestBlogs = ref([]);
    
    // Dinamik olarak blog verilerini al
    onMounted(() => {
      latestBlogs.value = blogs.slice(0, 4); // Son 4
    });
</script>
      