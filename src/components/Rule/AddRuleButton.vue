<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
import RuleEditor from './RuleEditor/index.vue'

defineProps<{
  ruleKey: string
}>()

const visible = ref(false)
</script>

<template>
  <div>
    <AButton type="dashed" block h-46px @click="visible = true">
      <PlusOutlined />
      <slot />
    </AButton>
    <RuleEditor v-if="visible" v-model:visible="visible" :rule-key="ruleKey" />
  </div>
</template>
