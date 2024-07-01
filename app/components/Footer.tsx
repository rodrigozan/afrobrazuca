import React from 'react';

import FormattedDate from './utilities/FormattedDate';


export default function Footer() {
    const date = new Date();
    
    return (
        <footer className='text-center text-white bg-black p-4'>
            <p>© Rod Lofi, <FormattedDate date={date} format="Year" /></p>
        </footer>
    );
}
