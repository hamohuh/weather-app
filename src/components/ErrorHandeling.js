import React from 'react';
import { Toast } from 'react-bootstrap'

/**
 * This functional component is responsible for showing error on a Toasr message
 * if there is a poroblem with the function fetching Data from the Api
 */
function ErrorHandeling(props) {

    const { resetError, errorMessage } = props;

    let finalMessage;
    if (errorMessage === 'Request failed with status code 400') {
        finalMessage = "Enter a City name"
    } else if (errorMessage === 'Network Error') {
        finalMessage = "Check your Internet connection."
    } else if (errorMessage === 'Request failed with status code 404') {
        finalMessage = "Enter a valid city Name."
    }

    // To handle Toast show and hide
    const [show, setShow] = React.useState(false);

    const reset = () => {
        resetError();
        setShow(false);
    }

    let error = props.errorMessage === '' ? '' :
        (<Toast onClose={reset} show={!show} delay={3000} autohide>
            <Toast.Header>
                <strong className="mr-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{finalMessage}</Toast.Body>
        </Toast>)

    return (
        <span className='error-message'>{error}</span>
    );
}

export default ErrorHandeling;