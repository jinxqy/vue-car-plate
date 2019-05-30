<template>
  <div>
      <car-plate :getPlateNum="getNum" :showCarPlate="showCarPlate" :showLayer="showLayer"/>
      <button @click="change">switch</button>
  </div>
</template>
<script>
import carPlate from "@/components/carPlate";
export default {
  components: {
    carPlate
  },
  data(){
      return {
          showCarPlate: false,
          showLayer: false
      }
  },
  methods: {
      getNum(num){
          console.log(num);
      },
      change(){
          this.showCarPlate = !this.showCarPlate;
      }
  }
};
</script>

