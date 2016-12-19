module.exports = {
	"rules": {
		// disallow id selectors, e.g. #idname
		"selector-no-id": true,

		// disallow type selectors, e.g. a {}
		"selector-no-type": true,

		// limit number of adjacent empty lines in selectors
		"selector-max-empty-lines": 0,

		// limit specificity of selectors. "0,2,0" = 0 ids, 2 classes, 0 types
		"selector-max-specificity": "0,2,0",

		// disallow empty lines before nesting rules
		"rule-nested-empty-line-before": "always",

		// disallow missing end of source newline
		"no-missing-end-of-source-newline": true,

		// disallow whitespace at the end of a line, e.g. a {} ;
		"no-eol-whitespace": true,

		// disallow extra semicolons at the end of rules
		"no-extra-semicolons": true,

		// disallow duplicate selectors
		"no-duplicate-selectors": true,

		// disallow hex values for colors
		"color-no-hex": true,

		// disallow empty comments
		"comment-no-empty": true,

		// disallow units for 0 values
		"length-zero-no-unit": true,

		// disallow vendor prefixes (added on distro code compilation)
		"value-no-vendor-prefix": true,

		// tabs > spaces or fight me
		"indentation": "tab"
	}
}
