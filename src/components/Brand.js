import React, { Component } from "react";
import { Link } from "react-router-dom";

class Brand extends Component {
    mystyle = {
        cursor: 'pointer',
    };
    
    render() {
        let brands = this.props.brands();
       
        let brand_list = brands.map((brand, index)=>{
            return(
                <Link to={`/brand/${brand}`} className="dropdown-item" key={index} style={this.mystyle} onClick= {()=> this.props.onFilter(brand)}>
                    {brand}
                </Link>
            )
        })
        return (
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {brand_list}
            </div>
        );
    }
}

export default Brand;
