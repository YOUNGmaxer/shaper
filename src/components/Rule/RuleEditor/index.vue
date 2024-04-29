<script setup lang="ts">
import { Rule, useRuleStore } from '@/modules/rule'

const props = defineProps<{
  ruleKey: string
}>()
const visible = defineModel<boolean>('visible')
const rule = ref<Rule>({
  name: '',
  mockData: '',
  handlers: [],
  disabled: false,
})
const { addRuleForEntity } = useRuleStore()

const submit = () => {
  addRuleForEntity(props.ruleKey, rule.value)
  visible.value = false
}
</script>

<template>
  <AModal v-model:open="visible" title="添加规则" :mask-closable="false" @ok="submit">
    <AForm :model="rule" :label-col="{ span: 4 }">
      <AFormItem name="name" label="Name">
        <AInput v-model:value="rule.name" />
      </AFormItem>
      <AFormItem name="mockData" label="Mock">
        <AInput v-model:value="rule.mockData" />
      </AFormItem>
      <AFormItem name="handlers" label="Handlers">
        <ASelect v-model:value="rule.handlers" mode="multiple" :options="[]" />
      </AFormItem>
    </AForm>
  </AModal>
</template>
