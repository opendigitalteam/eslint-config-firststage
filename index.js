module.exports = {
  configs: {
    all: {
      plugins: ["firststage"],
      rules: {
        "firststage/server-actions": "error",
      },
    },
  },
};
