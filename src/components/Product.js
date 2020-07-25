import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
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
        window.scrollTo(0, 0);
        if (this.props.products == "") {
            this.getProduct();
        } else {
            this.setState({
                products: this.props.products,
            });
        }
    }

    
    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    onClick = (event) => {
        var { products } = this.state;
        var target = event.target;
        var id = target.id;
        var res;
        products.forEach((product) => {
            if (product.id == id) {
                res = product;
            }
        });
        return this.props.onBuy(res);
    };

    

    render() {
        var { products } = this.state;
        var price = "";
        var product_list = products.map((product, index) => {
            price = this.numberWithCommas(product.price);
            return (
                <div
                    key={index}
                    className="col-xs-12 col-sm-6 col-md-4 col-xl-4 mt-3"
                    style={{
                        color: "black",
                        textDecoration: "none",
                    }}
                >
                    <div className="img-thumbnail">
                        <NavLink to={`/product/${product.id}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className=""
                                width="100%"
                            />
                        </NavLink>
                        <div className="caption">
                            <h2>{product.name}</h2>
                        </div>
                        <p>
                            <strong>
                                {price}
                                <sup>&#8363;</sup>
                            </strong>
                        </p>
                        <p
                            style={{textAlign: "right"}}
                        >
                            <NavLink
                                to="/gio-hang"
                                id={product.id}
                                className="btn btn-primary"
                                onClick={this.onClick}
                            >
                                Mua ngay
                            </NavLink>
                        </p>
                    </div>
                </div>
            );
        });
        return <div className="row mt-3 mb-3">{product_list}</div>;
    }
}

export default Product;
