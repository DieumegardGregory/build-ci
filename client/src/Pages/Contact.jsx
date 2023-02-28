import React from 'react';

const Contact = () => {
    return (
        <form>
            <label htmlFor="name">Your name:</label><br />
            <input type ="text" />
            <button type ="submit">Send</button>
        </form>
    );
};

export default Contact;