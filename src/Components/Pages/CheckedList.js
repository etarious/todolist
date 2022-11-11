import React from 'react';
import { Link } from 'react-router-dom';
import CheckedListItem from '../CheckedListItem';
import Footer from '../Layouts/Footer';
import { Consumer } from '../../listContext';

class CheckedList extends React.Component{
    constructor(props){
        super(props);

        this.clearAllClick = this.clearAllClick.bind(this);
        // this.clear = document.getElementById("clear");
    }

    clearAllClick (dispatch) {
        // dispatch({type: "CLEAR_ALL"});
        console.log(dispatch);
        // let clear = document.getElementById("clear");
        console.log(this.clear);
    }

    render () {
        return(
            <Consumer>
            {value => {
                const { lists, dispatch } = value;

                let checkedItems = [];
                let checkedDetails;
                // let clear = document.getElementById("clear");

                if (lists.length !== 0 && typeof lists === "object") {
                    for (let i = 0; i < lists.length; i++) {
                        const list = lists[i];
                        
                        if (list.checked === false) {
                            checkedItems.push(list);
                        }
                    }
                } else {
                    checkedDetails = <CheckedListItem 
                        title="No checked task"
                        details="Click the 'See Lists' button to see your list of tasks."
                        time={<Link className='button is-success is-light is-small' to={`/lists`} > See Lists </Link>}
                    />
                }
        
                if (checkedItems.length > 0) {
                    checkedDetails = <div>
                        {checkedItems.map(checkedItem => (
                            <CheckedListItem key={checkedItem.id} id={checkedItem.id} title={checkedItem.title} details={checkedItem.details} time={checkedItem.time.toLocaleTimeString()} />
                        ))}
                    </div>
                } else {
                    checkedDetails = <CheckedListItem 
                        title="No checked task"
                        details="Click the 'See Lists' button to see your list of tasks."
                        time={<Link className='button is-success is-light is-small' to={`/lists`} > See Lists </Link>}
                    />
                }

                return (
                    <>
                        <Link to={`/lists`} className="button is-success is-light" >Back to lists</Link>
                        <div className='lists'>
                            <h3 className='title has-text-danger'>CHECKED LISTS</h3>
                            <hr></hr>
                            {checkedDetails}
                            <button className="button is-fullwidth button is-danger is-light has-text-danger" id='clear' onClick={console.log("Working")}><i className='icons-item fas fa-trash'></i> Clear List</button>
                        </div>
                        <Footer />
                    </>
                )
            }}
        </Consumer>
        )
    }
}

export default CheckedList;