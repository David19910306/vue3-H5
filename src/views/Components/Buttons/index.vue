<template>
  <Header :title="route.query.title"/>
  <div class="buttons">Buttons</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Header from "@/components/Header/index.vue";
import "./index.less";

const route = useRoute();
</script>
