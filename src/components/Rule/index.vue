<script setup lang="ts">
import { Rule } from '@/modules/rule'

defineProps<{
  rule: Rule
}>()
</script>

<template>
  <ACollapse>
    <ACollapsePanel :key="rule.name" :header="rule.name">
      <template #extra>
        <ATag v-if="rule.mockData" color="#87d068">mock</ATag>
        <ATag v-if="rule.mockData" color="#108ee9">handler</ATag>
      </template>
      <div v-if="rule.mockData">mockData: {{ rule.mockData }}</div>
      <div v-else-if="rule.handlers.length">mockData: {{ rule.handlers }}</div>
    </ACollapsePanel>
  </ACollapse>
</template>
