<template>
  <div>
      <van-field :label="label" :type="type" :placeholder="placeholder" v-model="content"/>
  </div>
</template>

<script>
export default {
    props:['label','type','placeholder','rule'],

    data() {
        return {
            content:""
        }
    },

    methods:{
        handlerulg() {
            // console.log(this.rule);
            const rue = new RegExp(this.rule);
            if (rue.test(this.content)) {
                // console.log('正则效验成功');
                this.$emit('inputchange', this.content)
            }
        }
    },

    watch:{
        content() {
            this.handlerulg()
        }
    }
}
</script>

<style>
</style>