<template>
  <div class="message-alert">
    <div class="alert"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages" :key="i">
      <span></span>{{ item.message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 1400);
    },
  },
  created() {
    const vm = this;
    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 success
    vm.$bus.$on('message: push', (message, status = 'success') => {
      vm.updateMessage(message, status);
    });
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 120px;
  right: 20px;
  font-size: 16px;
  padding: 5px;
  z-index: 1100;
}
</style>
