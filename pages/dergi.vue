<template>

  <div class="dergi_page">
    
    <div class="side_menu_dergi">
      <Side_menu_dergi />
    </div>

    <div class="Dergiler_container">
      <Dergiler_container />
    </div>



  </div>

</template>

<script>
  import Side_menu_dergi from '~/components/Side_menu_dergi.vue';
  import Dergiler_container from '../components/Dergiler_container.vue';
  import Son_eklenenler from '../components/Son_eklenenler.vue';

</script>

<style>

  

  .dergi_page {
    display: flex;
  }

  .side_menu_dergi {
    flex: 1;
    max-width: 25%;
  }


</style>

