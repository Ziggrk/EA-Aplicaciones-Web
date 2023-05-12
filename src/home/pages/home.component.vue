<script>
import {HealthChecksService} from "@/shared/services/health-checks.service";
import {CentersService} from "@/health-checks/services/centers.service";

export default {
    name: 'home',
    data(){
        return{
            healthChecks:[],
            averageHP: 0,
            averageWatts: 0,
            averageVolts: 0,
            healthChecksService : new HealthChecksService()
        }
    },methods:{
        CalculateAverageHp(){
            let sum;
            sum = 0;
            this.healthChecks.forEach((element)=>{
                sum+=element.hp;
            });
            this.averageHP = sum/this.healthChecks.length;
            this.averageHP = this.averageHP.toFixed(1);
            console.log(this.averageHP);
        },

        CalculateAverageVolts(){
            let sum;
            sum = 0;
            this.healthChecks.forEach((element)=>{
                sum+=element.volts;
            });
            this.averageVolts = sum/this.healthChecks.length;
            this.averageVolts = this.averageVolts.toFixed(1);
            console.log(this.averageVolts);
        },

        CalculateAverageWatts(){
            let sum;
            sum = 0;
            this.healthChecks.forEach((element)=>{
                sum+=element.watts;
            });
            this.averageWatts = sum/this.healthChecks.length;
            this.averageWatts = this.averageWatts.toFixed(1);
            console.log(this.averageWatts);
        },
        getAll(){
            this.healthChecksService.getAllExceptHPZero().then((response)=>{
                this.healthChecks = response.data;
                console.log(response);
                this.CalculateAverageHp();
                this.CalculateAverageWatts();
                this.CalculateAverageVolts();
            });
        }
    },
    beforeMount() {
        this.getAll();
    }
}
</script>

<template>
  <div class="card-container">
      <pv-card>
          <template #title>
              {{$t('averagePerformance')}}
          </template>
          <template #content>
              <h1>HP: {{this.averageHP}}</h1>
              <h1>Volts: {{this.averageVolts}}</h1>
              <h1>Watts: {{this.averageWatts}}</h1>
          </template>
      </pv-card>
  </div>
</template>

<style scoped>
.card-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 84vh;
    padding: 20px;
}
h1{
    color: #0069d9;
    font-size: 40px;
    font-family: "Segoe UI Black",sans-serif;
}
</style>