/**
 * @fileoverview No react bootstrap named imports - only default imports
 * @author Ben Newman
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion", // `problem`, `suggestion`, or `layout`
		docs: {
			description:
				"No react bootstrap named imports - only default imports",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: "code", // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			namedImportWarning:
				"imports from react-bootstrap should not use a named import",
		},
	},

	create(context) {
		// variables should be defined here

		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		// any helper functions should go here or else delete this section

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			ImportDeclaration(node) {
				if (node.source.value !== "react-bootstrap") {
					return;
				}

				context.report({
					node,
					messageId: "namedImportWarning",

					fix(fixer) {
						const fixers = [];

						fixers.push(fixer.remove(node));
						node.specifiers.forEach((specifier) => {
							const text = specifier.local.name;
							fixers.push(
								fixer.insertTextAfter(
									node,
									`import ${text} from 'react-bootstrap/${text}'\n`
								)
							);
						});
						return fixers;
					},
				});
			},
		};
	},
};
