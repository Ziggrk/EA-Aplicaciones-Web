<script>
import {HealthChecksService} from "@/shared/services/health-checks.service";
import {CentersService} from "@/health-checks/services/centers.service";

export default {
    name: 'health-checks',
    data(){
        return{
            healthChecks:[],
            healthChecksService : new HealthChecksService(),
            centersService: new CentersService()
        }
    },
    methods:{
        getAll(){
            this.healthChecksService.getAll().then((response)=>{
                this.healthChecks = response.data;

                //Agregar nombres de centers
                for (let i = 0; i < this.healthChecks.length; i++) {
                    const centerId = this.healthChecks[i].treadmill.centerId;

                    this.centersService.getCenterById(centerId).then((centerResponse)=>{
                        this.healthChecks[i].centerName = centerResponse.data.name;
                    });
                }

                //Agregar Fecha y tiempo
                for (let i = 0; i < this.healthChecks.length; i++) {
                    const date = new Date(this.healthChecks[i].year, this.healthChecks[i].month - 1, this.healthChecks[i].day, this.healthChecks[i].hour,this.healthChecks[i].minutes,this.healthChecks[i].seconds);
                    this.healthChecks[i].date = date.toISOString().split('T')[0];
                    this.healthChecks[i].time = date.toTimeString().split(' ')[0];
                }
                console.log(this.healthChecks);
            });
        }
    },
    beforeMount() {
        this.getAll();
    }
}
</script>

<template>
    <div class="card">
        <pv-table :value="healthChecks" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <pv-column field="id" header="id" sortable style="width: 10%"></pv-column>
            <pv-column field="treadmillId" :header="$t('treadmill')" sortable style="width: 10%"></pv-column>
            <pv-column field="treadmill.serialNumber" :header="$t('serialNumber')" sortable style="width: 25%"></pv-column>
            <pv-column field="centerName" :header="$t('centerName')" sortable style="width: 25%"></pv-column>
            <pv-column field="date" :header="$t('date')" sortable style="width: 20%"></pv-column>
            <pv-column field="time" :header="$t('time')" sortable style="width: 20%"></pv-column>
            <pv-column field="volts" header="Volts" sortable style="width: 25%"></pv-column>
            <pv-column field="watts" header="Watts" sortable style="width: 25%"></pv-column>
            <pv-column field="hp" header="Hp" sortable style="width: 25%"></pv-column>
        </pv-table>
    </div>
</template>

<style scoped>

</style>