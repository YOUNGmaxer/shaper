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
  <div>
    <ACollapse>
      <ACollapsePanel :key="rule.name" :header="rule.name">
        <template #extra>
          <div flex items-center>
            <ATag v-if="rule.mockData" color="#87d068">mock</ATag>
            <ATag v-if="rule.handlers.length" color="#108ee9">handler</ATag>
            <MinusCircleTwoTone two-tone-color="red" @click.stop="emit('delete', rule)" />
          </div>
        </template>
        <div v-if="rule.mockData">mockData: {{ rule.mockData }}</div>
        <div v-else-if="rule.handlers.length">mockData: {{ rule.handlers }}</div>
      </ACollapsePanel>
    </ACollapse>
  </div>
</template>
