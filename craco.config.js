const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@common": resolvePath("./src/common"),
      "@features": resolvePath("./src/features"),
      "@entities": resolvePath("./src/entities"),
      "@widgets": resolvePath("./src/widgets"),
      "@images": resolvePath("./src/shared/images"),
      "@icons": resolvePath("./src/shared/icons"),
      "@services": resolvePath("./src/services"),
    },
  },
};
