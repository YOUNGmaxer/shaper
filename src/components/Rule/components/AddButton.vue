<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <AButton type="dashed" block h-46px>
    <PlusOutlined />
    <slot />
  </AButton>
</template>
