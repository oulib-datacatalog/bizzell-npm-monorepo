## Development

### Needs development

We need to

- finish up complete documentation and run/installation instructions
- make the app render the user-generated HTML from Froala
- make the app persist use generated html via a static directory
- expand the list of usable file types for end users (file-loader config in webpack)
- get cli up and running

### Finished

We have finished

- making a component library
- hooking in the Froala WYSIWYG editor
- making a deployment path
- making a hidden build tool

## Design

The package structure of the project is like the one described in the design document. The main repo is named `bizzell-npm-monorepo`, which has a global `node_modules` directory. There are three packages, `tempest`, `template`, and `create-bizzell-app`, which each have their own node_modules, `package.json`, and lock files. The `package.json` and lock files contain information about dependencies and versions.
