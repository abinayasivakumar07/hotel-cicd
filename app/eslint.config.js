module.exports = [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { require: "readonly", module: "writable", console: "readonly" }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];