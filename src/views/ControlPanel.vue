<template>
  <div>
    <h1 class="title">Server Resources</h1>

    <v-container justify-center>
      <v-layout row>
        <v-flex xs4 md2 lg1>
          <v-progress-circular
            :color="cpuColor"
            :rotate="90"
            :size="100"
            :width="12"
            :value="cpuPercent">
            <div class="text-xs-center">CPU</div>
            <div class="text-xs-center">{{ cpuPercent }}%</div>
          </v-progress-circular>
        </v-flex>
        <v-flex xs4 md2 lg1>
          <v-progress-circular
            :color="ramColor"
            :rotate="90"
            :size="100"
            :width="12"
            :value="ramPercent">
            <div class="text-xs-center">RAM</div>
            <div class="text-xs-center">{{ ramPercent }}%</div>
          </v-progress-circular>
        </v-flex>
        <v-flex xs4 md2 lg1>
          <v-progress-circular
            :color="storageColor"
            :rotate="90"
            :size="100"
            :width="12"
            :value="storagePercent">
            <div class="text-xs-center">Storage</div>
            <div class="text-xs-center">{{ storagePercent }}%</div>
          </v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>

    <h1 class="title my-4">Setup</h1>
    <v-container>
      <v-layout row>
        <v-flex xs12 md6 lg4>
          <v-select label="Track" v-model="selectedTrack" :items="tracks"></v-select>
          <v-select label="Cars" multiple v-model="selectedCars" @input="changedCars" :items="cars"></v-select>

          <v-slider always-dirty v-for="car in selectedCars"
            :key="car"
            :label="car"
            thumb-label="always"
            v-model="carConfig[car]"
            class="my-5"
          />

          <v-btn @click="restartServer" class="primary">Restart Server</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    computed: {
      cpuColor() {
        if (this.cpuPercent <= 50) {
          return 'teal'
        } else if (this.cpuPercent < 75) {
          return 'orange';
        } else {
          return 'red';
        }
      },
      ramColor() {
        if (this.ramPercent <= 50) {
          return 'teal'
        } else if (this.ramPercent < 75) {
          return 'orange';
        } else {
          return 'red';
        }
      },
      storageColor() {
        if (this.storagePercent <= 50) {
          return 'teal'
        } else if (this.storagePercent < 75) {
          return 'orange';
        } else {
          return 'red';
        }
      }
    },
    data: () => ({
      cpuPercent: 15,
      ramPercent: 55,
      storagePercent: 80,
      selectedCars: [],
      selectedTrack: [],
      carConfig: {},
      cars: [
        'i328',
        '350z'
      ],
      tracks: [
        'driftplayground',
        'drift',
        'meihan'
      ]
    }),

    methods: {
      changedCars() {
        this.selectedCars.forEach(car => {
          this.$set(this.carConfig, car, 2);
        });
      },

      restartServer() {
        console.log('todo');
      }
    }
  }
</script>

<style>

</style>
