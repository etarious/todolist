import React from 'react';
import Footer from '../Layouts/Footer';
import { Link } from 'react-router-dom';
import { Consumer } from '../../listContext';
import TextInputGroup from "../Layouts/TextInputGroup";
import { v4 as uuid } from 'uuid';

class Edit extends React.Component {
    state = {
        title: "",
        details: "",
        time: new Date(),
        checked: false,
        errors: {}
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        // console.log(this.state);
        const { title, details, time, checked } = this.state;

        // Check for errors...
        if(title.trim() === ""){
            this.setState({errors: {title: "Title is required"}});
            return;
        }
        if(details.trim()=== ""){
            this.setState({errors: {details: "Details is required"}});
            return;
        }

        const newItem = {
            id: uuid(),
            title: title.trim(),
            details: details.trim(),
            time,
            checked
        }

        dispatch({ type: "ADD_ITEM", payload: newItem });
        alert("Item added Successfully!");

        this.setState({
            title: "",
            details: "",
            time: new Date(),
            checked: false,
            errors: {}
        })
    }

    render () {
        const { title, details, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <>
                            <Link to={`/lists`} className="button is-success is-light" >Back to lists</Link>
                            <div className='form'>
                                <h3 className='title has-text-danger'>EDIT THIS TASK</h3>
                                <hr></hr>
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup elem="input" id="title" label='Title' onChange={this.onChange} value={title} name="title" type="text" placeholder="Title of your Task..." error={errors.title} />
                                    <TextInputGroup elem="textarea" id="details" onChange={this.onChange} value={details} name="details" placeholder="Detailed descriptions of the titled task..." error={errors.details} />
                                    <TextInputGroup type="submit" value="Edit Task"/> 
                                </form>
                            </div>
                            <Footer />
                        </>
                    )
                }}
            </Consumer>
        )
    }
}

export default Edit;