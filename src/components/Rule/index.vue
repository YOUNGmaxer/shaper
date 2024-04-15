<script setup lang="ts">
import { Rule, RuleKey } from '@/modules/rule'

const props = defineProps<{
  ruleKey: RuleKey
  rule: Rule
}>()
</script>

<template>
  <ACollapse>
    <ACollapsePanel :key="ruleKey" :header="ruleKey">
      {{ rule }}
    </ACollapsePanel>
  </ACollapse>
</template>

<style></style>
