import React from 'react';
import './ContactFilter.scss'


const ContactFilter = (props) => {
    return (
        <div className="filter">
            <input  type="text" placeholder="Search" onInput={props.onFilter} />
        </div>
    )
}
export default ContactFilter;
