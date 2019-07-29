const express = require('express');

const Router = express.Router();
const {formatData} = require('../utils');
// const {mysql:query} = require('../db');

const {mongo:{find}} = require('../db');
// Router.get("/",async (req, res) => {
//     let data = await find('goods')
//     if(!data) return res.send(formatData({code:250,data}))

//     res.send(formatData({data}))
// })
//查询某条数据
Router.get("/:id",async (req, res) => { 

    let data = await find('goods',{id:req.params.id})
    console.log("req.params.id", req.params.id)
    console.log("data",data)
    if(!data) return res.send(formatData({code:250,data}))
    res.send(formatData({data}))
})

module.exports = Router;