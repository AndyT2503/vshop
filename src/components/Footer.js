import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    style = {
        color: "white",
        textDecoration: "none",
    };

    render() {
        return (
            <div
                className="page-footer font-small bg-dark pt-4 mb-0"
                style={this.style}
            >
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-10 order-md-1 order-2">
                        <p className="text-center text-md-left">
                            © 2020 Copyright:
                            <strong> V-shop.com</strong>
                        </p>
                    </div>
                    <div className="text-center text-md-right col-md-5 col-lg-2 order-md-2 order-1">
                        <ul className="list-unstyled list-inline">
                            <a
                                className="list-inline-item"
                                href="https://www.facebook.com/profile.php?id=100005495376057"
                                style={this.style}
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a
                                className="list-inline-item"
                                href="https://github.com/AndyT2503"
                                style={this.style}
                            >
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a
                                className="list-inline-item"
                                href="https://www.youtube.com/channel/UCfTv_EEnTSwQ1bJI3kYX3UA"
                                style={this.style}
                            >
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
