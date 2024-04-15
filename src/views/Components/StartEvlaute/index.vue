<template>
  <Header :title="route.query.title" />
  <div class="start-evlaute">start-evlaute</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Header from "@/components/Header/index.vue";
import "./index.less";

const route = useRoute();
</script>
