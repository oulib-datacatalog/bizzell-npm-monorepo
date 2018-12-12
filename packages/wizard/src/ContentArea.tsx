import React from 'react'
import { WizardComponentProps, WizardConfigProps } from './layout'

export type ContentAreaLayout = {
  type: 'content-area'
  flush: boolean
  row: boolean
}

export class ContentArea extends React.Component<
  WizardComponentProps<ContentAreaLayout>
> {
  constructor(props: WizardComponentProps<ContentAreaLayout>) {
    super(props)
  }
  render() {
    return <div>stuff</div>
  }
}

export class ContentAreaConfig extends React.Component<
  WizardConfigProps<ContentAreaLayout>
> {
  constructor(props: WizardConfigProps<ContentAreaLayout>) {
    super(props)
  }
  render() {
    return 'stuff'
  }
}
