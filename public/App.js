// function ProductTable(props) {
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductTable = (function (_React$Component) {
    _inherits(ProductTable, _React$Component);

    function ProductTable() {
        _classCallCheck(this, ProductTable);

        _get(Object.getPrototypeOf(ProductTable.prototype), "constructor", this).apply(this, arguments);
    }

    // function ProductRow(props) {
    _createClass(ProductTable, [{
        key: "render",
        value: function render() {
            var productRows = this.props.products.map(function (product) {
                return React.createElement(ProductRow, { key: product.id, product: product });
            });
            return React.createElement(
                "table",
                { className: "bordered" },
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "Product Name"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "Price"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "Category"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "Image"
                        )
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    productRows
                )
            );
        }
    }]);

    return ProductTable;
})(React.Component);

var ProductRow = (function (_React$Component2) {
    _inherits(ProductRow, _React$Component2);

    function ProductRow() {
        _classCallCheck(this, ProductRow);

        _get(Object.getPrototypeOf(ProductRow.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(ProductRow, [{
        key: "render",
        value: function render() {
            var products = this.props.product;
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    products.productName
                ),
                React.createElement(
                    "td",
                    null,
                    "$",
                    products.price
                ),
                React.createElement(
                    "td",
                    null,
                    products.category
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "a",
                        { href: products.image, target: "_blank" },
                        "View"
                    )
                )
            );
        }
    }]);

    return ProductRow;
})(React.Component);

var ProductAdd = (function (_React$Component3) {
    _inherits(ProductAdd, _React$Component3);

    function ProductAdd() {
        _classCallCheck(this, ProductAdd);

        _get(Object.getPrototypeOf(ProductAdd.prototype), "constructor", this).call(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _createClass(ProductAdd, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var product = {
                price: document.querySelector('#price').value, productName: document.querySelector('#productName').value, image: document.querySelector('#image').value, category: document.querySelector('#category').value
            };
            this.props.createProduct(product);
            document.querySelector('#price').value = "";
            document.querySelector('#productName').value = "";
            document.querySelector('#image').value = "";
            document.querySelector('#category').value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { id: "productForm", onSubmit: this.handleSubmit },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "label",
                        { htmlFor: "category" },
                        "Category"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "select",
                        { name: "category", id: "category" },
                        React.createElement(
                            "option",
                            null,
                            "Shirts"
                        ),
                        React.createElement(
                            "option",
                            null,
                            "Jeans"
                        ),
                        React.createElement(
                            "option",
                            null,
                            "Jackets"
                        ),
                        React.createElement(
                            "option",
                            null,
                            "Sweaters"
                        ),
                        React.createElement(
                            "option",
                            null,
                            "Accessories"
                        )
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        { htmlFor: "productName" },
                        "Product Name"
                    ),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", name: "productName", id: "productName" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        null,
                        "Add Product"
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "label",
                        { htmlFor: "price" },
                        "Price Per Unit"
                    ),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", name: "price", id: "price", placeholder: "$" }),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        { htmlFor: "image" },
                        "Image URL"
                    ),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", name: "image", id: "image" }),
                    React.createElement("br", null)
                )
            );
        }
    }]);

    return ProductAdd;
})(React.Component);

var ProductList = (function (_React$Component4) {
    _inherits(ProductList, _React$Component4);

    function ProductList() {
        _classCallCheck(this, ProductList);

        _get(Object.getPrototypeOf(ProductList.prototype), "constructor", this).call(this);
        this.state = { products: [] };
        this.createProduct = this.createProduct.bind(this);
    }

    _createClass(ProductList, [{
        key: "createProduct",
        value: function createProduct(product) {
            var newProductList = this.state.products.slice();
            newProductList.push(product);
            product.id = this.state.products.length + 1;
            this.setState({ products: newProductList });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h2",
                    null,
                    "My Company Inventory"
                ),
                React.createElement(
                    "div",
                    null,
                    "Showing all available products"
                ),
                React.createElement("hr", null),
                React.createElement("br", null),
                React.createElement(ProductTable, { products: this.state.products }),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    null,
                    "Add a new product to inventory"
                ),
                React.createElement("hr", null),
                React.createElement("br", null),
                React.createElement(ProductAdd, { createProduct: this.createProduct })
            );
        }
    }]);

    return ProductList;
})(React.Component);

var application = React.createElement(ProductList, null);
ReactDOM.render(application, document.querySelector('#content'));