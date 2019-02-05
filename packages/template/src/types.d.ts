import Vue, { VNode } from 'vue'

declare module '*.css' {
  const styles: { [key: string]: string }
  export = styles
}

declare module 'vue-froala-wysiwyg' {
  const content: any
  export = content
}

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
