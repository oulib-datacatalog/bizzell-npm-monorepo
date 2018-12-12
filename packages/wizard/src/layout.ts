import React from 'react'
import { ContentAreaLayout } from './ContentArea'

export type LayoutRoot = {
  appName: string
  layout: LayoutNode
  customComponents: {
    [id: string]:
      | typeof React.Component
      | ((props: unknown) => React.ReactElement<unknown> | JSX.Element)
  }
}

type LayoutNodeBase = {
  type: string
}

export type LayoutNode =
  | { type: 'custom'; customComponent: string; props: object }
  | ContentAreaLayout

export type WizardComponentProps<Layout extends LayoutNodeBase> = Layout & {
  config?: React.ReactElement<WizardConfigProps<Layout>>
  renderLayout(layout: LayoutNode): any
}

export type WizardConfigProps<Layout extends LayoutNodeBase> = Layout & {
  setConfig: (config: Partial<Layout>) => void
}
