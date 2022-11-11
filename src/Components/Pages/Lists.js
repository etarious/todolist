import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';
import ListItem from '../ListItem';
import Footer from '../Layouts/Footer';
import { Consumer } from '../../listContext';

class Lists extends React.Component {
    render () {
        return(
            <Consumer>
                {value => {
                    const { lists } = value;

                    let listsDetails;
                    let unCheckedLists = [];
                    
            
                    if (lists.length !== 0 && typeof lists === "object") {
                        for (let i = 0; i < lists.length; i++) {
                            const list = lists[i];
                            
                            if (list.checked === false) {
                                unCheckedLists.push(list);
                            }
                        }
                    } else {
                        listsDetails = <ListItem 
                            title="Add a new task"
                            details="Click the 'Add new' button to add a new task."
                            time={<Link className='button is-success is-light is-small' to={`/add`} > Add new </Link>}
                        />
                    }
            
                    if (unCheckedLists.length > 0) {
                        listsDetails = <div>
                            {unCheckedLists.map(unCheckedList => (
                                <ListItem key={unCheckedList.id} id={unCheckedList.id} title={unCheckedList.title} details={unCheckedList.details} time={unCheckedList.time.toLocaleTimeString()} edit={<Link to={`/edit`} className='button is-link is-light is-small'><i className='fas fa-pen'></i> Edit</Link>} />
                            ))}
                        </div>
                    } else {
                        listsDetails = <ListItem 
                            title="Add a new task"
                            details="Click the 'Add Task' button to add a new task."
                            time={<Link className='button is-success is-light is-small' to={`/add`} > Add Task </Link>}
                        />
                    }
        
                    return (
                        <>
                            <Navbar />
                            <div className='lists'>
                                <h3 className='title has-text-danger'>TO DO LISTS</h3>
                                <hr></hr>
                                {listsDetails}
                            </div>
                            <Footer />
                        </>
                    )
                }}
            </Consumer>
        )
    }
}

export default Lists;