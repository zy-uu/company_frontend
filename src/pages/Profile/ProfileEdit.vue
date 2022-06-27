<template>
<div class="ProfileEdit">
    <b-modal
      id="profileEdit-Model"
      ref="profileEditModel"
      hide-footer
      centered
      title="个人详细信息"
    >
      <div class="d-block text-center">
        <b-form>
          <b-form-group label="姓名:">
            <b-form-input
              placeholder="请输入姓名"
              v-model="profileEditInfo.name"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="邮箱:">
            <b-form-input
              placeholder="请输入邮箱"
              v-model="profileEditInfo.email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="用户名:">
            <b-form-input
              placeholder="请输入用户名"
              v-model="profileEditInfo.username"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="手机号:">
            <b-form-input
              placeholder="请输入手机号"
              v-model="profileEditInfo.phone"
            ></b-form-input>
          </b-form-group>
          
        </b-form>
      </div>
      <div class="d-flex flex-row-reverse">
        <b-button
          type="submit"
          variant="primary"
          class="ml-2"
          @click="editProfileInfo"
          >提交</b-button
        >
        <b-button variant="danger" @click="$bvModal.hide('profileEdit-Model')"
          >关闭</b-button
        >
      </div>
    </b-modal>
</div>
    
</template>

<script>
import {editProfileInfoApi} from "./profileHttp";
export default {
    data() {
        return {
            profileEditInfo: {
                username: '',
                name: '',
                email: '',
                phone: ''
            }

        }
    },
    methods: {
        async editProfileInfo() {
            try {
                const res = await editProfileInfoApi(this.profileEditInfo);
                console.log(res);
            }
            catch(err) {
                console.log(err);
            }
        }

    }
    
}
</script>