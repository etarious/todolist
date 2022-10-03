import { useRouteError, Link } from "react-router-dom";

import '../../CSS/ErrorPage.css';

function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <h1 className="title is-1 has-text-danger is-spaced">Opps...</h1>
            <p className="subtitle is-3 has-text-white">Sorry, an unexpected error has occured!</p>
            <p className="subtitle is-5 has-text-warning">
                <i>Page {error.statusText || error.message}</i>
            </p>
            <Link to={`/`} className="button is-success is-light" >Back to Home Page</Link>
        </div>
    )
}

export default ErrorPage