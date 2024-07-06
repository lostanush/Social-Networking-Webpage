// next.config.js
module.exports = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        ...config.resolve.alias,
        "rc-util/es": "rc-util/lib",
      },
    };
    return config;
  },
};
