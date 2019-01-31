declare module '*.css' {
  const styles: { [key: string]: string }
  export = styles
}

// https://github.com/froala/react-froala-wysiwyg/issues/16
declare module 'react-froala-wysiwyg' {
  const content: any
  export = content
}
