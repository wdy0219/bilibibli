<template>
  <div class="userinfo">
      <nav-bar></nav-bar>
      <img src="@/assets/bannerTop_new.png" alt="" class="backimg">
      <user-detail :userInfo="model"/>
      <user-article></user-article>
  </div>
</template>

<script>
import navBar from '../components/common/navBar'
import userDetail from '../components/userComponent/userDetail'
import userArticle from '../components/userComponent/userArticle'

export default {
    components: {
        navBar,userDetail,userArticle
    },

    data() {
        return {
            model:""
        }
    },

    methods:{
        async UserinfoData() {
            const res = await this.$http.get('/user/' + localStorage.getItem('id')); // ,{headers:{'Authorization':'Bearer ' + localStorage.getItem('token')} }
            
            console.log(res)
            this.model = res.data[0];
            // console.log(model);       
        }
    },

    created() {
        this.UserinfoData()
    }
}
</script>

<style lang="less">
    .userinfo {
        .backimg {
            width: 100%;
            height: 91px;
        }
    }
</style>