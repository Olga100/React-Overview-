import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filterValue: null
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
    }

    render() {

        return (
            <div className="fieldInput">
                <button type="submit" className="submit" onClick={this.onSearchClick}>&#128270;</button>
                <input className="input" type="search" placeholder="Search by name"
                       value={this.state.filterValue} onChange={this.onInputChange} />
            </div>
        )
    }

    onInputChange(event) {
        this.setState({ filterValue: event.target.value });
    }

    onSearchClick() {
       this.props.onFilter(this.state.filterValue);
    }
}

Input.propTypes = {
    onFilter: PropTypes.func
};

export default Input;