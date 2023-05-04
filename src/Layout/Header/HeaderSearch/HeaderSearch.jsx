import React from 'react';

const HeaderSearch = () => {
    return (
        <div className='header__search'>
            <span className='header__search-icon header__search-icon-location'>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.23914 9.39129C1.25354 5.15071 4.7029 1.72471 8.94348 1.73912C13.1841 1.75353 16.6101 5.20288 16.5957 9.44347V9.53042C16.5435 12.2869 15.0044 14.8348 13.1174 16.8261C12.0382 17.9467 10.8331 18.9388 9.52609 19.7826C9.1766 20.0849 8.6582 20.0849 8.3087 19.7826C6.3602 18.5143 4.65007 16.9131 3.25653 15.0522C2.01449 13.4294 1.3093 11.4597 1.23914 9.41738L1.23914 9.39129Z" stroke="#CFCFCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8.91741" cy="9.53912" r="2.46087" stroke="#CFCFCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
            <input className='header__search-field' type="text" placeholder='Enter shipping address' />
            <span className='header__search-icon header__search-icon-search'>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.76657" cy="9.7666" r="8.98856" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.0183 16.4851L19.5423 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
        </div>
    );
};

export default HeaderSearch;