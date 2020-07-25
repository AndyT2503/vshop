import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProductFilter from "./components/ProductFilter";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: Array(),
            keyword: "",
            cart: Array(),
        };
    }

    getProduct = async () => {
        let res = await axios.get("http://127.0.0.1:8000/api/product/");
        let data = res.data;
        this.setState({
            products: data,
        });
    };

    componentDidMount() {
        this.getProduct();
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword,
        });
    };

    onBuy = (product) => {
        var { cart } = this.state;
        var updateCart = [...cart, product];
        this.setState({
            cart: updateCart,
        });
    };

    onDeleteCart = (id) => {
        var { cart } = this.state;
        console.log(cart);
        var res = cart.filter((product) => product.id != id);
        this.setState({
            cart: res,
        });
    };

    getBrand = () => {
        var { products } = this.state;
        var brands = products.map((product) => product.brand);
        var set = new Set(brands);
        brands = [...set];
        return brands;
    };

    render() {
        return (
            <Router>
                <div>
                    <Header onSearch={this.onSearch} brands={this.getBrand} />
                    <div className="container mt-5" style={{minHeight: "100vh",}}>
                        <Route
                            path="/"
                            exact
                            render={(props) => (
                                <Product {...props} onBuy={this.onBuy} products = {this.state.products} />
                            )}
                        />
                        <Route
                            path="/gio-hang"
                            exact
                            render={(props) => (
                                <Cart
                                    {...props}
                                    cart={this.state.cart}
                                    deleteCart={this.onDeleteCart}
                                />
                            )}
                        />
                        <Route
                            path='/brand/:name'
                            exact
                            render={(props) => (
                                <ProductFilter
                                    {...props}
                                    keyword={this.state.keyword}
                                    onBuy={this.onBuy}
                                    Product = {this.state.products}
                                />
                            )}
                        />
                        <Route
                            path="/search"
                            exact
                            render={(props) => (
                                <ProductFilter
                                    {...props}
                                    keyword={this.state.keyword}
                                    onBuy={this.onBuy}
                                    Product = {this.state.products}
                                />
                            )}
                        />
                        <Route
                            path='/product/:id'
                            component={ProductDetail}
                        />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
