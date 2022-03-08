<template>
  <transition name="toastTransition">
    <div class="toastWrapper" v-if="toastInfo.isActive">
      <div
        class="toastBox"
        :style="'background-color:' + toastInfo.bgColor"
        @click="clearToast"
      >
        {{ toastInfo.text }}
      </div>
    </div>
  </transition>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "ToastComp",
  setup() {
    const store = useStore();

    const toastInfo = computed(() => {
      return store.state.toastProps;
    });

    const clearToast = () => {
      store.commit("clearToast");
    };

    return { toastInfo, clearToast };
  },
};
</script>

<style lang="scss" scoped>
.toastWrapper {
  position: fixed;
  left: 0;
  top: 150px;
  width: 100%;
  z-index: 999;
}

.toastBox {
  padding: 20px;
  color: black;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: auto;
  cursor: pointer;
}

.toastBox:hover {
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.9);
}

.toastTransition-enter-active {
  animation: toastEnter 1s;
}

.toastTransition-leave-active {
  animation: toastLeave 0.5s;
}

@keyframes toastEnter {
  0% {
    opacity: 0;
    transform: translateY(-60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes toastLeave {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
