<script setup lang="ts">
import { Rule as IRule, RuleKey, useRule } from '@/modules/rule'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import RuleEditor from './components/RuleEditor/index.vue'
import Rule from '@/components/Rule/index.vue'

defineProps<{
  ruleKey: RuleKey
  rules: IRule[]
}>()

const visible = ref(false)
const { deleteRuleEntity } = useRule()

const clickEdit = () => {
  visible.value = true
}
const clickDelete = (ruleKey: string) => {
  Modal.confirm({
    title: '确定删除吗？',
    onOk() {
      deleteRuleEntity(ruleKey)
    },
  })
}
</script>

<template>
  <div>
    <ACollapse>
      <ACollapsePanel :key="ruleKey" :header="ruleKey">
        <Rule v-for="item in rules" :key="item.name" :rule="item" />
        <template #extra>
          <EditOutlined @click.stop="clickEdit" />
          <DeleteOutlined ml-10px @click.stop="clickDelete(ruleKey)" />
        </template>
      </ACollapsePanel>
    </ACollapse>
    <RuleEditor v-model:visible="visible" />
  </div>
</template>
