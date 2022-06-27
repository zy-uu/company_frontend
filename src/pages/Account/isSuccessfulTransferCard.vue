<template>
<div class="isSuccessfulTansferCard">
    <b-card title="转账详细信息">
        <b-card-text>转账成功</b-card-text>
          <b-button variant="primary" @click="$emit('closeSuccessfulTag')">确定</b-button>
    </b-card>
</div>
    
</template>

<script>
export default {
        
    
}
</script>

<style lang="scss">
.isSuccessfulTansferCard {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%,-50%);

}

</style>
