<template>

  <div class="homepage">

    <div class="container">
      <div class="side_menu">
        <Side_menu />
      </div>

      <div class="slider">
        <Slider />
      </div>
    </div>

    <div class="container2">
      <div class="son_eklenenler">
        <Son_eklenenler />
      </div>

      <div class="son_yazilar">
        <Son_yazilar />
      </div>

    </div>

  </div>



</template>

<script>
  import Side_menu from '~/components/Side_menu.vue';
  import Slider from '../components/Slider.vue';
  import Son_eklenenler from '../components/Son_eklenenler.vue';

</script>

<style>

  .homepage {
    margin: 20px 150px;
  }

  .container {
    display: flex;
    margin-bottom: 50px;
  }

  .side_menu {
    flex: 1;
    max-width: 25%;
  }

  .slider {
    margin-left: 30px;
  }

  .container2 {
    display: flex;
    height: 900px;
  }
  .son_eklenenler {
    width: 100%;
    height: 100%;
  }

</style>


<!--
FIREBASE KONTROL
<template>
  <div>
    <h1>Firebase Kullanımı</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { getAuth } from "firebase/auth";
const nuxtApp = useNuxtApp();

// Firebase nesnesine erişim
const firebaseApp = nuxtApp.$firebase;

// Firebase servislerini kullanma
const auth = getAuth(firebaseApp);

let message = "Firebase bağlantısı sağlandı.";
</script>
-->