
    <!-- <div>
        <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
            <div class="container-fluid desktop-nav">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="logo-area">
                            <a href = "#">
                                <img src="//" alt="logo" class="img-fluid">
                            </a>              
                    </div>
                </div>
    </div>
</template> -->


<!-- export default !;
</script> -->

// ./components/NavLink.vue
<script>
export default {
  name: "NavBar",
  props: ["url", "text"],
};
</script>

<template>
  <a :href="url">{{ text }}</a>
</template>