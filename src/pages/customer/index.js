import React,{Component} from 'react'
import './customer.scss';

class customer extends Component{
    constructor(){
        super();
        this.state={
            rabbit:require("./img/rabbit-happy.jpg"),
            gotologin: require("./img/goto-login-button.png")
           
            
        }
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.history.push('/login')
    }
        render(){
             return (
                <div className="no-login" >
                    <img src={this.state.rabbit}/>
                    <p>您还没有登录，请登录后查看订单</p>
                    <span onClick={this.handleClick} className="goto-login" style={{backgroundImage:'url('+this.state.gotologin+')'}}>登录或注册</span>
                    <span >产品咨询</span>
                </div>
             )
        }
    }
export default customer;
