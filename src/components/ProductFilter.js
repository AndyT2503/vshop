import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ProductFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            keyword: "",
        };
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.keyword !== prevState.keyword) {
            return { keyword: nextProps.keyword };
        } else {
            return null;
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({
            products: this.props.Product,
            keyword: this.props.keyword,
        });
    }

    

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

    style = {
        color: "black",
        textDecoration: "none",
    };

    render() {
        var { products, keyword } = this.state;
        if (keyword) {
            products = products.filter((product) => {
                if (
                    product.name
                        .toLowerCase()
                        .indexOf(keyword.toLowerCase()) !== -1
                ) {
                    return product;
                } else if (
                    product.brand
                        .toLowerCase()
                        .indexOf(keyword.toLowerCase()) !== -1
                ) {
                    return product;
                }
                return null;
            });
        }

        var price = "";
        var product_list = products.map((product, index) => {
            price = this.numberWithCommas(product.price);
            return (
                <div
                    key={index}
                    className="col-xs-12 col-sm-6 col-md-4 col-xl-4 mt-3"
                    style={this.style}
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

export default ProductFilter;
