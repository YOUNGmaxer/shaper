import { Rule, RuleEntityMap } from './type'

interface State {
  /** 规则集 */
  rules: Rule[]
  ruleEntityMap: RuleEntityMap
}

export const useRule = defineStore('rule', {
  state: (): State => ({
    rules: [],
    ruleEntityMap: new Map(),
  }),

  actions: {
    /** 添加规则实体 */
    addRuleEntity(key: string, rules: Rule[]) {
      if (this.ruleEntityMap.has(key)) {
        message.warning(`${key} 已存在`)
        return
      }
      this.ruleEntityMap.set(key, rules)
    },

    /** 删除规则实体 */
    deleteRuleEntity(key: string) {
      this.ruleEntityMap.delete(key)
    },
  },
})
