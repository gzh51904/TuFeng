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
                {
                    title:'佛罗里达州',
                    childcate:[
                        '佛罗里达'
                    ]
                },
                {
                    title:'夏威夷洲',
                    childcate:[
                        '夏威夷旅游',
                        
                    ]
                },
                {
                    title:'美国其他目的地',
                    childcate:[
                        '美国旅游Tips',
                        '境外旅游Tips',
                        '塞班岛旅游',
                        '迪斯尼乐园',
                        '哈佛大学',
                        '西沃德',
                        '卡特琳娜岛',
                        '圣乔治',
                        '黑山',
                        '加州迪士尼乐园',
                        '德克萨斯',
                    ]
                },
                {
                    title:'加拿大',
                    childcate:[
                        '温哥华',
                        '渥太华',
                        '多伦多',
                        '落基山',
                        '加拿大',
                        '魁北克',
                        '维多利亚',
                        '加拿大国家公园',
                        '加拿大特色旅游',
                        '尼亚加拉瀑布市',
                        '黄刀镇',
                        '尼亚加拉断崖',
                        '加拿大瀑布后之旅',
                    ]
                },
                {
                    title:'拉丁美洲',
                    childcate:[
                        '墨西哥',
                        '巴西',
                        '阿根廷',
                    ]
                },
                {
                    title:'欧洲',
                    childcate:[
                        '英国',
                        '法国',
                        '德国',
                        '比利时',
                        '奥地利',
                        '意大利',
                        '瑞士',
                        '匈牙利',
                        '卢森堡',
                        '荷兰',
                        '西班牙',
                        '芬兰',
                        '挪威',
                        '瑞典',
                        '波兰',
                        '土耳其',
                        '捷克',
                        '冰岛',
                        '希腊',
                        '巴黎',
                        '爱尔兰',
                        '爱沙尼亚',
                        '北爱尔兰',
                        '丹麦',
                        '法属留尼汪',
                        '梵蒂冈',
                        '斐济',
                        '列支敦士登',
                        '摩纳哥',
                        '葡萄牙',
                        '圣卢西亚岛',
                        '斯洛伐克',
                        '苏格兰',
                        '威尔士',
                    ]
                },
                {
                    title:'澳洲',
                    childcate:[
                        '悉尼',
                        '黄金海岸 ',
                        '大堡礁',
                        '墨尔本',
                        '凯恩斯',
                        '澳大利亚',
                        '堪培拉',
                        '霍巴特',
                        '阿德莱德',
                        '乌鲁鲁',
                        '珀斯',
                        
                    ]
                },
            ]
        }

    }

    render(){
        let {catelist} = this.state;
        return (<div>
            <h4 style={{textAlign:'center',fontWeight:'700',fontSize:'0.3rem',boxShadow: '0 1px 2px rgba(88,88,88,.1)',lineHeight:'0.8rem',marginBottom:'0'}}>发现</h4>

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