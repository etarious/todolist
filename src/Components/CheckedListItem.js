import React from'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';

class CheckedListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetail: false
        };

        this.onShowClick = this.onShowClick.bind(this);
        // this.onUncheckClick = this.onCheckClick.bind(this);
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

        this.setState({
            showDetail: !this.state.showDetail
        });
    }

    render () {
        let showDetail = this.state.showDetail
        let detail;

        if (showDetail) {
            detail = <div className='details'>
                        <hr />
                        <p className="has-text-grey">{this.props.details}</p>
                        <div className='sideInfo'>
                            <small className='has-text-info'><i>{this.props.time}</i></small>
                        </div>
                    </div>
        } else {
            detail = null
        }

        return (
            <div className='listItem card'>
                <span className='subtitle'><strong>{this.props.title}</strong></span>
                <span className='icons'>
                    <i className='icons-item fas fa-sort-down' onClick={this.onShowClick} ></i>
                </span>
                {detail}
            </div>
        )
    }
}

CheckedListItem.defaultProps = {
    title: "Task",
    details: "More details",
    time: "",
    id: ""
};

CheckedListItem.propTypes = {
    item: PropTypes.object,
    deleteClickHandler: PropTypes.func
};

export default CheckedListItem;