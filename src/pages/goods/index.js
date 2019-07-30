import React, { Component } from 'react';
import './goods.scss';
import { Carousel,Input,Icon,Card } from 'antd';
import store from "../../store/index";
import {chanegeshow} from "../../store/cartAction"
import {connect} from 'react-redux';
import {addAction,changeQtyAction} from '../../store/cartAction.js';

class Goods extends Component {
    constructor() {
        super();

        this.state = {
            info: {},
            recommed: []
        }
    }
    async componentWillMount() {
        // let { id } = this.props.match.params;
        // let { data: { datas } } = await api.get('/index.php', {
        //     params: {
        //         act: 'goods',
        //         op: 'goods_detail',
        //         goods_id: id
        //     }
        // });

        // console.log('data:', datas);
        
        // this.setState({
        //     info: {
        //         ...datas.goods_info,
        //         imgurl: datas.goods_image,
        //     },
        //     recommed: datas.goods_commend_list
        // })


        // store.subscribe(()=>{
        //     console.log('subscribe:',store.getState())
        // })
    }
    gotocart(){
        this.props.history.push('/cart')

    }
    goback(){
        window.history.back()
    }
    componentWillMount(){
        this.props.chanegeshow('none')
    }
    componentWillUnmount(){      
        this.props.chanegeshow('block')
    }
    render() {
        let {id,img,content,price,ori} = this.props.location.query;

        let { info,recommed } = this.state;
        let {add2cart,changeQty,goodslist} = this.props;
        console.log('Goods',goodslist)
        return ( 
            <div>
                {/* {header} */}
                <div className="headerBox">
                    <div className="header">
                        <Icon type="left" style={{ fontSize: '24px' }} onClick={this.goback.bind(this)} />
                        <h1>详情</h1>
                        <Icon type="shopping-cart" style={{ fontSize: '24px' }} onClick={this.gotocart.bind(this)} />

                    </div>
                </div>
                {/*{message}*/}
                <div className="Msg">
                    <div>
                        <img src={img} alt="" style={{width:'100%'}}/>
                    </div>
                    <div className="price">
                        {price+".00"}
                        <span>起</span>
                    </div>
                    <div className="content">
                        {content}
                    </div>
                </div>
                {/*{footer}*/}
                <div className="footer">
                    <div className="like">
                        <div className="likefont"><Icon type="heart" /></div>
                        <div>收藏</div>
                    </div>
                    <div className="talk">
                        <div className="talkfont"><Icon type="team" /></div>
                        <div>咨询</div>
                    </div>
                    <div className="add2cart" onClick={()=>{
                    // store.dispatch({type:'add_to_cart',payload:{id:info.goods_id,name:info.goods_name,price:info.goods_promotion_price}})
                    // dispatch({type:'add_to_cart',payload:{id:info.goods_id,name:info.goods_name,price:info.goods_promotion_price}})
                    // 判断购物车中是否已经存在当前商品
                    let current = goodslist.filter(item=>item.id===id)[0];
                    if(!current){
                        add2cart({
                            id:id,
                            name:content,
                            price:price,
                            imgurl:img,
                            qty:1
                        })
                    }else{

                        changeQty({id:id,qty:current.qty+1})
                    }
                    
                }}>加入购物车</div>
                    <div className="buynow">
                        <div className="buynowtop">立即订购</div>
                        <div className="buynowbottom">(2人起订)</div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state,ownprops)=>{
    return {
        show:state.show,
        goodslist:state.goodslist
    }
}

let mapDispatchToProps = (dispatch,ownprops)=>{
    return {
        add2cart(goods){
            dispatch(addAction(goods))
        },
        changeQty({id,qty}){
            dispatch(changeQtyAction({id,qty}))
        },
        chanegeshow(goods){
            dispatch(chanegeshow(goods))
        }


    }
}

Goods = connect(mapStateToProps,mapDispatchToProps)(Goods);

export default Goods;