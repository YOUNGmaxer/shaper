<script setup lang="ts">
import { Rule, RuleKey } from '@/modules/rule'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import RuleEditor from '@/components/Rule/components/RuleEditor/index.vue'

defineProps<{
  ruleKey: RuleKey
  rule: Rule
}>()

const visible = ref(false)

const clickEdit = () => {
  visible.value = true
}
const clickDelete = () => {
  Modal.confirm({
    title: '确定删除吗？',
    onOk() {
      console.log('delete')
    },
  })
}
</script>

<template>
  <ACollapse>
    <ACollapsePanel :key="ruleKey" :header="ruleKey">
      {{ rule }}
      <template #extra>
        <EditOutlined @click.stop="clickEdit" />
        <DeleteOutlined ml-10px @click.stop="clickDelete" />
      </template>
    </ACollapsePanel>
  </ACollapse>
  <RuleEditor v-model:visible="visible" />
</template>
