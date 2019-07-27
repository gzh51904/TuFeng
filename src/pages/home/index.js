import React,{Component} from 'react'
import { Carousel,Input,Icon,Card } from 'antd';
import './home.scss'
const { Meta } = Card;

class Home extends Component{
    constructor(){
        super();

        this.state = {
            imglist: [
                require("./img/1.jpg"),
                require("./img/2.jpg"),
                require("./img/3.jpg"),
                require("./img/4.jpg"),
                require("./img/5.jpg"),
                require("./img/6.jpg"),
                require("./img/7.jpg")
            ],
            navlist:[
                {
                    offset:'-144px -72px',
                    title:'途风精品'
                },
                {
                    offset:'0 -72px',
                    title:'多日游'
                },
                {
                    offset:'-72px 0',
                    title:'一日游'
                },
                {
                    offset:'-144px 0',
                    title:'定制旅行'
                },
                {
                    offset:'-216px 0',
                    title:'邮轮游'
                },
                {
                    offset:'-72px -72px',
                    title:'票务'
                },
                {
                    offset:'0 0',
                    title:'签证'
                },
                {
                    offset:'-216px -72px',
                    title:'接送'
                }               
            ],
            juanImg:require("./img/juan.jpg"),
            juan1Img:require("./img/juan1.jpg"),
            hotDestination:[
                {
                    img:require("./img/hot1.jpg"),
                    title:'纽约'
                },
                {
                    img:require("./img/hot2.png"),
                    title:'多伦多'
                },
                {
                    img:require("./img/hot3.png"),
                    title:'班芙公园'
                },
                {
                    img:require("./img/hot4.jpg"),
                    title:'新西兰'
                },
                {
                    img:require("./img/hot5.jpg"),
                    title:'黄石'
                },
                {
                    img:require("./img/hot6.jpg"),
                    title:'东欧四国'
                },
                {
                    img:require("./img/hot8.jpg"),
                    title:'夏威夷'
                },
                {
                    img:require("./img/hot9.jpg"),
                    title:'澳大利亚'
                },
            ],

            newList:[
                {   
                    id:"1",
                    img:require("./img/new1.jpg"),
                    content:'<3天>【埃塞俄比亚 拉利贝拉岩石教堂震撼之旅】堪称非洲奇迹的宏伟建筑+世界文化遗产+始建于公元12世纪的原始窑洞教堂',
                    price:'¥3517'
                },
                {
                    id:"2",
                    img:require("./img/new2.jpg"),
                    content:'【14人小团】红遍朋友圈，纽约网红一日游：天天发团！好莱坞大片拍摄地中央车站+纽约公共图书馆+缆车/轮渡全方位欣赏曼哈顿+超火网红打卡景点Dumbo艺术区+切尔西市场',
                    price:'¥931'
                },
            ]
        }

    }
    
    goto(id,img,content,price,ori){
        let {history} = this.props;

        let pathname = '/goods/'+id;console.log('id',id,pathname)

        history.push({
            pathname,
            query:{
                img,
                content,
                price,
                ori
            }
        })
    }
    render(){
        let {navlist,hotDestination,newList} = this.state;
        return (
            <div style={{marginBottom:'1.2rem'}}>
                {/* 搜索条 */}
                <div style={{position:'absolute',top:'0.4rem',zIndex:100,padding:'0 0.8rem 0 0.4rem',maxWidth:'640px',width:'100%',display:'flex'}}>
                    <Input
                        style={{padding:'0.1rem'}}
                        placeholder="城市、景点、产品、关键字"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)',fontSize:'0.3rem',marginLeft:'0.12rem'}} />}
                    />
                    <Icon type="phone" style={{fontSize:'0.35rem',color:'#fff',transform:'rotateY(180deg)',margin:'0.16rem 0 0 0.1rem'}} />
                </div>

                {/* 轮播图 */}
                <Carousel autoplay>
                    {
                        this.state.imglist.map((item,idx)=>(
                            <div key={idx}>
                                <img src={item} alt={idx} style={{width:'100%'}}/>
                            </div>
                        ))
                    }
                </Carousel>

                {/* navlist */}
                <div style={{height:'3.67rem',display:'flex',flexWrap:'wrap',justifyContent:'space-around',textAlign:'center',margin:'0.4rem 0.2rem 0'}}>
                    {
                        navlist.map(item=>(
                            <figure style={{width:"21%",margin:'0 0 0.2rem 0'}} key={item.title}>
                                <div style={{backgroundPosition:item.offset}} className="imgs"></div>
                                <figcaption style={{fontSize:'0.2rem',color:'#363636'}}>{item.title}</figcaption>
                            </figure>
                        ))
                    }
                </div>

                <img src={this.state.juanImg} style={{width:'100%',padding:'0 0.3rem',borderRadius:'0.35rem'}} alt="优惠卷"/>

                {/* 热门目的地 */}
                <h3 style={{paddingLeft:'0.3rem',margin:'0.4rem 0 0.25rem',fontSize:'0.27rem',color:'#363636',fontWeight: 'bolder'}}>热门目的地</h3>
                <div style={{display:'flex',padding:'0 0.3rem',overflow:'auto'}} className="hotDestination">
                    {
                        hotDestination.map(item=>(
                             <Card
                                hoverable
                                style={{ width:'30%',flexShrink:'0',marginRight:'0.1rem'}}
                                cover={<img src={item.img} alt={item.title} style={{height:'2.3rem'}}/>}
                                key={item.img}
                            >
                                <Meta title={item.title}/>
                            </Card>
                        ))
                    }                
                </div>
                
                <img src={this.state.juan1Img} style={{width:'100%',padding:'0.3rem 0.3rem 0',borderRadius:'0.35rem'}} alt="优惠卷"/>
                
                {/* 新品上线 */}
                <h3 style={{paddingLeft:'0.3rem',margin:'0.4rem 0 0.25rem',fontSize:'0.27rem',color:'#363636',fontWeight: 'bolder'}}>新品上线</h3>
                
                <div style={{display:'flex',padding:'0 0.3rem',justifyContent:'space-between'}} className="newlist">
                    {
                        newList.map(item=>(
                             <Card 
                                hoverable
                                style={{ width:'45%'}}
                                cover={<img src={item.img} alt={item.img} style={{height:'2.3rem'}}/>}
                                key={item.img}
                                onClick={this.goto.bind(this,item.id,item.img,
                                    item.content,
                                    item.price,
                                    item.ori)}
                            >
                                <Meta title={item.content} description={item.price}/>
                            </Card>
                        ))
                    }                
                </div>

            </div>
        )
    }
}

export default Home;