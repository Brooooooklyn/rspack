const path = require("path");
/** @type {import("@rspack/core").Configuration} */
module.exports = {
	resolve: {
		alias: {
			_: [path.resolve(__dirname, "a"), path.resolve(__dirname, "b")]
		}
	},
	experiments: {
		rspackFuture: {
			newResolver: true
		}
	}
};
