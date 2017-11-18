<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title">Teskt</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure repellat porro nobis ratione, dolore rerum nulla distinctio quam neque. Quis beatae quam quia soluta voluptatibus doloribus deserunt minima accusamus!
        </p>
      </div>
      <div class="column is-two-thirds">
       <generator :seed="seed"></generator> 
      </div>
    </div>
  </div>
</template>

<script>
  import Generator from '../Components/Generator.vue'

  export default {
    props : ['seed'],
    name: 'App',
    data () {
      return {
      }
    },
    mounted() {
    },
    components : {
      Generator
    }
  }
</script>

<style lang="scss">
  .container {
    padding-top: 2rem;
  }
</style>
