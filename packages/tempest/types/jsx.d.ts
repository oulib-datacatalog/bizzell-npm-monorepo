import Vue, { VNode, Component, ComponentOptions } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}

    interface ElementClass extends Vue {}

    interface ElementAttributesProperty {
      $props: {}
    }

    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
