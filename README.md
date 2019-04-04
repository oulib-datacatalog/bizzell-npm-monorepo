## Development

Assert that node is installed.

> An editing environment which supports `prettier` formatting on save and `tslint` highlighting is strongly recommended.

Navigate to the project directory and install dependencies:

```bash
# installs npm deps for
# all packages in the repository
npm install
```

For a live dev environment:

```bash
# creates a new app and
# runs it in dev mode
npm run dev
```

> other npm run scripts are located in `package.json#scripts`

## Git Flow

- Work in branches named in kebab-case by feature (eg `feature-name`)
- Never merge to master without a pull request review and approval
- When merging to master, use the squash-and-merge option to reduce noise
- We will use `git rebase` exclusively when working in local dev environments.

## Project Structure

### packages

#### `create-bizzell-app`

CLI tool for creating new applications which properly import, load, and build `@bizzell/tempest` and `@bizzell/wizard`. Generated apps do not contain their own build logic and are wysiwyg editable.

#### `template`

#### `tempest`

React component library with basic building blocks for large, complicated apps.

### configs

#### `package.json`

Describes scripts and dependencies for project.

#### `package-lock.json`

Auto-generated file which locks dependency versions for security and convenience.

#### `tsconfig.json`

Configuration for the `typescript` compiler.

#### `tslint.json`

Configuration for `tslint`, which provides code warnings.
