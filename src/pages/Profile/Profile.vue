<template>
  <div class="container">
    <b-alert :show="isshow" variant="primary" dismissible
      >Primary Alert</b-alert
    >
    <ProfileEdit />
    <div class="main-body">
      <div class="row gutters-sm">
        <div class="col-md-5 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h4>John Doe</h4>
                  <p class="text-secondary mb-1">Full Stack Developer</p>
                  <p class="text-muted">Bay Area, San Francisco, CA</p>
                  <button class="btn btn-primary">Follow</button>
                  <button class="btn btn-outline-primary">Message</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 pl-2">姓名</h6>
                </div>
                <div class="col-sm-9 text-secondary">{{name}}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 pl-2">用户名</h6>
                </div>
                <div class="col-sm-9 text-secondary">{{username}}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 pl-2">邮箱</h6>
                </div>
                <div class="col-sm-9 text-secondary">{{email}}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 pl-2">手机号</h6>
                </div>
                <div class="col-sm-9 text-secondary">{{phone}}</div>
              </div>
              <hr />
              
              <div class="row justify-content-end">
                <div class="col-3">
                  <button type="button" class="btn btn-primary" @click="$bvModal.show('profileEdit-Model')">编辑</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card" border style="height: 450px">
            <!-- you can put info in it  -->
            <div class="card m-1" v-for="info in realInfoBoard" :key="info.id">
              <div class="card-body">
                <button type="button" class="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                {{ info.item }}. <span class="currentTime">{{ info.currentTime }}</span>
              </div>
            </div>
          </div>
          <div class="textarea">
            <b-form-textarea
              class="mt-2"
              id="textarea"
              v-model="text"
              placeholder="想说些什么..."
              rows="3"
              max-rows="6"
              @keyup.enter="submitInfo"
            ></b-form-textarea>
          </div>
          <div class="row justify-content-end">
            <div class="col-2 mt-2">
              <button type="button" class="btn btn-warning" @click="submitInfo">
                提交
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileEdit from './ProfileEdit.vue';
import {getProfileInfoApi} from "./profileHttp";
export default {
  data() {
    return {
      text: "",
      isshow: false,
      infoBoard: [], //temporary info data
      realInfoBoard: [], //real info data
      email: '',
      name: '',
      username: '',
      phone: ''
    };
  },
  components: {
    ProfileEdit
  },
  created() {
    this.getProfileInfo();
  },
  methods: {
    //评论区
    submitInfo() {
      if (this.text == "") {
      } else {
        let currentTime = Date();
        this.infoBoard.push(this.text);
        this.realInfoBoard = this.infoBoard.map((item, index) => {
          return {
            id: index,
            item: item,
            currentTime: currentTime,
          };
        });
        this.text = "";
      }
    },

    async getProfileInfo() {
      var userId = this.$store.state.loginAndStoreId.userId;
      try {
        const {data:res} = await getProfileInfoApi(userId);
        if(res.code === 200) {
          this.email = res.user.email;
          this.name = res.user.name;
          this.username = res.user. username;
          this.phone = res.user.phone;
        }
      }
      catch(err) {
        console.log(err);
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.currentTime {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 10px;
}
.close {
  position: absolute;
  top: 0;
  right: 1px;
}
</style>