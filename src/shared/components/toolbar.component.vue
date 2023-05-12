<script>
export default {
    name: 'full-toolbar'
}
</script>

<template>
    <div class="nav">
        <h1>TechnoGym TechnoRun Analytics</h1>
        <span class="spacer"/>
        <router-link to="/home">
            <pv-button class="home-button" :label="$t('home')"/>
        </router-link>
        <router-link to="/analytics/health-checks">
            <pv-button class="check-button" :label="$t('healthChecks')"/>
        </router-link>
    </div>
</template>

<style scoped>
h1{
    color: #0069d9;
    font-family: "Segoe UI Semibold",sans-serif;
}
.nav{
    width: 100%;
    display: flex;
    padding: 15px;
    background: #f8f8f8;
    align-items: center;
}
.spacer{
    flex: 1 1 auto;
}
.home-button{
    margin: 20px;
}
.check-button{
    margin: 20px;

}
</style>