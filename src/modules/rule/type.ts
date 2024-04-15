export type RuleKey = string

type Handler = (input: any) => any

export type Rule = {
  disabled?: boolean
  mockData?: any
  handlers?: Handler[]
}

export type RuleMap = Record<RuleKey, Rule[]>
