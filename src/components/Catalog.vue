<template>
  <div>
  <h2>products</h2>
  <ul>
  <li v-for="(product,index) in products" :key='index'>
  <span>{{product.name}}</span>
  <span>{{product.price}}</span>
  </li>
  </ul>
  </div>
</template>

<script>
export default {
    computed : {
        products(){
            return this.$store.state.products
        }
    }
}

</script>
<style>

</style>