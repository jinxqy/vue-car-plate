
  // auth by jinx
  // 2018.03.16
<template>
  <div v-if="isShow">
    <div>
      <div class="plate-wrap">
        <!-- 头部车牌号 -->
        <div class="car_title">车牌号</div>
        <!-- 已输入信息 -->
        <div class="car_input">
          <ul class="clearfix ul_input">
            <li v-for="(item, index) in bindInput" :key="index" class="input_pp">
              <span :class="item.classStyle">{{ chooseKey[index] || "" }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 填写省级简称和车牌信息 -->
      <div class="provinces-wrap">
        <ul class="clearfix ul_pro">
          <li v-show="showFlag == 0" v-for="(item, index) in provinces" :key="index">
            <span @click="chooseProvince(item);">{{ provinces[index] }}</span>
          </li>
          <li v-show="showFlag == 1" v-for="(item, index) in keyNums" :key="index + 999">
            <span @click="chooseKeyNums(index);">{{ keyNums[index] }}</span>
          </li>
          <li class="li_close" @click="closePro();">
            <span>关闭</span>
          </li>
          <li class="li_clean" @click="cleanPro();">
            <span>清空</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="layer" v-if="showLayer"></div>
  </div>
</template>
<script>
export default {
  props: {
    //是否显示
    showCarPlate: {
      type: Boolean,
      default: false
    },
    //是否获取车牌号
    getPlateNum: {
      type: Function,
      default: new Function()
    },
    //是否显示遮罩层
    showLayer:{
      type: Boolean,
      default: false
    }
  },
  mounted(){
    //获取遮罩层的长和宽
    getLayerWH();
  },
  computed: {
    isShow() {
      return this.showCarPlate;
    }
  },
  data() {
    let _sf = this;
    return {
      provinces: [
        "京",
        "沪",
        "浙",
        "苏",
        "粤",
        "鲁",
        "晋",
        "冀",
        "豫",
        "川",
        "渝",
        "辽",
        "吉",
        "黑",
        "皖",
        "鄂",
        "津",
        "贵",
        "云",
        "桂",
        "琼",
        "青",
        "新",
        "藏",
        "蒙",
        "宁",
        "甘",
        "陕",
        "闽",
        "赣",
        "湘"
      ],
      keyNums: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
        "Del",
        "确定"
      ],
      bindInput: [
        {
          classStyle: "active"
        },
        {
          classStyle: ""
        },
        {
          classStyle: ""
        },
        {
          classStyle: ""
        },
        {
          classStyle: ""
        },
        {
          classStyle: ""
        },
        {
          classStyle: ""
        }
      ],
      currentIndex: 0,
      chooseKey: [],
      hasPro: "",
      showFlag: 0,
      MAX_INDEX: 6
    };
  },
  methods: {
    //获取车牌信息
    showNum() {
      let palteNum = this.chooseKey.join("");
      this.getPlateNum(palteNum);
    },
    //选择省级简称
    chooseProvince(item) {
      this.hasPro = "hasPro";
      this.chooseKey[0] = item;
      this.showFlag = 1;
      this.addStyle();
    },
    closePro() {
      this.isShow = false;
      this.showLayer = false;
      this.initStyle();
    },
    //当前样式更改
    //这里写的不太优雅，后面有空优化一下
    addStyle() {
      this.bindInput.forEach(ele => {
        ele.classStyle = "";
      });

      let styleIndex = 0;
      if (this.currentIndex >= this.MAX_INDEX) {
        styleIndex = this.MAX_INDEX;
      } else {
        styleIndex = this.currentIndex + 1;
      }
      this.bindInput[styleIndex].classStyle = "active";
    },
    //初始化样式
    initStyle() {
      this.bindInput.forEach(ele => {
        ele.classStyle = "";
      });
      this.bindInput[0].classStyle = "active";
    },
    //点击清楚按钮
    cleanPro() {
      this.chooseKey = [];
      this.currentIndex = 0;
      this.showFlag = 0;
      this.initStyle();
    },
    //点击按钮时间
    chooseKeyNums(index) {
      //点击清除时
      if (index == 37) {
        this.isShow = false;
        this.showNum();
        this.cleanPro();
      } else if (index == 36) {
        //点击删除
        this.chooseKey.pop();
        this.currentIndex--;
        this.addStyle();
      } else {
        this.currentIndex++;
        if (this.currentIndex > this.MAX_INDEX) {
          this.currentIndex = this.MAX_INDEX;
          this.chooseKey.pop();
        }
        this.chooseKey.push(this.keyNums[index]);
        this.addStyle();
      }
    }
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

.plate-wrap {
  width: calc(100% - 2rem);
  margin-left: 1rem;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #cccccc;
  box-shadow: 2px 2px 2px #888888;
  z-index: 999;
  position: relative;
}

.clearfix:after {
  content: ".";
  display: block;
  font-size: 0;
  height: 0;
  clear: both;
  visibility: hidden;
}

.car_title {
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid #cccccc;
}

.ul_pro {
  background-color: #ced3d9;
  text-align: center;
  padding: 4px 2px;
  font-size: 14px;
  position: fixed;
  bottom: 0;
  z-index: 99;
  li {
    float: left;
    width: 11.11%;
    padding: 2px;
  }
}

.ul_pro .li_close {
  float: right;
  width: 22.22%;
  span {
    background-color: #acb3bb;
  }
}

.ul_pro .li_clean {
  float: right;
  width: 22.22%;
}

.ul_pro li span {
  display: block;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #888888;
  /* max-width:48px; margin:0 auto; */
  line-height: 32px;
  padding-top: 2px;
}

.car_input {
  height: 5rem;
}

.ul_input {
  padding: 20px;
  margin: 0 auto;
}

.ul_input li .active {
  border: 1px solid #00beff;
  color: #00beff;
}

.ul_input li {
  float: left;
  width: 14%;
  padding: 2px;
  text-align: center;
}

.ul_input li span {
  display: block;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 30px;
  margin: 0 auto;
  height: 30px;
  line-height: 30px;
}

.ul_keybord {
  background-color: #ced3d9;
  text-align: center;
  padding: 4px 2px;
  font-size: 14px;
}

.ul_keybord li {
  float: left;
  width: 10%;
  padding: 2px;
  box-sizing: border-box;
}

.ul_keybord .ikey20 {
  margin-left: 5%;
}

.ul_keybord .li_w {
  width: 11.11%;
}

.ul_keybord .li_close {
  float: right;
  width: 22.22%;
}

.ul_keybord .li_close span {
  background-color: #acb3bb;
}

.ul_keybord .li_clean {
  float: right;
  width: 22.22%;
}

.ul_keybord li span {
  display: block;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #888888;
  line-height: 32px;
  padding-top: 2px;
}

.ul_keybord li span:active {
  background-color: #4da9f2;
  color: #fff;
}

.layer{
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: .3;
  position: absolute;
  top: 0;
  left: 0;
}
</style>


