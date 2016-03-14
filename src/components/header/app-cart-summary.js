import React from 'react';
import StoreWatchMixin from '../../mixins/store-watch-mixin';
import AppStore from '../../stores/app-stores';
import {Link} from 'react-router';

const CartSummary = (props) => {
    console.log('Cart Summary: ', props);
    return (
        <div style={{paddingTop: 15}}>
            <Link to="/cart" className="btn btn-success">
                {`Cart Items: ${props.qty} / $${props.total}`}
            </Link>
        </div>
    )   
}

export default StoreWatchMixin(CartSummary, AppStore.getCartTotals);