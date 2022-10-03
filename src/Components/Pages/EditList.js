import React from 'react';
import {Link} from 'react-router-dom';

class EditList extends React.Component {
    render () {
        return (
            <div>
                <h1>This is the edit page</h1>
                <Link to={`/list`} >Go to the lists</Link>
            </div>
        );
    }
}

export default EditList;