import { Rule, RuleMap } from './type'

interface State {
  /** 规则集 */
  rules: Rule[]
  ruleMap: RuleMap
}

export const useRule = defineStore('rule', {
  state: (): State => ({
    rules: [],
    ruleMap: new Map(),
  }),

  actions: {
    /** 添加规则应用实体 */
    addRuleEntity(key: string, rules: Rule[]) {
      if (this.ruleMap.has(key)) {
        message.warning(`${key} 已存在`)
        return
      }
      this.ruleMap.set(key, rules)
    },
  },
})
