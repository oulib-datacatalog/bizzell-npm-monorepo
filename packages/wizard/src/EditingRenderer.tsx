// import React from 'react'
// import { LayoutRoot, LayoutNode } from './layout'
// import { ContentAreaConfig, ContentArea } from './ContentArea'

// export class EditingRenderer extends React.Component<LayoutRoot<LayoutNode>> {
//   renderLayout(layout: LayoutNode) {
//     const render = (l: LayoutNode) => this.renderLayout(l)
//     switch (layout.type) {
//       case 'content-area': {
//         const config = <ContentAreaConfig {...layout} />
//         return <ContentArea {...layout} renderLayout={render} config={config} />
//       }
//       case 'custom': {
//         return <div>CustomThingy</div>
//       }
//       default: {
//         const never: never = layout
//         console.error(
//           new Error(`Unrecognized layout type ${(layout as any).type}`),
//         )
//       }
//     }
//   }
//   render() {
//     const { layout } = this.props
//     return this.renderLayout(layout)
//   }
// }
