<script>
import {defineComponent} from "vue";
import FullToolbar from "@/shared/components/toolbar.component.vue";

export default defineComponent({
    components: {FullToolbar}
})

</script>

<template>
    <div class="container">
        <full-toolbar></full-toolbar>
        <router-view></router-view>
    </div>

</template>

<style scoped>
.container{
    min-height: 100vh;
    background-color: #f2f2f2;
}
</style>