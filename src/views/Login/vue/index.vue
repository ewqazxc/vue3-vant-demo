<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <h2>
    Login 1
  </h2>
  <van-form @failed="onFailed">
    <!-- 通过 pattern 进行正则校验 -->
    <van-field
      v-model="state.userName"
      name="pattern"
      placeholder="用户名"
      :rules="[{ pattern, message: '用户名格式错误' }]"
    />
    <!-- 通过 validator 进行异步函数校验 -->
    <van-field
      v-model="state.password"
      name="asyncValidator"
      placeholder="密码"
      type="password"
      :rules="[{ validator: asyncValidator, message: '验证失败' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import { reactive } from "vue";
import { Toast } from "vant";

export default {
  setup() {
    const state = reactive({
      userName: "",
      password: "",
    });
    const pattern = /\d{6}/;

    // 校验函数返回 true 表示校验通过，false 表示不通过
    const validator = (val) => /1\d{10}/.test(val);

    // 校验函数可以直接返回一段错误提示
    const validatorMessage = (val) => `${val} 不合法，请重新输入`;

    // 校验函数可以返回 Promise，实现异步校验
    const asyncValidator = (val) =>
      new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });

    const onFailed = (errorInfo) => {
      console.log("failed", errorInfo);
    };

    return {
      state,
      pattern,
      onFailed,
      validator,
      asyncValidator,
    };
  },
};
</script>

<style></style>
