import { Rule, RuleEntityMap } from './type'

interface State {
  /** 规则集 */
  rules: Rule[]
  ruleEntityMap: RuleEntityMap
}

export const useRuleStore = defineStore('rule', {
  state: (): State => ({
    rules: [],
    ruleEntityMap: new Map(),
  }),

  actions: {
    getRuleEntity(key: string): Rule[] {
      return this.ruleEntityMap.get(key) || []
    },

    /** 添加规则实体 */
    addRuleEntity(key: string, rules: Rule[]): void {
      if (this.ruleEntityMap.has(key)) {
        message.warning(`${key} 已存在`)
        return
      }
      this.ruleEntityMap.set(key, rules)
    },

    updateRuleEntity(key: string, rules: Rule[]): void {
      this.ruleEntityMap.set(key, rules)
    },

    /** 删除规则实体 */
    deleteRuleEntity(key: string): void {
      this.ruleEntityMap.delete(key)
    },

    /** 向实体中添加一条规则 */
    addRuleForEntity(key: string, rule: Rule) {
      const rules = this.getRuleEntity(key)
      this.updateRuleEntity(key, [...rules, rule])
    },

    /** 从规则实体中删除某条规则 */
    deleteRuleFromEntity(key: string, rule: Rule) {
      const rules = this.getRuleEntity(key)
      this.updateRuleEntity(
        key,
        rules.filter((item) => item.name !== rule.name)
      )
    },
  },
})
