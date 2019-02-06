const babel = require("babel-core");
let result = babel.transformFileSync("./mock.jsx", {});
console.log(result.code)

