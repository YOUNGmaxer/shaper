<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'

const visible = ref(false)
</script>

<template>
  <div>
    <AButton type="dashed" block h-46px @click="visible = true">
      <PlusOutlined />
      <slot />
    </AButton>
  </div>
</template>
