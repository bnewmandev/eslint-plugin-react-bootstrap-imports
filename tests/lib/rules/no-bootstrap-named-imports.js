/**
 * @fileoverview No react bootstrap named imports - only default imports
 * @author Ben Newman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-bootstrap-named-imports"),
	RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
});

const ERROR_MSG = "imports from react-bootstrap should not use a named import";

const ruleTester = new RuleTester();
ruleTester.run("no-bootstrap-named-imports", rule, {
	valid: [
		{
			code: "import Table from 'react-bootstrap/Table'",
		},
	],

	invalid: [
		{
			code: "import { Table } from 'react-bootstrap'",
			errors: [{ message: ERROR_MSG, type: "ImportDeclaration" }],
			output: "import Table from 'react-bootstrap/Table'\n",
		},
		{
			code: "import { Table, Button } from 'react-bootstrap';",
			errors: [{ message: ERROR_MSG, type: "ImportDeclaration" }],
			output: "import Table from 'react-bootstrap/Table'\nimport Button from 'react-bootstrap/Button'\n",
		},
	],
});
