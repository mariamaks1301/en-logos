import React, {useContext} from 'react';
import Begin from './Begin/Begin';
import MenuList from '../../Components/MenuList/MenuList';
import FilterCold from '../../Components/FilterCold/FilterCold';
import FilterHot from '../../Components/FilterHot/FilterHot';
import FilterMeat from '../../Components/FilterMeat/FilterMeat';
import About from './About/About';
import Map from './Map/Map';
import { CustomContext } from '../../utils/Context';



const Home = () => {
    const {burger, setBurger} = useContext(CustomContext);


    return (
        <main className='main'>
            <Begin/>
            <MenuList/>
            <FilterCold/>
            <FilterHot/>
            <FilterMeat/>
            <About/>
            <Map/>

        </main>
    );
};

export default Home;