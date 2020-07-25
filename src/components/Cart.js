import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            total_product: new Map(),
        };
    }


    componentDidMount() {
        window.scrollTo(0, 0);

        var products = this.props.cart;
        var myMap = new Map();
        var productMap = new Map();
        products.forEach((product) => {
            var res = 0;
            products.forEach((p) => {
                if (p.name === product.name) {
                    res++;
                }
            });
            myMap.set(product.id, res);
        });

        this.setState({
            total_product: myMap,
        });

        products.forEach((product) => {
            productMap.set(product.id, product);
        });
        var productsX = [ ...productMap.values() ];
        
        this.setState({
            products: productsX
        });
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    

    onDelete = (event) => {
        var { products } = this.state;
        var target = event.target;
        var id = target.id;

        products.forEach((product, index) => {
            if (product.id == id) {
                products.splice(index, 1);
            }
        });
        this.setState({
            products: products,
        });
        return this.props.deleteCart(id);
    };

    render() {
        var { products, total_product } = this.state;
        var total = 0;
        var total_price = 0;
        var total_str = "";
        var price = "";
        var cart_detail = products.map((product, index) => {
            total_price =
                product.price * parseInt(total_product.get(product.id));
            total = total + total_price;
            price = this.numberWithCommas(total_price);
            total_str = this.numberWithCommas(total);
            return (
                <tr key={index}>
                    <th className="text-center" scope="row">
                        {index + 1}
                    </th>
                    <td className="text-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            width="50em"
                        />
                    </td>
                    <td className="text-center">{product.name}</td>
                    <td className="text-center">
                        <input
                            type="number"
                            size="2px"
                            id="amount"
                            value={total_product.get(product.id)}
                            min={1}
                            style={{width: "4em"}}
                            readOnly={true}
                        />
                    </td>
                    <td className="text-center">
                        <span>
                            {price}
                            <sup>₫</sup>
                        </span>
                    </td>
                    <td
                        className="text-center"
                        id={product.id}
                        onClick={this.onDelete}
                        style={{cursor: 'pointer'}}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h3>
                    <center>Giỏ hàng</center>
                </h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">
                                #
                            </th>
                            <th className="text-center" scope="col">
                                Sản phẩm
                            </th>
                            <th className="text-center" scope="col">
                                Tên sản phẩm
                            </th>
                            <th className="text-center" scope="col">
                                Số lượng
                            </th>
                            <th className="text-center" scope="col">
                                Giá tiền
                            </th>
                            <th className="text-center" scope="col">
                                Xóa
                            </th>
                        </tr>
                    </thead>
                    <tbody>{cart_detail}</tbody>
                    <tfoot>
                        <tr key="total">
                            <th className="text-center" colSpan="4">
                                Tổng tiền
                            </th>
                            <td className="text-center" colSpan="2">
                                {total_str}
                            </td>
                        </tr>
                        <tr key="note">
                            <th colSpan="6" className="text-center">
                                <textarea
                                    placeholder="Ghi chú"
                                    cols="30"
                                    rows="3"
                                    style={{width: "95%"}}
                                ></textarea>
                            </th>
                        </tr>
                    </tfoot>
                </table>
                <div style={{textAlign: "right"}} className="mb-2">
                    <a href="/" className="btn btn-danger">
                        Thanh toán
                    </a>
                </div>
            </div>
        );
    }
}

export default Cart;
