# Bizzell App

This readme outlines all the configuration you'll need to get up and running with an application generated using `@bizzell/create-bizzell-app`. First, you'll need to make sure `node.js` is installed on your machine along with a recent version of `npm`. We recommend using Visual Studio Code (not to be confused with Visual Studio) and Git to get the best tooling and support.

### To Install Node:

Go to https://nodejs.org/en/download and download applicable version for your machine and project

### To Install VS Code:

Go to https://code.visualstudio.com/download and download applicable version for your machine

## Contents

- [Under the Hood](#under-the-hood)
- [Architecture](#architecture)
- [Workflow](#workflow)
- [Contributing](#contributing)
- [Managing VS Code](#managing-vs-code)
- [Managing State with Redux](#managing-state-with-redux)
- [Testing](#testing)
- [Using Froala Editors](#using-froala-editors)

## Under the Hood

[Back to contents](#contents)

- `React`: Most popular UI library/framework in the world, and for good reason.
- `Webpack`: Javascript bundler which excels at bundling applications. Includes support for tree shaking and code splitting.
- `Jest`: Test runner that just works. Paired with `Enzyme`, can even test UI components.
- `Typescript`: Language pragma which adds type declarations to javascript. It has a structural, algebraic type system.

## Architecture

[Back to contents](#contents)

### json files

#### package.json

Contains project details and dependencies. You may want to update the various package and repository fields to reflect your project. Read [npm documentation](https://docs.npmjs.com/) to learn more.

#### package-lock.json

Automatically generated file containing exact dependency versions and other dependency information. Lock files protect you against malicious code when using open source software. Do not edit the lock file manually, but do track it on GitHub.

### Store Directory

This directory contains all the pieces of a `redux` store for managing global application state. Most state can be managed within components, some state slices and control flows for server requests are best handled by a formal store. The architecture of the store is made to fit an early, straightforward version the [ducks](https://github.com/erikras/ducks-modular-redux) model. For more information, see [Managing State with Redux](#managing-state-with-redux).

### Components Directory

This folder contains application specific React components. Mosts work happens in the Components directory.

### Any other important files

#### App.tsx

App is conceptually the root level component for the application. It provides global contexts and renders the majority of the website.

#### AppRouter.tsx

AppRouter is a url router; it changes what users see based on the current url. This is how multiple pages are handled within one website. By default, generated apps use hash routing. This is quick and makes debugging faster. Because we do not support server side rendering, the downsides of hash routing are irrelevant.

#### index.tsx

`index.tsx` is the entry point of the website. All code that runs can be traced back to it.

## Workflow

[Back to contents](#contents)

Assert that you have `node` installed. Open the project directory in a terminal or command prompt. The first time you open the project and anytime the project's dependencies change, you'll need to run:

```bash
npm install
```

This fetches all the project dependencies and lobs them into the `node_modules` directory. Note that `package-lock.json` is generated automatically and exists to keep our dependencies in sync, so you shouldn't have to run `npm install` often.

Use the following commands (specified in `package.json#scripts`) to interact with and the project.

```bash
# Run Jest tests:
npm run test

# Run dev mode serve:
# Recompiles on save,
# Automatically opens in browser.
npm run dev

# Run prod mode build:
# Compile with minification,
# compression, and prod sources.
# Outputs to ./build
npm run build
```

You should be able to configure your work environment to autoformat files on save using the `prettier` configuration found in `package.json` (using the `prettier` extension in `VSCode`, for example).

All git commits are guarded by a `husky` precommit check which runs tests and makes sure `prettier` has run over all the files. In some cases, it is useful to use the `--no-verify` flag when committing to skip these checks, however the drawbacks are obvious.

## Managing VS Code

[Back to contents](#contents)

- [Configure settings](#to-configure-settings-in-vs-code)
- [Get extensions](#to-get-extensions-in-vs-code)
- [Manage extensions](#to-manage-extensions-in-vs-code)

### To Configure Settings in VS Code:

There are two types of settings VS Code provides - User (these apply globally to any instance of VS Code you open) and Workspace (these settings are stored inside your workspace in a .vscode folder and will only be applied when the workspace is opened)

To configure the desired settings go to File > Preferences > Settings (Code > Preferences > Settings on a Mac) for both user and workspace settings. Your changes will go into effect after the settings.json file has been saved.

In Windows the Settings File is located at %APPDATA%\Code\User\settings.json

On a Mac the Settings File is located at \$HOME/Library/Application Support/Code/User/settings.json

In Linux the Settings File is at \$HOME/.config/Code/User/settings.json

For the workspace settings file, go to the .vscode folder within your project

### To Get Extensions in VS Code:

- Step 1. Bring up the Extensions view by clicking the Extensions icon (a square icon usually at the bottom of the icon list) in the Activity Bar on the side of the VS Code platform or use the command (Ctrl + Shift + X)

- Step 2. Browse the various extensions until you find the one you want. In order to see a more in-depth explanation of any extension simply click on its name to open a side view which will give you the details, contributions, changelog, and dependencies of the chosen extension. When you've found what you want click the Install button next to the chosen extension.

- Step 3. In order for your downloaded extensions to take effect in VS Code click the Reload button that appears after the extension is successfully downloaded. This will restart VS Code and allow your extension to be used.

### To Manage Extensions in VS Code:

#### To List Installed Extensions:

Open the More Actions (…) drop-down menu and select 'Show Installed Extensions'. This will show you all installed extensions.

#### To Uninstall an Extension:

Click the gear button on the right of an extension entry and choose Uninstall from the drop-down menu. Then reload VS Code when prompted to uninstall the extension on your machine.

#### To Disable an Extension:

Click the gear button on the right of an extension entry and choose Disable or Disable (Workspace) {this will only disable the extension for your current workspace}. Then reload VS Code when prompted to disable the extension.

#### To Enable an Extension:

Click the gear button on the right of an extension entry and choose Enable or Enable (Workspace). Then reload VS Code when prompted to enable the extension.

#### To Automatically Update Extensions:

VS Code checks for updates on extensions and automatically installs them. You'll know an extension has been updated if you are prompted to reload VS Code.

#### To Update Extensions Manually:

If auto-update of extensions is disabled (accomplished by setting extensions.autoUpdate to false). Open the More Actions (…) drop-down menu and select 'Show Outdated Extensions' then click the Update button on the extensions you'd like to update. You will then be prompted to reload VS Code so the update can go into effect.

## Managing State with Redux

[Back to contents](#contents)

- [Add variables to state](#to-add-variables-to-state)
- [Add actions to modify state](#to-add-actions-to-modify-state)
- [Connect a component to state](#to-connect-a-component-to-state)
- [Use actions to modify state](#to-use-actions-to-modify-state)
- [Access variables from state](#to-access-variables-from-state)
- [Learn more](#to-learn-more)

### To Add Variables to State

Go to `src/configureStore.ts`. In the AppState interface, add variables with the format `varName: varType`.

Then go to `src/reducers/index.ts`. In initialState, add starting variables with the format `varName: value,`.

### To Add Actions to Modify State

Go to `src/actions/index.ts`. Add functions using the format provided. All actions will need a type. If you want the action to accept additional arguments or store additional variables you can modify the AppAction interface.

Then go to `src/reducers/index.ts`. Add a case to the switch statement for the type of action you added. The state returned will be the new state after the action.

### To Connect a Component to State

Add the following import statements:

```javascript
import { AppState } from '<path to src>/configureStore'
import { connect } from 'react-redux'
```

Add the function `mapStateToProps`. This can return the whole state or just certain variables. Then connect and export the component.

```javascript
function mapStateToProps(state: AppState) {
    return { ...state }
}

const ConnectedComponent = connect(
    mapStateToProps,
    dispatch => ({dispatch}),
)(ComponentName)

export ConnectedComponent
```

### To Use Actions to Modify State

Make sure the component is connected to the state.

Add the following import statements.

```javascript
import { Dispatch } from 'redux'
import { <desiredActions> } from '<path to src>/actions'
```

Add an interface for props and allow props to be passed to the component.

```javascript
interface ComponentProps extends AppState {
  dispatch: Dispatch;
}

class ComponentName extends Component<ComponentProps> {}
```

To actually use an action you will need the following code.

```javascript
const { dispatch } = this.props
dispatch(actionName())
```

### To Access Variables from State

Make sure the component is connected to the state and that the variables you want to access are included in `mapStateToProps`. Then you can access the variable using `this.props.variableName`.

### To Learn More

Redux documentation: https://react-redux.js.org/

## Images

[Back to contents](#contents)

### To Store Needed Images

In order to use the wanted images, you first need to create an img folder within src folder you wish to work in. For example if you'd like to add images to the index.html found within template, you must add the img folder within the same src folder within template. Place all of the desired images (png, jpg, gif, etc.) within the img folder so they will render correctly on your page.

### To Call An Image

Images can be called within the html. The 'alt' can possess any name you wish to give to the picture (alt is needed for `html <img/>` to work within the html, but has no baring outside of the picture's reference, so can be named any arbitrary value). 'src' is where you place the file path of the desired image, the 'require' portion forces React to render the picture itself instead of a placeholder. You can also stylize the photo within the image call, as seen below, or by calling the required css.

Example of calling a .png:

```html
<img alt="plus" src={require('./img/name_of_picture.png')} />
```

Example of calling a .jpg with styling:

```html
<img alt="vibe" style={{ width: 50 }} src={require('./img/vibraphone.jpg')}
/>
```

Example of calling a .gif:

```html
<img alt="hello" src={require('./img/hello.gif')} />
```

## Testing

[Back to contents](#contents)

### To run a test

Execute the command npm run test in terminal.

### To create a test

Ensure that test file names follow the format of 'filename'.test.ts/tsx.

Add the following import statements:

```javascript
import { cleanup } from 'react-testing-library'
import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ComponentYouWouldLikeToTest from './ComponentYouWouldLikeToTest'
```

Configure and set up react-testing-library's cleanup function:

```javascript
Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)
```

Then component test/s can be implemented. Documentation regarding the specifics of React testing can be found at the following:

https://jestjs.io/docs/en/tutorial-react

https://github.com/kentcdodds/react-testing-library

## Using Froala Editors

[Back to contents](#contents)

To make life easier, the generated apps come with Froala editor support in dev mode. These editors can be used as WYSIWYG html editors when running the application in development mode. In production, the editing tools are removed, so users can't alter the site and the production mode website is smaller.

The dark toolbar across the top of the generated application in dev mode is removed in production and provides tools for interacting with the editors. The toolbar includes buttons for toggling between an editing and a preview mode as well as a save button that writes any changes to the editor content to disk in the static directory.

To add more editors, mimic the Dashboard component in the generated app:

```javascript
// components/YourComponent
<Editor id="<file-name>" content={import('../../static/<file-name>.json')} />
```

```json
// static/<file-name>
{ "content": "" }
```

In dev mode, the editor will be fully functional.
