import React, { Component } from "react";
import axios from "axios";

class ProductDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            id: '',
        };
    }

    getInfor= async(id)=>{
        let res = await axios.get("http://127.0.0.1:8000/api/product/" + id + "/",)
        let data = res.data;
        let description = data.description;
        this.setState({
            data: description,
        })
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        var str = window.location.href;
        str = str.split("/");
        var id = str[4];
        this.getInfor(id);
    }
    render(){

        return(<div className="ml-2 mt-5 mr-2" dangerouslySetInnerHTML={{__html: this.state.data}}></div>);
    }
        

}

export default ProductDetail;