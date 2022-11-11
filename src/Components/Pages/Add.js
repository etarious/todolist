import React from 'react';
import Footer from '../Layouts/Footer';
import { Link } from 'react-router-dom';
import { Consumer } from '../../listContext';
import TextInputGroup from "../Layouts/TextInputGroup";
import { v4 as uuid } from 'uuid';

class Add extends React.Component {
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

    // closeModal = () => {
    //     let modal = document.getElementsByClassName("modal");
    //     console.log(modal);
        
    //     // let result = modal.toggle("is-active");

    //     // if (!result) {
    //     //     modal.toggle("fa-sort-up");
    //     //     modal.toggle("fa-sort-down");
    //     // } else {
    //     //     modal.toggle("fa-sort-up");
    //     //     modal.toggle("fa-sort-down");
    //     // }
    // }

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
                                <h3 className='title has-text-danger'>ADD A NEW ITEM</h3>
                                <hr></hr>
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup elem="input" id="title" label='Title' onChange={this.onChange} value={title} name="title" type="text" placeholder="Title of your Task..." error={errors.title} />
                                    <TextInputGroup elem="textarea" id="details" onChange={this.onChange} value={details} name="details" placeholder="Detailed descriptions of the titled task..." error={errors.details} />
                                    <TextInputGroup type="submit" value="Add Task"/> 
                                </form>
                                {/* <div className="modal is-active is-clipped">
                                    <div className='modal-background' onClick={this.closeModal()}></div>
                                    <div className="modal-content">
                                        <div className='box'>
                                            <p><i className='icons-item fas fa-check has-text-success'></i> Item added to the list</p>
                                        </div>
                                    </div>
                                    <button className="modal-close is-large" onClick={this.closeModal()} aria-label="close"></button>
                                </div> */}
                            </div>
                            <Footer />
                        </>
                    )
                }}
            </Consumer>
        )
    }
}

export default Add;