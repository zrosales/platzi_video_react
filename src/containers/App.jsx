import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitalState';
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'

const App = () => {
    //const [ videos, setVideos ] = useState([])
    const initialState = useInitialState(API);
    return initialState.length ===0 ? <h1>Loading</h1> : (
        <div className="App">
            <Header />
            <Search />
            {/* {videos.mylist.length !== undefined  &&  */}
            {initialState.mylist.length > 0 && 
                <Categories title="Mi lista">
                   <Carousel>
                        {initialState.trends.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}                                                            
                    </Carousel>
                </Categories>
                }
                <Categories title="Tendencias">
                    <Carousel>
                        {initialState.trends.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}                                                            
                    </Carousel>
                </Categories>

                <Categories title="Originale de platzi">
                <Carousel>
                        {initialState.trends.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}                                                            
                    </Carousel>
                </Categories>
            <Footer></Footer>
        </div>
    );
}

export default App;
