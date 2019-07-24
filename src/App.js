import React,{Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Home from './pages/home'
import Find from './pages/find'
import Cart from './pages/cart'
import Mine from './pages/mine'
import Goods from './pages/goods';
import Destination from './pages/destination';
import './App.css'

import {  Menu, Icon  } from 'antd';

import {connect} from 'react-redux'

class App extends Component{
  constructor(){
    super()
    this.state = {
      navs : [
        {
          name:'Home',
          path:'/home',
          icon:'home',
          title:'首页'
        },
        {
          name:'Destination',
          path:'/destination',
          icon:'environment',
          title:'目的地'
        },
        {
          name:'Find',
          path:'/find',
          icon:'compass',
          title:'发现'
        },
        {
          name:'Cart',
          path:'/cart',
          icon:'container',
          title:'订单'
        },
        {
          name:'Mine',
          path:'/mine',
          icon:'user',
          title:'我的'
        },
      ],

      current:'/home',
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    //重新高亮
    let cur = window.location.hash.slice(1).split('/')[1]
    this.setState({
      current:'/'+cur
    })
  }

  handleClick(data){
    this.setState({
      current:data.key
    })

    // 路由跳转
    // 获取点击的路由路径
    let currentRouter = this.state.navs.filter(item=>item.path===data.key)[0];
    this.props.history.push(currentRouter.path)
  }
  render(){
    let {navs} = this.state;
      return (
        <div className="App">  

            {/* 路由 */}
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/destination" component={Destination}></Route>
              <Route path="/find" component={Find}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/mine" component={Mine}></Route>
              <Route path="/goods/:id" component={Goods}></Route>
              <Redirect from="/" to="/home" exact />
            </Switch>

            {/* 菜单 */}
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu">
            {
              navs.map(item=>(
                <Menu.Item key={item.path}>
                    <Icon type={item.icon} style={{display:'block'}}/>
                    {item.title}
                </Menu.Item>
              ))
            }
            </Menu>

        </div>
      );
  }
}


App = withRouter(App)

App = connect((state)=>{
  return {
    goodslen:state.goodslist.length
  }
})(App)

export default App;
