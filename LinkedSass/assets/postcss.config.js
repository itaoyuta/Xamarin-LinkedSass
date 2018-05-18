module.exports = {
  plugins: [
    require('postcss-selector-replace')({
      "before": ["[base]", "[test]"],
      "after": ["^", "~"]
    })
  ]
}
