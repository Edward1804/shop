import React from 'react';
import s from './Collections.module.css'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Cards from "./Cards/Cards";
import {compose} from "redux";
import {getProducts} from "../../redux/productReducer";

class Collections extends React.Component {

    componentDidMount() {
        this.props.getProducts(this.props.match.params.category)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.category != this.props.match.params.category) {
            this.props.getProducts(this.props.match.params.category)
        }
    }


    render() {
        debugger;
        if (this.props.products.isFetching) {
            let items = this.props.products.items;
            let cardsElements = items.map(item =>
                <Cards productName={item.name}
                       img={item.img}
                       id={item.id}
                       key={item.id}
                />);
            return <div className={s.collection}>
                {this.props.products.categoryRU}
                <div className={s.cards}>
                    {cardsElements}
                </div>
            </div>
        } else return <div>111</div>

    }
}


let mapStateToProps = (state) => ({
    products: state.products,
});

export default compose(
    connect(mapStateToProps, {getProducts}),
    withRouter,
)(Collections);