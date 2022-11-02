import React from 'react'
import MainLogo from './MainLogo/MainLogo';
import Weather from './Weather/Weather';
import Geo from './Geo/Geo';
import SearchString from './SearchString/SearchString';

const Main: React.FC = (): JSX.Element => {
    return (
        <main>
            <header>
                <MainLogo />
                <Weather />
                <Geo />
            </header>
            <SearchString />
        </main>
    )
}

export default Main