import React from 'react';
import s from './RightMenu.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const RightMenu = (props) => {
    return (
        <div className={s.rightMenu}>
            <div className={s.menu__items + " " + s.cart}>
                <Link to="/cart">
                    <div className={s.item__image}>
                        <FontAwesomeIcon icon="shopping-cart"/>
                    </div>
                    <div className={s.item__amount}>
                        <span>{props.cart.amount}</span>
                    </div>
                </Link>
            </div>
            <div className={s.menu__items + " " + s.compares}>
                <div className={s.item__image}>
                    <FontAwesomeIcon icon="chart-bar"/>
                </div>
                <div className={s.item__amount}>
                    <span>0</span>
                </div>
            </div>
            <div className={s.menu__items + " " + s.account}>
                <div className={s.item__image}>
                    <FontAwesomeIcon icon="user"/>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    cart: state.cart
});


export default compose(
    connect(mapStateToProps, {}),
)(RightMenu);