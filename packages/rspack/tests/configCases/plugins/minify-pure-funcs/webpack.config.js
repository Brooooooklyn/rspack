const rspack = require("@rspack/core");
/**
 * @type {import("@rspack/core").Configuration}
 */
module.exports = {
	optimization: {
		minimize: true
	},
	plugins: [
		new rspack.SwcJsMinimizerRspackPlugin({
			compress: {
				pure_funcs: ["console.error", "console.warn"]
			}
		})
	]
};
