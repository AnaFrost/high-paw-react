const path = require("path");

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [{ test: /\\.(png|jp(e*)g|svg|gif)$/, use: ["file-loader"] }],
      },
    },
    alias: {
      "@common": path.resolve(__dirname, "src/common"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@images": path.resolve(__dirname, "src/shared/images"),
      "@icons": path.resolve(__dirname, "src/shared/icons"),
    },
  },
};
