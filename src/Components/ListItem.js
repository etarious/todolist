import React from'react';
import PropTypes from 'prop-types';
import { Consumer } from "../listContext";

// import {Link} from 'react-router-dom';

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetail: false
        };

        this.onShowClick = this.onShowClick.bind(this);
        this.onCheckClick = this.onCheckClick.bind(this);
    }

    onShowClick(e){
        let eClass = e.target.classList;
        let result = eClass.toggle("fa-sort-down");

        if (!result) {
            eClass.toggle("fa-sort-up");
            eClass.toggle("fa-sort-down");
        } else {
            eClass.toggle("fa-sort-up");
            eClass.toggle("fa-sort-down");
        }

        // console.log(e);

        this.setState({
            showDetail: !this.state.showDetail
        });
    }

    onDeleteClick = (id, dispatch) => {
        dispatch({type: "DELETE_ITEM", payload: id});
    }

    onCheckClick (id, dispatch) {
        dispatch({type: "CHECK_ITEM", payload: id});
    }

    render () {

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    let showDetail = this.state.showDetail
                    let detail;

                    if (showDetail) {
                        detail = <div className='details'>
                                    <hr />
                                    <p className="has-text-grey">{this.props.details}</p>
                                    <div className='sideInfo'>
                                        <small className='has-text-info'><i>{this.props.time}</i></small>
                                        <small>
                                            {this.props.edit}
                                            {/* <Link to={`/edit`} className='button is-link is-light is-small'><i className='fas fa-pen'></i> Edit</Link> */}
                                            {/* {this.props.deleteClickHandler ? <Link to={`/edit`} className='button is-link is-light is-small'><i className='fas fa-pen'></i> Edit</Link> : null} */}
                                        </small>
                                    </div>
                                </div>
                    } else {
                        detail = null
                    }

                    return (
                        <div className='listItem card'>
                            <span className='subtitle'><strong>{this.props.title}</strong></span>
                            <span className='icons'>
                                <i className='icons-item fas fa-check has-text-success' onClick={this.onCheckClick.bind(this, this.props.id, dispatch)}></i>
                                <i className='icons-item fas fa-trash has-text-danger' onClick={this.onDeleteClick.bind(this, this.props.id, dispatch)} ></i>
                                <i className='icons-item fas fa-sort-down' onClick={this.onShowClick} ></i>
                            </span>
                            {detail}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

ListItem.defaultProps = {
    title: "Task",
    details: "More details",
    time: "",
    id: ""
};

ListItem.propTypes = {
    item: PropTypes.object,
    deleteClickHandler: PropTypes.func
};

export default ListItem;