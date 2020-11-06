<template>
  <div class="home mx-4 my-4">
    <h2 class="d-flex justify-center mb-3">Servers</h2>
    <v-row no-gutters>
      <v-col
        cols="6"
        md="3"
        lg="3"
        class="mb-2 px-1"
        v-for="device in devices.server"
        :key="`device_${device.hostname}`"
      >
        <router-link
          :to="{ name: 'detail', params: { hostname: device.hostname } }"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 16 : 2">
              <v-card-text>
                <div>{{ device.hostname }}</div>
                <p class="headline font-weight-bold text--primary">
                  {{ device.sysName }}
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </router-link>
      </v-col>
    </v-row>

    <h2 class="d-flex justify-center mb-3">Networks</h2>
    <v-row no-gutters>
      <v-col
        cols="6"
        md="3"
        lg="3"
        class="mb-2 px-1"
        v-for="device in devices.network"
        :key="`device_${device.hostname}`"
      >
        <router-link
          :to="{ name: 'detail', params: { hostname: device.hostname } }"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 16 : 2">
              <v-card-text>
                <div>{{ device.hostname }}</div>
                <p class="headline font-weight-bold text--primary">
                  {{ device.sysName }}
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </router-link>
      </v-col>
    </v-row>

    <h2 class="d-flex justify-center mb-3">Wireless</h2>
    <v-row no-gutters>
      <v-col
        cols="6"
        md="3"
        lg="3"
        class="mb-2 px-1"
        v-for="device in devices.wireless"
        :key="`device_${device.hostname}`"
      >
        <router-link
          :to="{ name: 'detail', params: { hostname: device.hostname } }"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 16 : 2">
              <v-card-text>
                <div>{{ device.hostname }}</div>
                <p class="headline font-weight-bold text--primary">
                  {{ device.sysName }}
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "home",

  data: () => ({
    devices: {}
  }),

  mounted() {
    this.fetchDevices();
  },

  methods: {
    fetchDevices() {
      this.axios
        .get("/devices")
        .then((response) => {
          let data = response.data.devices;
          this.groupingDevices(data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    groupingDevices(devices) {
      let _ = require("lodash");
      let result = _.groupBy(devices, function(n) {
        return n.type;
      });

      this.devices = result;
    }
  }
};
</script>

