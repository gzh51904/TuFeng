import React, { Component } from 'react'
import './reg.scss'
import {Icon} from 'antd'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom';
class Reg extends Component{
    constructor(){
        super();
        this.state={
           phone:'',
           pwd:'',
           reghave:false
        }  
    }

    chanagephone(e){
        this.setState({
            phone:e.target.value
        })
        }

   changepwd(e){
    this.setState({
       pwd:e.target.value
    },()=>{
        if(this.state.phone&&this.state.pwd){
            this.state.reghave = true
        }
    })
   }
    render(){
        return(
            
            <div id="sign">
                <div className="sign-bar">
                    <div className="bar-item bar-left">
                    <Icon type="left" />
                    </div> 
                    <div className="bar-item bar-center">注册</div> 
                    <div className="bar-item"></div>
                </div> 
                <div className="sign-form main">
                    <div className="form-item phone-code">
                        <span className="country">中国大陆</span> 
                        <span className="code">+86</span> 
                        <i className="iconfont icon-sign-code"></i>
                    </div> 
                    <div className="form-item has-icon">
                        <i className="form-item-icon iconfont icon-sign-user">
                            <Icon type="user" /></i> 
                        <input type="tel" value={this.state.phone} onChange={this.chanagephone.bind(this)} placeholder="输入手机号"/> 
                        
                    </div> 
                    <div className="form-item has-icon">
                        <i className="form-item-icon iconfont icon-sign-varify">
                        <Icon type="edit" />
                            </i> 
                        <input type="text" placeholder="短信验证码" className="varify_input"/> 
                        <div className="varify_btn">
                           
                        <button disabled="disabled" className="btn no-wrap btn-default">获取验证码</button>
                        </div>
                    </div> 
                    <div className="form-item has-icon">
                        <i className="form-item-icon iconfont icon-sign-pwd">
                        <Icon type="key" />
                            </i> 
                        <input type="text" value = {this.state.pwd} onChange={this.changepwd.bind(this)} placeholder="5-20位密码，包含字母和数字"/> 
                        {/* <i className="form-item-icon iconfont icon-sign-clear" style={{display: 'none'}}></i>  */}
                        <i className="form-item-icon iconfont icon-sign-show">
                        <Icon type="eye" />
                        </i>
                    </div> 
                    <div className="sign-submit-btn">
                        <button disabled="disabled" className={this.state.reghave?'btn-active':'btn-default'} 
                        
                        
                        >注册</button>
                    </div>
                </div> 
               
            </div>
        
        )
    }
}

export default Reg;