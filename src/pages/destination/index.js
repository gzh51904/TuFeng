import React,{Component} from 'react'
import { Carousel,Input,Icon,Card } from 'antd';
import './destination.scss'
const { Meta } = Card;
function onChange(a, b, c) {
    console.log(a, b, c);
  }
class Destination extends Component{
    constructor(){
        super();

        this.state = {
            mainImg:require("./img/美国2.jpg"),
        }
    }
    render(){
        return(
        <div style={{marginBottom:'1.2rem'}}>
        {/* {header} */}
            <div className="headerBox">
                <img src={this.state.mainImg} alt="黄石"/>
                <Icon type="search" style={{fontSize:'0.5rem',color:'#fff',transform:'rotateY(180deg)',margin:'0.16rem 0 0 0.1rem'}} />
                <div className="city-container">
                    <h1>美国</h1>
                    <span className="tag ng-binding">黄石公园季</span>
                </div>
            </div>
        {/* {{content}} */}
            <div className="contentBox">
                <div className="product-types">
                    <h2>产品分类</h2>
                    
                </div>
            </div>
        </div>
        )
    }

}


// Destination = connect((state)=>{
//     return {
//         goodslist:state.goodslist,
//         totalPrice:state.goodslist.reduce((prev,item)=>prev+item.goods_promotion_price*item.qty,0)
//     }
// },(dispatch)=>{
//     // return {
//     //     addAction(goods){
//     //         dispatch(addAction(goods))
//     //     },
//     //     removeAction(id){
//     //         dispatch(removeAction(id))
//     //     },
//     //     changeQtyAction({id,qty}){
//     //         dispatch(changeQtyAction({id,qty}))
//     //     }
//     // }

//     // 下面的代码，等效于上面的代码
//     return bindActionCreators(ActionCreator,dispatch)
// })(Destination)

export default Destination;