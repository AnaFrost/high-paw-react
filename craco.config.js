const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@features": resolvePath("./src/features"),
      "@images": resolvePath("./src/images"),
      "@icons": resolvePath("./src/icons"),
      "@services": resolvePath("./src/services"),
    },
  },
};
