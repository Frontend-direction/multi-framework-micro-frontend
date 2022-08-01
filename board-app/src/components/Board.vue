<template>
  <div class="container bs-docs-container">
    <div class="row">
      <div class="col-xs-6 col-md-3" v-for="app in [1,2,3, 4, 5, 6, 7, 8, 9]" :key="app">
        <div class="thumbnail">
          <img :src="cardImg" alt="...">
          <div class="caption">
            <h3>New Micro frontend app</h3>
            <p>Some fancy description</p>
            <p>
              <a href="#" class="btn btn-primary mr-2" role="button">Launch</a>
              <a href="#" class="btn btn-default" role="button">Info</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'Board',
  data() {
    return {
      cardImg: require('../assets/card.svg')
    }
  }
}
</script>

<style>
.mr-2 { margin-right:.5rem!important; }
</style>