import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_GOODS_QTY,CHANGE_SHOW} from './cartAction';

let initState = {
    goodslist:[],
    show:"block"
}

let reducer = (state=initState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                goodslist:[action.payload,...state.goodslist]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.id!==action.payload)
            }
        case CHANGE_GOODS_QTY:
            let goodslist = state.goodslist.map(item=>{
                if(item.id===action.payload.id){
                    item.qty = action.payload.qty
                }
                return item;
            })
            return {
                ...state,
                goodslist
            }
        case CHANGE_SHOW:
        return {
            ...state,
            show : action.payload
            }
        default:
            return state;
    }
}

export default reducer