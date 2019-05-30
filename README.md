![demo1](https://github.com/jinxqy/vue-car-plate/blob/master/static/9eead22f9fb2410eed3b1f4d56ff4cc.jpg)

![图片说明2](https://github.com/jinxqy/vue-car-plate/blob/master/static/1eab40a3c659931445bde7b2ff80105.jpg)
 
#安装
* (c)npm install car-plate --save

#注册组件
在main.js里添加：
`import carPlate from 'car-plate'`
`Vue.use(carPlate)`

#对应文件引入组件
* import carPlate from "@/components/carPlate";

#可传参数

* `<car-plate :getPlateNum="getNum" :showCarPlate="showCarPlate" :showLayer="showLayer"/>`

getPlateNum:获取用户输入的车牌号

showCarPlate: 是否显示车牌号输入控件 true为显示 false隐藏

showLayer: 是否显示遮罩层

##查看demo

##启动
* npm install
* npm run dev



