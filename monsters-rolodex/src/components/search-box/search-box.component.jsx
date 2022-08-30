import {Component} from 'react'

import './search-box.styles.css'

class SearchBox extends Component{

    render() {

        return (
            <input className={`search-box   ${this.props.className}`}
            type='search' 
            placeholder={this.props.placehholder} onChange={this.props.onSearchChangeHandler }
            />
        )
    }
}

export default SearchBox;