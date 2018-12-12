import React from 'react'
import { LayoutRoot, LayoutNode } from './layout'
import { ContentArea } from './ContentArea'

export class DisplayRenderer<Layout extends LayoutRoot> extends React.Component<
  Layout
> {
  renderComponent<P, M>(
    Component: typeof React.Component | ((props: P) => React.ReactElement<P>),
    layout: P,
    mixin: M = {} as M,
  ) {
    const C = Component as any
    return <C {...layout} {...mixin} renderLayout={this.renderLayout} />
  }

  renderLayout = <Mixin extends {}>(layout: LayoutNode, mixin?: Mixin) => {
    const { customComponents } = this.props
    switch (layout.type) {
      case 'content-area':
        return this.renderComponent(ContentArea, layout)
      case 'custom':
        const CustomComponent = customComponents[layout.customComponent]
        return this.renderComponent(CustomComponent, layout.props)
      default:
        const never: Error =
          layout ||
          new Error(`Unrecognized layout type ${(layout as any).type}`)
        throw never
    }
  }

  render() {
    const { layout } = this.props
    return this.renderLayout(layout)
  }
}
