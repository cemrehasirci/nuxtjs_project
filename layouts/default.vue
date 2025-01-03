<template>
  <div>
    <Header /> <!-- Üst Menü -->

    <main>
      <transition name="fade" mode="out-in">
        <NuxtPage /> <!-- Sayfa İçeriği Burada Yüklenir -->
      </transition>
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

<style>
  .page-fade-enter-active, .page-fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .page-fade-enter, .page-fade-leave-to {
    opacity: 0;
  }

</style>
  