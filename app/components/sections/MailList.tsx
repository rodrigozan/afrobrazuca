import React from 'react';

import styles from '../../../styles/modules/MailList.module.scss'

const MailList: React.FC = () => {
    return (
        <section className={`section ${styles.MailList} p-4 bg-dark`}>
            <div className={`content`}>
            <p>Join my mailing list for the latest news</p>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Your best email" aria-label="Your best email" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Sign Up</button>
            </div>
            </div>
        </section>
    );
};

export default MailList;
