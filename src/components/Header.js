import React, { Component } from "react";
import Search from "./Search";
import Brand from "./Brand";
import { NavLink } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src="/v-shop-logo.png"
                        width={50}
                        height={30}
                        className="d-inline-block align-top"
                        alt="true"
                    />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">
                                Trang chủ
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="home"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sản phẩm
                            </a>
                            <Brand
                                brands={this.props.brands}
                                onFilter={this.props.onSearch}
                            />
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gio-hang">
                                Giỏ hàng
                            </NavLink>
                        </li>
                    </ul>
                    <Search
                        onSearch={this.props.onSearch}
                    />
                </div>
            </nav>
        );
    }
}
export default Header;
