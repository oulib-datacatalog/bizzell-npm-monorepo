declare module '*.css' {
  const styles: { [key: string]: string }
  export = styles
}

declare module '*.png' {
  const url: string
  export = url
}

declare module '*.mp3' {
  const url: string
  export = url
}

declare module '*.mpg' {
  const url: string
  export = url
}

declare module '*.mpeg' {
  const url: string
  export = url
}

declare module '*.mov' {
  const url: string
  export = url
}

declare module '*.txt' {
  const url: string
  export = url
}

declare module '*.wav' {
  const url: string
  export = url
}

declare module '*.zip' {
  const url: string
  export = url
}

declare module '*.jpeg' {
  const url: string
  export = url
}

declare module '*.jpg' {
  const url: string
  export = url
}

declare module '*.gif' {
  const url: string
  export = url
}

declare module '*.svg' {
  const url: string
  export = url
}

declare module '*.woff' {
  const url: string
  export = url
}

declare module '*.woff2' {
  const url: string
  export = url
}

declare module '*.ttf' {
  const url: string
  export = url
}

declare module '*.eot' {
  const url: string
  export = url
}

// https://github.com/froala/react-froala-wysiwyg/issues/16
declare module 'react-froala-wysiwyg' {
  const content: any
  export = content
}

declare module 'react-froala-wysiwyg/FroalaEditorView' {
  const content: any
  export = content
}
