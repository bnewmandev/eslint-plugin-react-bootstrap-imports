# eslint-plugin-react-bootstrap-imports

An eslint plugin for react bootstrap imports

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
yarn -D add eslint
```

Next, install `eslint-plugin-react-bootstrap-imports`:

```sh
npm install eslint-plugin-react-bootstrap-imports --save-dev
yarn -D add eslint-plugin-react-bootstrap-imports
```

## Usage

Add `react-bootstrap-imports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
	"plugins": ["react-bootstrap-imports"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
	"rules": {
		"react-bootstrap-imports/no-bootstrap-named-imports": 2
	}
}
```
