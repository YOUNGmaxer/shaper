<script setup lang="ts">
import { Rule } from '@/modules/rule'
import { MinusCircleTwoTone } from '@ant-design/icons-vue'

const props = defineProps<{
  rule: Rule
}>()
const emit = defineEmits<{
  (e: 'delete', rule: Rule): void
}>()
</script>

<template>
  <ACollapse>
    <ACollapsePanel :key="rule.name" :header="rule.name">
      <template #extra>
        <div v-if="rule.mockData" flex items-center>
          <ATag color="#87d068">mock</ATag>
          <MinusCircleTwoTone two-tone-color="red" @click.stop="emit('delete', rule)" />
        </div>
        <ATag v-if="rule.handlers.length" color="#108ee9">handler</ATag>
      </template>
      <div v-if="rule.mockData">mockData: {{ rule.mockData }}</div>
      <div v-else-if="rule.handlers.length">mockData: {{ rule.handlers }}</div>
    </ACollapsePanel>
  </ACollapse>
</template>
