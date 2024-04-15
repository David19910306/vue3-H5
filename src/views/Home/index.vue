<template>
  <div class="home">
    <div class="top-content">
      <div class="top-content-title">
        <img class="van-image" src="../../assets/logo.png" />
        <h2>自定义组件库</h2>
      </div>
      <div class="top-content-subtitle">
        <text>自定义总结组件库，持续更新...</text>
      </div>
    </div>
    <div class="components-button">
      <button-link 
        v-for="button in buttons" 
        :key="button.name"
        :button="button"
      ></button-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import { Button } from "@/types";
import "./index.less";

const buttons: Button[] = [
  {
    name: 'Buttons',
    label: '按钮',
    path: '/componentPage/buttons',
  },
  {
    name: 'FormCard',
    label: '表单卡片',
    path: '/componentPage/form-card',
  },
  {
    name: 'CustomTitle',
    label: '自定义标题',
    path: '/componentPage/custom-title',
  },
  {
    name: 'VehicleNumber',
    label: '车牌号输入组件',
    path: '/componentPage/vehicle-number',
  },
  {
    name: 'CustomNoticeBar',
    label: '多个轮播栏',
    path: '/componentPage/custom-noticebar',
  },
  {
    name: 'StarEvluate',
    label: '星级评价',
    path: '/componentPage/start-evlaute',
  }
];

</script>