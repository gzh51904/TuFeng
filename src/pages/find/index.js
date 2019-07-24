import React,{Component} from 'react'
import { Tabs } from 'antd';
import './find.scss'

const { TabPane } = Tabs;


class Find extends Component{
    constructor(){
        super();

        this.state = {
            catelist:[
                {
                    title:'美国东海岸',
                    childcate:[
                        '纽约',
                        '华盛顿',
                        '费城',
                        '波士顿',
                        '迈阿密',
                        '芝加哥',
                        '奥兰多',
                        '尼亚加拉瀑布',
                        '休斯顿',
                        '亚特兰大',
                    ]
                },
                {
                    title:'美国西海岸',
                    childcate:[
                        '洛杉矶',
                        '黄石公园',
                        '旧金山',
                        '拉斯维加斯',
                        '大峡谷',
                        '圣地亚哥',
                        '优胜美地国家公园',
                        '环球影视城',
                        '主题乐园',
                        '丹佛',
                        '盐湖城',
                        '西雅图',
                        '总统山国家公园',
                        '阿拉斯加',
                        '西南巨环',
                    ]
                },
                
            ]
        }

    }

    render(){
        let {catelist} = this.state;
        return (<div>
            <h4 style={{textAlign:'center',fontWeight:'700',fontSize:'0.3rem',boxShadow: '0 1px 2px rgba(88,88,88,.1)',lineHeight:'0.8rem'}}>发现</h4>

            <Tabs defaultActiveKey="1" tabPosition="left" style={{height:'100%'}}>
                {
                    catelist.map((item,idx)=>(
                        <TabPane tab={item.title} key={item.title}>
                            {
                                item.childcate.map(ele=>(
                                    <span key={ele}>{ele}</span>
                                ))
                            }
                            
                        </TabPane>
                    ))
                }
                
            </Tabs>




        </div>)
    }
}
export default Find;