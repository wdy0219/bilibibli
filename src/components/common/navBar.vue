<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" />
    </div>
    <div>
      <p>
          请输入您需要搜索的内容
          <van-icon class="ipt-icon" name="search" />
      </p>
    </div>
    <div>
      <img :src="imgUrl" alt="" @click="$route.push('/edit')"/>
      <p>下载App</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl:""
    }
  },
  
  async mounted() {
    const res = await this.$http.get('/user/' + localStorage.getItem('id'))
    this.imgUrl = res.data[0].user_img
  }
};
</script>

<style lang="less">
.navbar {
  height: 12.5vw;
  background-color: #fff;
  display: flex;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    img {
      width: 80%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 5px;
    p {
      background-color: #f4f4f4;
      height: 23px;
      position: relative;
      width: 100%;
      padding-left: 25px;
      border-radius: 13px;
      font-size: 12px;
      line-height: 26px;
      color: #aaa;
      .ipt-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translate(0, -40%);
          color: #aaa;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      margin: 5px 10px;
      margin: 0 8px;
      background-color: #fb7299;
      border-radius: 3px;
      color: white;
      font-size: 13px;
    }
  }
}
</style>