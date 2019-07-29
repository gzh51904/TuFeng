import React, { Component } from 'react';
import './goods.scss';
import { Carousel,Input,Icon,Card } from 'antd';
import store from "../../store/index";
import {chanegeshow} from "../../store/cartAction"
import {connect} from 'react-redux'

class Goods extends Component {
    constructor() {
        super();

        this.state = {
            
        }
    }
    gotocart(){
        this.props.history.push('/cart')

    }
    goback(){
        window.history.back()
    }
    componentWillMount(){
        store.dispatch(chanegeshow('none'))
    }
    componentWillUnmount(){
        store.dispatch(chanegeshow('block'))
    }
    render() {
        let {img,content,price,ori} = this.props.location.query;
        
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
                    <div className="add2cart">加入购物车</div>
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
        show:state.show
    }
}

let mapDispatchToProps = (dispatch,ownprops)=>{
    return {
        
    }
}

Goods = connect(mapStateToProps,mapDispatchToProps)(Goods);

export default Goods;