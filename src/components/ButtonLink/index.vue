<template>
  <!-- :to标签传参path属性参数用query，name属性参数用params -->
  <router-link class="link-button" :to="{path: button.path, query: {title: button.name}}">
    <text>{{ button.label }}</text>
    <van-icon name="arrow" />
  </router-link>
</template>

<script lang="ts" setup>
import { Button } from "@/types";
import "./index.less";

defineProps<{
  button: Button
}>();
</script>