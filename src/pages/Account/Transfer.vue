<template>
  <div class="transfer-Model">
    <b-modal
      id="transfer-Model"
      ref="transferModel"
      hide-footer
      centered
      title="转账详细"
    >
      <div class="d-block text-center">
        <b-form class="was-validated">
          <b-form-group label="转账单位：">
            <b-form-input
              placeholder="请输入转账单位"
              v-model="transferInfo.companyName2"
              required
            ></b-form-input>
            <div class="valid-feedback">已校验成功</div>
            <div class="invalid-feedback">请正确填写转账单位</div>
          </b-form-group>
          <b-form-group label="转账卡号：">
            <b-form-input
              placeholder="请输入卡号"
              v-model="transferInfo.transferCard"
              required
            ></b-form-input>
            <div class="valid-feedback">已校验成功</div>
            <div class="invalid-feedback">请正确填写转账卡号</div>
          </b-form-group>
          <b-form-group label="转账金额：">
            <b-form-input
              placeholder="请输入转账金额"
              v-model="transferInfo.transferNum"
              required
            ></b-form-input>
            <div class="valid-feedback">已校验成功</div>
            <div class="invalid-feedback">请输入转账金额</div>
          </b-form-group>
          <b-form-group label="转账方式：">
            <b-form-input
              placeholder="请输入转账方式"
              v-model="transferInfo.payMethods"
              required
            ></b-form-input>
            <div class="valid-feedback">已校验成功</div>
            <div class="invalid-feedback">请正确填写转账方式</div>
          </b-form-group>
          <b-form-group label="转账详细：">
            <b-form-input
              placeholder="请输入详细"
              v-model="transferInfo.detail"
              required
            ></b-form-input>
            <div class="valid-feedback">已校验成功</div>
            <div class="invalid-feedback">请正确填写转账方式</div>
          </b-form-group>
          <b-form-group label="转账地址">
            <b-form-input
              placeholder="请输入转账地址"
              v-model="transferInfo.address"
              required
            ></b-form-input>
            <div class="valid-feedback">已校验成功</div>
            <div class="invalid-feedback">请正确填写转账方式</div>
          </b-form-group>
          
        </b-form>
      </div>
      <div class="d-flex flex-row-reverse">
        <b-button
          type="submit"
          variant="primary"
          class="ml-2"
          @click="transferAccount"
          >提交</b-button
        >
        <b-button variant="danger" @click="$bvModal.hide('transfer-Model')"
          >关闭</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import { transferApi } from "./transferHttp";
import confirmTansferInfo from "./confirmTansferInfo.vue";
export default {
  data() {
    return {
      transferInfo: {
        companyName1: "",
        companyName2: "",
        transferNum: "",
        payMethods: "",
        transferCard: "",
        detail: "",
        address: "",
        showTransferInfo: false,
      },
    };
  },
  components: {
    confirmTansferInfo,
  },
  props: {},
  created() {},
  methods: {
    async transferAccount() {
      try {
        const res = await transferApi(this.transferInfo);
        console.log(res);
        if(res.data.code === 200) {
          this.$bvModal.hide('transfer-Model');
          this.transferInfo.companyName1 = '',
          this.transferInfo.companyName2 = '',
          this.transferInfo.transferNum = '',
          this.transferInfo.payMethods = '',
          this.transferInfo.transferCard = '',
          this.transferInfo.detail = '',
          this.transferInfo.address = ''
          this.$emit("showIsSuccessfulTransfer");
        }
      } catch(err) {
        console.log(err);
      }
    },
  },
};
</script>