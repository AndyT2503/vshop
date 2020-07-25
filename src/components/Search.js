import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
        };
    }

    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name]: value,
        })
    }

    onSearch = ()=>{    
        this.props.onSearch(this.state.keyword);
        this.setState({
            keyword: ''
        });
    }
    

    render() {
        var {keyword} = this.state;
        return (
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        name="keyword"
                        value = {keyword}
                        onChange = {this.onChange}
                    />
                    <NavLink to={`/search?keyword=${keyword}`}
                        className="btn btn-outline-success my-2 my-sm-0"
                        onClick={this.onSearch}
                    >
                        Search
                    </NavLink>
                </form>
            </div>
        );
    }
}

export default Search;
