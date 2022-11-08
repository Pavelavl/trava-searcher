import React from 'react'
import MainLogo from './MainLogo/MainLogo';
import Weather from './Weather/Weather';
import SearchString from './SearchString/SearchString';

const Main: React.FC = (): JSX.Element => {
    return (
        <main>
            <div className="container">
                <MainLogo />
                <Weather />
            </div>
            <SearchString />
        </main >
    )
}

export default Main