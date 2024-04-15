<template>
  <div class="header">
    <label>{{ title || '默认标题' }}</label>
    <van-icon class="arrow-left" name="arrow-left" size="18" @click="router.back()" />
  </div>
</template>

<script lang="ts" setup>
import { LocationQueryValue, useRouter } from "vue-router";
import "./index.less";

defineProps<{
  title: LocationQueryValue | LocationQueryValue[],
}>();

const router = useRouter();
</script>