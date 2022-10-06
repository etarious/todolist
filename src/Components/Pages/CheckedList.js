import React from 'react';
import { Link } from 'react-router-dom';
// import { ListItem } from 'react';
import Footer from '../Layouts/Footer';

class CheckedList extends React.Component{
    render () {
        return (
            <div>
                <Link to={`/lists`} className="button is-success is-light" >Back to lists</Link>
                <div className='lists'>
                <h3 className='title has-text-danger'>CHECKED LISTS</h3>
                <hr></hr>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CheckedList;