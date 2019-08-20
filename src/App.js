import React from 'react';
import s from './App.module.css'
import {Header} from "./components/Header/Header";
import {NavigationLeft} from "./components/NavigationLeft/NavigationLeft";
import {MainContent} from "./components/MainContent/MainContent";
import {NavigationTop} from "./components/NavigationTop/NavigationTop";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch, faPhone, faShoppingCart, faChartBar, faUser, faFolderOpen} from '@fortawesome/free-solid-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons
import {Route} from "react-router-dom";
import Collections from "./components/Collections/Collections";
import Prod from "./components/Product/PageInfo/Product";
import ProductContainer from "./components/Product/ProductContainer";
import RightMenu from "./components/rightMenu/RightMenu";
import Cart from "./components/Cart/Cart";

// import Product from "./components/Product/Product";

library.add(faSearch, faPhone, faShoppingCart, faChartBar, faUser, faFolderOpen)


const App = () => {
    return (
        <div>
            <div className={s.container}>
                <Header/>
            </div>
            <NavigationTop/>
            <div className={s.container}>
                <Route exact path='/'
                       render={() =>
                           <>
                               <NavigationLeft/>
                               <MainContent/>
                           </>
                       }/>
                <Route path="/collections/:category?"
                       render={() =>
                           <>
                               <NavigationLeft/>
                               <Collections />
                           </>
                       }/>
                <Route path="/product/:id?"
                       render={() =>
                           <>
                               <ProductContainer />
                           </>
                       }/>
                <Route path="/cart"
                       render={() =>
                           <>
                               <Cart />
                           </>
                       }/>
            </div>
            <RightMenu/>
        </div>
    );
}

export default App;
