import React, { Component } from 'react';
import './cart.scss';
import { Checkbox,Icon,Card } from 'antd';
import store from "../../store/index";
import {chanegeshow} from "../../store/cartAction"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ActionCreator,{removeAction,changeQtyAction} from '../../store/cartAction'
const CheckboxGroup = Checkbox.Group;

const plainOptions = [''];
const defaultCheckedList = [];

class Cart extends Component {
    constructor() {
        super();
    
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        }
    }
    // 全选框
    onChange = checkedList => {
        this.setState({
          checkedList,
          indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
          checkAll: checkedList.length === plainOptions.length,
        });
      };
    
      onCheckAllChange = e => {
        this.setState({
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
      };
    // 后退
    goback(){
        window.history.back()
    }
    //底部菜单none
    //推迟unmount执行
    componentWillMount(){
        setTimeout(()=>{
            this.props.chanegeshow('none')
        },100)
    }
    componentWillUnmount(){
        this.props.chanegeshow('block')
    }
    //渲染
    render(){
        let {goodslist} = this.props;
        return <div>
        {/* {header} */}
        <div className="headerBox">
            <div className="header">
                <Icon type="left" style={{ fontSize: '24px' }} onClick={this.goback.bind(this)} />
                <h1>购物车</h1>
                <div>编辑</div>
            </div>
        </div>
        {/* {content} */}
            <div className="content">
                <div>
                    {
                        goodslist.map(item=>(
                            <div className="contentitem" key={item.id}>
                                <div className="check"><CheckboxGroup
                                    options={plainOptions}
                                    value={this.state.checkedList}
                                    onChange={this.onChange}
                                /></div>
                                <div className="goodscontent">
                                    <div>
                                        <div><img src={item.imgurl }  className="itemimage"/></div>
                                        <div className="itemfont">{item.name}</div>
                                    </div>
                                    <p><span className="itemprice">{item.price}</span><span>起</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        {/*{footer}*/}
            <div className="footer" id="footer">
                    <div className="footerleft">
                        <Checkbox
                            indeterminate={this.state.indeterminate}
                            onChange={this.onCheckAllChange}
                            checked={this.state.checkAll}
                        >
                        全选
                        </Checkbox>
                    </div>
                    <div className="footerright">
                        <div className="addprice">
                            <span>合计 :</span>
                            <span id="prc">$111.22</span>
                        </div>
                        <div className="buynow">
                            立即订购
                        </div>

                    </div>
                </div>

    </div>
    }

}

Cart = connect((state)=>{
    return {
        goodslist:state.goodslist,
        show:state.show,
        totalPrice:state.goodslist.reduce((prev,item)=>prev+item.goods_promotion_price*item.qty,0)
    }
},(dispatch)=>{
    return {
        // addAction(goods){
        //     dispatch(addAction(goods))
        // },
        // removeAction(id){
        //     dispatch(removeAction(id))
        // },
        // changeQtyAction({id,qty}){
        //     dispatch(changeQtyAction({id,qty}))
        // },
        chanegeshow(goods){
            dispatch(chanegeshow(goods))
        }
    }
    
    // 下面的代码，等效于上面的代码
    // return bindActionCreators(ActionCreator,dispatch)
})(Cart)

export default Cart;