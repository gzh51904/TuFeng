import React,{Component} from 'react'
import { Carousel,Input,Icon,Card } from 'antd';
import './destination.scss'
const { Meta } = Card;

class Destination extends Component{
    constructor(){
        super();

        this.state = {
            mainImg:require("./img/美国2.jpg"),
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
                    offset:'-72px -72px',
                    title:'票务'
                },
                
                {
                    offset:'-216px 0',
                    title:'邮轮游'
                },
                {
                    offset:'-144px 0',
                    title:'定制旅行'
                },                   
            ],
            blueColor:0,
            hotcate:[
                {
                    img:require("./img/cate1.jpg"),
                    title:'黄石公园大美天地'
                },
                {
                    img:require("./img/cate2.jpg"),
                    title:'稀缺黄石小木屋'
                },
                {
                    img:require("./img/cate3.jpg"),
                    title:'网红大棱镜俯视点'
                },
                {
                    img:require("./img/cate4.jpg"),
                    title:'西雅图+黄石'
                }              
            ],
            bqlist:[
                {
                    img:require("./img/bq1.jpg"),
                    title:'羚羊峡谷'
                },
                {
                    img:require("./img/bq2.jpg"),
                    title:'无畏号航舰博物馆'
                },
                {
                    img:require("./img/bq3.jpg"),
                    title:'自由钟'
                },
                {
                    img:require("./img/bq4.jpg"),
                    title:'林肯纪念堂'
                }              
            ],
            juan1Img:require("./img/juan1.jpg"),
            gtlist:[
                {
                    img:require("./img/gt1.jpg"),
                    content:'【美国国家旅游局推荐】(7天)浪漫观景火车·海岸星光号:西雅图+旧金山·海岸星光号观景火车+伯尼瀑布+日晷桥+红木森林火车+西峡/南峡/羚羊峡谷+旧金山市区游',
                    price:'$468',
                    ori:'default'
                },
                {
                    img:require("./img/gt2.jpg"),
                    content:'<2天>【美国人文历史短途游】国会山庄深度步行游、费城双层观光巴士游览、乘首都游船饱览首都地标建筑、探索美国大学三巨头之一普林斯顿',
                    price:'$46',
                    ori:'原价:$53'
                },
                {
                    img:require("./img/gt3.jpg"),
                    content:'<7天>【玩转美元】纸币上的建筑游：独立宫+免费入内国会大厦+白宫+美国财政部+林肯纪念堂；纽约波士顿经典双城市区游；入住瀑布景区内酒店，纵览尼亚加拉大瀑布日夜景观，可代购美国境内往返优惠机票',
                    price:'¥246',
                    ori:'原价:$327'
                },
                {
                    img:require("./img/gt4.jpg"),
                    content:'<6天>【美国国家旅游局推荐】美中东音乐主题人文之旅：美中东部7大历史名城+观赏尼亚加拉大瀑布+原味阿米希人村落+蓝调之都芝加哥+古典音乐费城+世界摇滚之都克利夫兰朝圣',
                    price:'$436',
                    ori:'原价:$512'
                },
            ],
            wllist:[
                {
                    img:require("./img/wl1.jpg"),
                    content:'【电子票】美国自然历史博物馆(American Museum of Natural History)',
                    price:'$13',
                    ori:'default'
                },
                {
                    img:require("./img/wl2.jpg"),
                    content:'【西峡】美国大峡谷巴士一日游(酒店接送+西峡门票+胡佛水坝+直升机+游船+午餐)',
                    price:'$299',
                    ori:'default'
                },
                {
                    img:require("./img/wl3.jpg"),
                    content:'【西峡】美国大峡谷飞机一日游(酒店接送+西峡门票+胡佛水坝+直升机+午餐)',
                    price:'¥208',
                    ori:'default'
                },
                {
                    img:require("./img/wl4.jpg"),
                    content:'【途风高端-私享"豪"体验】洛杉矶空中飞行驾驶体验：美国联邦航空局授权, 专业教官1:1私家教授(可升级获取GoPro全程影像与飞行照片)',
                    price:'$148',
                    ori:'default'
                },
            ]
        }
    }
    componentDidMount(){
        let navs = this.refs.navs
        var oW,oLeft;
        // 绑定touchstart事件
        navs.addEventListener("touchstart", function(e) {
           
            // e.stopPropagation();
            
            var touches = e.touches[0];
            oW = touches.clientX - navs.offsetLeft;
            // //阻止页面的滑动默认事件
            // document.addEventListener("touchmove",(e)=>{
            //     e.preventDefault();
            // },false);
        },false);

        navs.addEventListener("touchmove", function(e) {
            // e.preventDefault();
            var touches = e.touches[0];
            oLeft = touches.clientX - oW;
            
            navs.style.left = oLeft + "px";

        },false);

        navs.addEventListener("touchend",()=>{
            console.log(oLeft)
            if(oLeft >= -300){
                navs.style.left = 0;
                this.setState({
                    blueColor:0
                })
            }else{
                navs.style.left = "-300px";
                this.setState({
                    blueColor:1
                })
            }
        },false);
    }

    render(){
        let {navlist,hotcate,bqlist,gtlist} = this.state;
        return(
        <div>
        {/* {header} */}
            <div className="headerBox">
                <img src={this.state.mainImg} alt="黄石"/>
                <div className="headcontainer">
                    <Icon type="search" style={{fontSize:'0.5rem',color:'#fff',margin:'0.16rem 0 0 0.1rem'}} />
                    <div className="city-container">
                        <h3>
                            美国
                            <Icon type="down-circle" style={{fontSize:'0.3rem',color:'#fff',margin:'0.16rem 0 0 0.1rem'}} />
                        </h3>
                        <span className="tag ng-binding">黄石公园季</span>
                    </div>
                </div>
            </div>
        {/* {{content}} */}
            <div className="contentBox">
                {/* 产品分类 */}
                <div className="product-types">
                    <h2>产品分类</h2>
                    <div style={{height:'1.3rem',overflow:'hidden',margin:'0.4rem 0.2rem 0',position:'relative'}}>
                        <div style={{height:'1.4rem',overflowX:'hidden',display:'flex',flexWrap:'nowrap',textAlign:'center',position:'absolute'}} ref="navs">
                            {
                                navlist.map(item=>(
                                    <figure style={{width:"24%",margin:'0 0.1rem 0.2rem 0',textAlign:'center'}} key={item.title}>
                                        <div style={{backgroundPosition:item.offset}} className="imgs"></div>
                                        <figcaption style={{marginTop:'-0.2rem',fontSize:'0.2rem',color:'#363636'}}>{item.title}</figcaption>
                                    </figure>            
                                ))
                            }
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',height:'0.3rem',alignItems:'center'}}>
                       <div style={{width:'0.2rem',height:'0.05rem',marginRight:'0.2rem'}} className={this.state.blueColor === 0?'blueColor':'cccColor'}></div>
                       <div style={{width:'0.2rem',height:'0.05rem'}} className={this.state.blueColor === 1?'blueColor':'cccColor'}></div>
                    </div>
                </div>
                        


                {/* 热门推荐 */}
                <h3 style={{margin:'0.4rem 0 0.25rem',fontSize:'0.27rem',color:'#363636',fontWeight: 'bolder'}}>热门目的地</h3>
                <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}} className="hotcate">
                    {
                        hotcate.map(item=>(
                             <Card
                                hoverable
                                style={{ width:'47%',margin:'0 0.1rem 0.2rem 0'}}
                                cover={<img src={item.img} alt={item.title} style={{height:'1.5rem'}}/>}
                                key={item.img}
                            >
                                <Meta title={item.title}/>
                            </Card>
                        ))
                    }                
                </div>

                {/* 必去景点 */}
                <h3 style={{margin:'0.4rem 0 0.25rem',fontSize:'0.27rem',color:'#363636',fontWeight: 'bolder'}}>必去景点</h3>
                <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',marginBottom:'0.2rem'}} className="bqlist">
                    {
                        bqlist.map(item=>(
                             <Card
                                hoverable
                                style={{ width:'24%'}}
                                cover={<img src={item.img} alt={item.title} style={{height:'1.5rem'}}/>}
                                key={item.img}
                            >
                                <Meta title={item.title}/>
                            </Card>
                        ))
                    }                
                </div>

                <img src={this.state.juan1Img} style={{width:'100%',borderRadius:'0.05rem'}} alt="优惠卷"/>
                
                {/* 跟团游销量榜 */}
                <h3 style={{margin:'0.4rem 0 0.25rem',fontSize:'0.27rem',color:'#363636',fontWeight: 'bolder'}}>跟团游销量榜</h3>
                <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}} className="gtlist">
                    {
                        gtlist.map(item=>(
                             <Card
                                hoverable
                                style={{ width:'48%',marginBottom:'0.3rem',boxShadow:'0 2px 10px #e8e0e0'}}
                                cover={<img src={item.img} alt={item.img} style={{height:'1.7rem'}}/>}
                                key={item.img}
                            >
                                <Meta title={item.content} description={
                                    <div>
                                        <del style={{fontSize:'0.2rem'}} className={item.ori === 'default'?'visibilityHidden':''}>{item.ori}</del>
                                        <div>{item.price}</div>
                                    </div>
                                }/>
                            </Card>
                        ))
                    }                
                </div>
                <div style={{border:'1px solid blue',padding:'0.1rem',textAlign:'center',color:'blue',borderBlock:'0.05rem',borderRadius:'0.1rem'}}>显示所有跟团旅游</div>

               {/* 当地玩乐销量榜 */}
               <h3 style={{margin:'0.4rem 0 0.25rem',fontSize:'0.27rem',color:'#363636',fontWeight: 'bolder'}}>当地玩乐销量榜</h3>
                <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}} className="gtlist">
                    {
                        gtlist.map(item=>(
                             <Card
                                hoverable
                                style={{ width:'48%',marginBottom:'0.3rem',boxShadow:'0 2px 10px #e8e0e0'}}
                                cover={<img src={item.img} alt={item.img} style={{height:'1.7rem'}}/>}
                                key={item.img}
                            >
                                <Meta title={item.content} description={
                                    <div>
                                        <del style={{fontSize:'0.2rem'}} className={item.ori === 'default'?'visibilityHidden':''}>{item.ori}</del>
                                        <div>{item.price}</div>
                                    </div>
                                }/>
                            </Card>
                        ))
                    }                
                </div>
                <div style={{border:'1px solid blue',padding:'0.1rem',textAlign:'center',color:'blue',marginBottom:'1.2rem',borderRadius:'0.1rem'}}>显示所有当地玩乐</div>
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