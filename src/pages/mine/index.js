import React,{Component} from 'react'
import './mine.scss'
import { Icon } from 'antd';

class Mine extends Component{
    constructor(){
        super();

        this.state = {
            toplist:[
                {
                    num:0,
                    title:'积分'
                },
                {
                    num:0,
                    title:'优惠卷'
                },
                {
                    num:0,
                    title:'收藏'
                },
                {
                    num:0,
                    title:'浏览历史'
                },
            ],
            log:require('./img/not-login.png'),
            bottomlist:[
                {
                    icon:'shopping-cart',
                    title:'购物车'
                },
                {
                    icon:'read',
                    title:'常用旅客'
                },
                {
                    icon:'tags',
                    title:'消息'
                },
                {
                    icon:'frown',
                    title:'在线客服'
                },
                {
                    icon:'like',
                    title:'意见反馈'
                },
                {
                    icon:'hdd',
                    title:'福利中心'
                },
                {
                    icon:'setting',
                    title:'设置'
                },
            ]
        }
    }
    render(){
        let {toplist,log,bottomlist} = this.state
        return (
            <div className="mine">
                <div style={{padding:'0.6rem 0.38rem',fontSize:'0.35rem',color:'#363636',fontWeight:'700'}}>
                    <img src={log} alt="not-login" style={{width:'1.22rem'}}/>
                    <span style={{marginLeft:'0.5rem'}}>登录</span>/<span>注册</span>
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    {
                        toplist.map(item=>(
                            <figure style={{width:"21%",textAlign:'center',fontSize:'0.24rem'}} key={item.title}>
                                <span style={{color:'#0090F2',fontSize:'0.3rem',fontWeight:'bolder'}}>{item.num}</span>
                                <figcaption style={{marginTop:'0.2rem',fontSize:'0.22rem',color:'#767676'}}>{item.title}</figcaption>
                            </figure>            
                        ))
                    }
                </div>
                <div style={{height: '10px',background: '#eee'}}></div>
                
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    {
                        bottomlist.map(item=>(
                            <figure style={{width:"25%",textAlign:'center',fontSize:'0.4rem',paddingTop:'0.3rem'}} key={item.title}>
                                <Icon type={item.icon} />
                                <figcaption style={{marginTop:'0.2rem',fontSize:'0.22rem',color:'#767676'}}>{item.title}</figcaption>
                            </figure>            
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Mine;