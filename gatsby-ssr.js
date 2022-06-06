const React = require("react");
const { GlobalStyles } = require("./src/styles");
const { CartProvider } = require("./src/context");

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
        {element}
  </CartProvider>
);