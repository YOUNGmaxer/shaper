<script setup lang="ts">
import { Rule } from '@/modules/rule'

const visible = defineModel<boolean>('visible')

const rule = ref<Rule>({
  name: '',
  mockData: '',
  handlers: [],
  disabled: false,
})

const submit = () => {
  console.log('submit', rule.value)
  visible.value = false
}
</script>

<template>
  <AModal v-model:open="visible" title="编辑规则" @ok="submit">
    <ADivider dashed>Route</ADivider>
    <AInput />
    <ADivider dashed>Rule</ADivider>
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
