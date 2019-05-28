<template>
    <div>
        <ul>
            <li><a href="#" @click="toCarPalte">车牌号</a></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
import carPlate from '@/components/carPlate'
export default {
    components: {
        carPlate
    },
    methods: {
        toCarPalte(){
            this.$router.push({
                name: 'CarPlate'
            })
        }
    }
}
</script>

