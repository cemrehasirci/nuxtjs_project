<template>
    <div>
      <Header /> <!-- Üst Menü -->
      <main>
        <NuxtPage /> <!-- Sayfa İçeriği Burada Yüklenir -->
      </main>
      <Footer /> <!-- Alt Menü -->
    </div>
  </template>
  
  <script>
  import Header from '/components/Header.vue';
  import Footer from '/components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer,
    },
  };
  </script>
  