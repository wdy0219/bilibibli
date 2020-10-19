<template>
  <div class="userdetail">
      <div>
          <div class="user-img">
              <img :src="userInfo.user_img" v-if="userInfo.user_img">
              <img src="@/assets/default_img.jpg" v-else>
            </div>
          <div class="user-edit">
              <div>
                  <p>
                      <span>0</span>
                      <span class="user-text">粉丝</span>
                  </p>
                  <p>
                      <span>54</span>
                      <span class="user-text">关注</span>
                  </p>
                  <p>
                      <span>0</span>
                      <span class="user-text">获赞</span>
                  </p>
              </div>
              <div @click="$router.push('/edit')">
                  <div class="user-editBtn">编辑资料</div>
              </div>
          </div>
      </div>
      <div>
          <h2>{{userInfo.name}}</h2>
          <p v-if="userInfo.user_desc">{{userInfo.user_desc}}</p>
          <p v-else>这个人很神秘，什么都没写</p>
      </div>
  </div>
</template>
<script>
export default {
    props:['userInfo'],
    
}
</script>

<style lang="less">
    .userdetail {
        background-color: #fff;
        padding: 0 3.333vw;
        > div:nth-child(1) {
            display: flex;
             .user-img {
                margin-right: 5.556vw;
                img {
                height: 23.611vw;
                width: 23.611vw;
                border-radius: 50%;
                }
            }
        }
       
        .user-edit {
            flex: 1;
            div:nth-child(1) {
                display: flex;
                p {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 3.611vw;
                    .user-text {
                        color: #aaa;
                    }
                }
                p:nth-child(1),p:nth-child(2) {
                    border-right: 0.278vw solid #ccc;
                }
            }
            div:nth-child(2) {
                padding: 0.556vw 2.778vw;
                .user-editBtn {
                    border-right: 0.278vw solid #fb7a9f;
                    padding: 0.833vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fb7a9f;
                    border-radius: 1.111vw;
                }
            }
        }
        > div:nth-child(2) {
            h2 {
                margin: 2.778vw 0 0.833vw 0;
                font-weight: 400;
            }
            p {
                margin: 0;
                padding: 2.778vw 0;
                color: #999;
            }
        }
    }
</style>