<script setup lang="ts">
import RuleEntity from '@/components/RuleEntity/index.vue'
import AddButton from '@/components/RuleEntity/components/AddButton.vue'
import { useRule } from '@/modules/rule'

const ruleStore = useRule()
</script>

<template>
  <RuleEntity
    v-for="entity in ruleStore.ruleEntityMap.entries()"
    :key="entity[0]"
    :rule-key="entity[0]"
    :rules="entity[1]"
    mb-12px
  />
  <AddButton />
</template>
