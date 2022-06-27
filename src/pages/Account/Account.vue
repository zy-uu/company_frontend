<template>
  <div class="account-page">
    <Transfer
      :showTransfer="showTransfer"
      @showIsSuccessfulTransfer="isShowSuccessfulCard = true"
    />
    <isSuccessfulTransferCard
      v-show="isShowSuccessfulCard"
      @closeSuccessfulTag="isShowSuccessfulCard = false"
    />
    <div class="row d-flex flex-row-reverse mb-2">
      <button type="button" class="btn btn-primary mr-4" @click="openTransfer">
        发起转账
      </button>
    </div>
    <Widget
      title="<h5><span class='fw-semi-bold'>账单记录</span></h5>"
      bodyClass="widget-table-overflow"
      customHeader
    >
      <div class="table-responsive">
        <table class="table table-striped table-lg mb-0 requests-table">
          <thead>
            <tr class="text-muted">
              <th>乙方全称</th>
              <th>受理银行</th>
              <th>详细</th>
              <th>转账金额</th>
              <th>日期</th>
              <th>乙方所在城市</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in mock.table" :key="row.id">
              <td>{{ row.name }}</td>
              <td>{{ row.email }}</td>
              <td>{{ row.product }}</td>
              <td>{{ row.price }}</td>
              <td>{{ row.date }}</td>
              <td>{{ row.city }}</td>
              <td>
                <b-badge
                  :variant="
                    row.status === 'Pending'
                      ? 'success'
                      : row.status === 'Declined'
                      ? 'danger'
                      : 'info'
                  "
                  pill
                >
                  {{ row.status }}
                </b-badge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Widget>
  </div>
</template>
<script>
import mock from "./mock";
import Transfer from "./Transfer.vue";
import isSuccessfulTransferCard from "./isSuccessfulTransferCard.vue";
export default {
  data() {
    return {
      mock,
      showTransfer: true,
      isShowSuccessfulCard: false,
    };
  },
  components: {
    Transfer,
    isSuccessfulTransferCard,
  },
  methods: {
    openTransfer() {
      this.$bvModal.show("transfer-Model");
    },
  },
};
</script>

<style src="./Account.scss" lang="scss" />