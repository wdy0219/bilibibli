<template>
  <div @click="bannerClick">
      <div class="editbanner">
          <span>{{left}}</span>
          <span><slot name="right"></slot></span>
      </div>
  </div>
</template>

<script>
export default {
    props:['left'],
    
    methods:{
        bannerClick() {
            this.$emit('bannerClick')
        }
    }
}
</script>

<style>
    .editbanner {
        background-color: #fff;
        padding: 4.167vw;
        border-bottom: 0.278vw solid #fafafa;
        font-size: 3.889vw;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>