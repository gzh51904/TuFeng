import React, { Component } from 'react';

import { api } from '../../utils';

import {connect} from 'react-redux';
import {addAction} from '../../store/cartAction';

class Goods extends Component {
    constructor() {
        super();

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                goods
            </div>
        )
    }
}

let mapStateToProps = (state,ownprops)=>{
    return {

    }
}

let mapDispatchToProps = (dispatch,ownprops)=>{
    return {
        add2cart(goods){
            dispatch(addAction(goods))
        }
    }
}

Goods = connect(mapStateToProps,mapDispatchToProps)(Goods);

export default Goods;