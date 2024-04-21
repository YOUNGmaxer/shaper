export type RuleKey = string

type Handler = {
  label: string
  value: string
  core: (input: any) => any
}

export type Rule = {
  /** 规则名 */
  name: string
  /** 是否关闭规则 */
  disabled?: boolean
  mockData?: any
  /** 对响应结果进行处理（按顺序链式处理） */
  handlers: Handler[]
}

export type RuleMap = Map<RuleKey, Rule[]>
