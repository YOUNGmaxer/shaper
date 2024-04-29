<script setup lang="ts">
import { Rule as IRule, RuleKey, useRuleStore } from '@/modules/rule'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import RuleEntityEditor from './components/RuleEntityEditor/index.vue'
import Rule from '@/components/Rule/index.vue'
import AddRuleButton from '@/components/Rule/AddRuleButton.vue'

const props = defineProps<{
  ruleKey: RuleKey
  rules: IRule[]
}>()

const visible = ref(false)
const { deleteRuleEntity, deleteRuleFromEntity } = useRuleStore()

const clickEdit = () => {
  visible.value = true
}
const clickDeleteEntity = (ruleKey: string) => {
  Modal.confirm({
    title: '确定删除吗？',
    onOk() {
      deleteRuleEntity(ruleKey)
    },
  })
}
const clickDeleteRule = (rule: IRule) => {
  Modal.confirm({
    title: '确定删除规则吗？',
    onOk() {
      deleteRuleFromEntity(props.ruleKey, rule)
    },
  })
}
</script>

<template>
  <div>
    <ACollapse>
      <ACollapsePanel :key="ruleKey" :header="ruleKey">
        <Rule v-for="item in rules" :key="item.name" :rule="item" @delete="clickDeleteRule" />
        <AddRuleButton not-first:mt-8px />
        <template #extra>
          <EditOutlined @click.stop="clickEdit" />
          <DeleteOutlined ml-10px @click.stop="clickDeleteEntity(ruleKey)" />
        </template>
      </ACollapsePanel>
    </ACollapse>
    <RuleEntityEditor v-model:visible="visible" />
  </div>
</template>
