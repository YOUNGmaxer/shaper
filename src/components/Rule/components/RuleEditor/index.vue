<script setup lang="ts">
const visible = defineModel<boolean>('visible')
</script>

<template>
  <AModal v-model:open="visible" title="编辑规则">
    <ADivider dashed>Rule</ADivider>
    <AInput />
    <ADivider dashed>Mock</ADivider>
    <AInput />
    <ADivider dashed>Handler</ADivider>
    <AInput />
  </AModal>
</template>
