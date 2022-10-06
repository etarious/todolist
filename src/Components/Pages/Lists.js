import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';
import ListItem from '../ListItem';
import Footer from '../Layouts/Footer';

class Lists extends React.Component{
    constructor() {
        super();

        this.state = {
            lists: [
                {
                    id: 1,
                    title: "Pray",
                    details: "Go before the throne of grace and obtain mercy.",
                    time: new Date(),
                    checked: false
                },
                {
                    id: 2,
                    title: "Bath",
                    details: "Cleanliness is next to godliness.",
                    time: new Date(),
                    checked: false
                },
                {
                    id: 3,
                    title: "Prepare",
                    details: "Probably wear cloth, comb my hair, eat, an so on...",
                    time: new Date(),
                    checked: false
                }
            ]
        }
    }

    deleteItem = (id) => {
        const { lists } = this.state;

        let newLists = lists.filter(list => list.id !== id);

        this.setState({
            lists: newLists
        });
        console.log(lists);
    }

    itemChecked (id) {
        const { lists } = this.state;

        let newLists = [];

        for (let i = 0; i < lists.length; i++) {
            const list = lists[i];
            if (list.id === id) {
                list.checked = true;
            }
            newLists.push(list);
        }

        this.setState({
            lists: newLists
        });
    }

    render () {
        const { lists } = this.state

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
                    <ListItem key={unCheckedList.id} title={unCheckedList.title} details={unCheckedList.details} time={unCheckedList.time.toLocaleTimeString()} deleteClickHandler={this.deleteItem.bind(this, unCheckedList.id)} checkClickHandler={this.itemChecked.bind(this, unCheckedList.id)} />
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
            <div>
                <Navbar />
                <div className='lists'>
                    <h3 className='title has-text-danger'>TO DO LISTS</h3>
                    <hr></hr>
                    {listsDetails}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Lists;