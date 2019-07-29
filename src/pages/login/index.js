import React, { Component } from 'react'
import './login.scss'
import {api} from '../../utils'
import { Icon} from 'antd';
import {NavLink,Route,Switch,Redirect} from 'react-router-dom';
class Login extends Component{
      constructor(){
          super();
          this.state ={
              have : false,
              user:'',
              pwd:'',
              phone:'',
              yanzheng:'',
              havephone:''
              
          }
      }
      changeuser(e){
        this.setState({
            user:e.target.value,
        })   
      }
      changepwd(e){
        this.setState({
            pwd:e.target.value
        },()=>{
            if(this.state.user && this.state.pwd){
                this.setState({have:true})
            }
        })   
      }
      changephone(e){
          this.setState({
              phone:e.target.value,
          })
      }
      changeyanzheng(e){
          this.setState({
              yanzheng:e.target.value
          },()=>{
              if(this.state.phone&&this.state.yanzheng){
                this.setState({
                    phonehave: true
                })
              }
          })
      }
      login(){
        let {user ,pwd} =this.state;
        // console.log(user,pwd);
        api.get('/login',{
            params:{
                username:user,
                pwd:pwd
            }
        }).then((res)=>{
            let {data ,headers} = res;
            if(data.code == 250){
                alert('用户名或密码错误！')
            }else if(data.code ===1000){
                localStorage.setItem('Authorization',data.data);
                alert('cg')
               
            }
        })
       

      }
      render(){
        let {url,path} = this.props.match;

          return(
                <div id="sign">
                    <div className="sign-bar">
                        <div className="bar-item bar-left">
                            <i className="iconfont icon-sign-back"><Icon type="left" /></i>
                        </div> 
                        <div className="bar-item bar-center">登录</div> 
                        <div className="bar-item"></div>
                    </div> 
                    <div className="signin-tab">    
                        <nav>
                               <NavLink className="tab-item" style={{width:"2rem"}} to={url+"/user"}>账号登录</NavLink>
                               <NavLink  className="tab-item" to={url+"/phone"}>手机登录</NavLink>
                        </nav>
                    </div> 
                    <div className="sign-form main">
                        
                         <Switch>
                            <Route path={path+"/user"} render={()=>{
                                return <div>
                                        <section className="account-signin" >
                                             <div className="form-item has-icon">
                                                 <i className="form-item-icon iconfont icon-sign-user">
                                                     <Icon type="user" /></i> 
                                                     <input type="text" value={this.state.user} 
                                                     placeholder="手机号/邮箱"onChange={this.changeuser.bind(this)}/> 
                                             </div> 
                                             <div className="form-item has-icon">
                                                <i className="form-item-icon iconfont icon-sign-pwd"><Icon type="key" /></i> 
                                                <input  type="password" placeholder="密码" value={this.state.pwd} 
                                                  onChange={this.changepwd.bind(this)}/> 
                                                          
                                                <i className="form-item-icon iconfont icon-sign-hide"><Icon type="eye" /></i>
                                             </div> 
                                             <div className="sign-submit-btn">
                                                 <button disabled={this.state.have?'':"xxx"} 
                                                 id="loginbtn" className={this.state.have?'btn-active':'btn-default'} 
                                                 onClick={this.login.bind(this)} >登录</button>
                                                </div> 
                                                 <div className="signin-other-option">
                                                    <a href="/signUp">注册账号</a> 
                                                    <a href="/password">忘记密码</a>
                                                 </div>
                                        </section>            
                                    </div>   
                            }}/>

                            <Route path={path+"/phone"} render={()=>{
                                return <div>
                                {
                                        <section className="phone-signin" >
                                        <div className="form-item phone-code">
                                            <span className="country">中国大陆</span> 
                                            <span className="code">+86</span> 
                                            <i className="iconfont icon-sign-code"></i>
                                        </div> 
                                        <div className="form-item has-icon">
                                             <Icon type="user" />
                                            <input type="tel" value={this.state.phone} onChange = {this.changephone.bind(this)} placeholder="输入手机号"/> 
                                           
                                        </div> 
                                        <div className="form-item has-icon">
                                              <Icon type="check" />
                                            <input type="text" value = {this.state.yanzheng} onChange = {this.changeyanzheng.bind(this)} placeholder="短信验证码" className="varify_input"/> 
                                            <div className="varify_btn">
                                                    <button disabled="disabled" className="btn no-wrap btn-default">获取验证码</button>
                                            </div>
                                        </div> 
                                        <div className="sign-submit-btn">
                                            <button disabled={this.state.phonehave?'':'123'} className={this.state.phonehave?'btn-active':'btn-default'}>登录</button>
                                        </div>
                                    </section>
                                  
                                }
                                </div>
                            }}/>   
                            <Redirect to={"login/user"} exact></Redirect>
                         </Switch>
                    </div> 
                    <div className="other-sign">
                        <div className="main">
                            <fieldset>
                                <legend>第三方账号登录</legend>
                            </fieldset> 
                            <div className="other-sign-list">
                                <a target="_self"  className="sign-qq"></a> 
                                <a target="_self"  className="sign-weibo"></a>
                            </div>
                        </div>
                    </div> 
                    <div className="sign-modal" style={{display:"none"}}>
                            <div className="sign-modal-bg"></div> 
                            <div className="varify-panel">
                                <div className="panel-head">请输入图中验证码</div> 
                                <div className="panel-content">
                                    <img src="/captcha?_t=1564111027132" className="varify-img"/> 
                                    <a className="change-img">看不清，换一个</a> 
                                    <div className="varify-code">
                                        <input type="text" placeholder="输入验证码"/>
                                    </div>
                                </div> 
                                <div className="panel-foot">
                                    <button className="panel-btn">取消</button> 
                                    <button disabled="disabled" className="panel-btn">确定</button>
                                </div>
                            </div>
                    </div> 
                    <div className="sign-modal" style={{display: "none"}}>
                            <div className="pre-panel">
                                <div className="panel-head">
                                    <span>请选择国际区号</span> 
                                    <span className="right-cancel">取消</span>
                                </div> 
                                <div className="panel-content">
                                    <div className="pre-list">
                                        <div className="list-item active">中国大陆 +86</div>
                                        <div className="list-item">美国 +1</div>
                                        <div className="list-item">中国台湾 +886</div>
                                        <div className="list-item">加拿大 +1</div>
                                        <div className="list-item">中国香港 +852</div>
                                        <div className="list-item">澳大利亚 +61</div>
                                        <div className="list-item">英国 +44</div>
                                        <div className="list-item">新加坡 +65</div>
                                        <div className="list-item">日本 +81</div>
                                        <div className="list-item">法国 +33</div>
                                        <div className="list-item">中国澳门 +853</div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div> 
              
          )
      }
}
export default Login;