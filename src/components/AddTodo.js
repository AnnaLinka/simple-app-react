import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <form 
                onSubmit={this.onSubmit}
                style={{display: 'flex'}}
            >
               <input 
                    type="text" 
                    name="title"
                    placeholder="Add to do..."
                    style={{flex: '10', padding: '10'}}
                    value={this.state.title}
                    onChange={this.onChange}
               />
               <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
               /> 
            </form>
        )
    }
}

AddTodo.propTypes = {
    addItem: PropTypes.func.isRequired
}

export default AddTodo;
 