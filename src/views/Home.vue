<template>
  <div class="home">
    <nav>
      <NavBar />
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
};
</script>
