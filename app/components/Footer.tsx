import React from 'react';

import FormattedDate from './utilities/FormattedDate';


export default function Footer() {
    const date = new Date();
    
    return (
        <footer className='section d-flex align-items-end justify-content-center text-white bg-black p-4'>
            <span>© Rod Lofi, <FormattedDate date={date} format="Year" /></span>
        </footer>
    );
}
