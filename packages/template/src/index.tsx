import Vue from 'vue'
import styles from './index.css'
import { Button, justifyEnd } from '@bizzell/tempest'
// import { LayoutRoot } from '@bizzell/wizard'

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js'

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css'

import FroalaEditor from 'vue-froala-wysiwyg'

Vue.use(FroalaEditor)

new Vue({
  el: '#anchor',
  render(h) {
    return (
      <div>
        <froala />
        <p>sup</p>
        <div className={justifyEnd}>
          <Button secondary text="not me" />
          <Button primary text="heyo" />
        </div>
      </div>
    )
  },
})

// const { editorContainer } = styles

// Render Froala Editor component.

// function ButtonDemo() {
//   return (
//     <div>
//       <div className={editorContainer}>
//         <FroalaEditor tag="textarea" />
//       </div>
//       <div className={justifyEnd}>
//         <Button
//           text="Hello World!"
//           secondary
//           onClick={() =>
//             import('./dynamic').then(dynamic => {
//               dynamic.assertImported()
//             })
//           }
//         />
//         <Button text="Hello World!" primary />
//       </div>
//     </div>
//   )
// }

// const layoutRoot: LayoutRoot = {
//   appName: 'demo',
//   layout: {
//     type: 'custom',
//     customComponent: 'buttonDemo',
//     props: {},
//   },
//   customComponents: {
//     buttonDemo: null, // ButtonDemo,
//   },
// }
