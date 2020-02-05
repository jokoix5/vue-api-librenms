<template>
  <div class="detail container">
    <Uptime />

    <v-row no-gutters>
      <v-col cols="12" md="6" lg="6" class="my-2 px-1">
        <v-card>
          <v-card-text>
            <div>Information</div>
            <p class="display-1 text--primary">Server Test</p>
            <v-divider></v-divider>

            <v-list class="transparent">
              <v-list-item v-for="item in forecast" :key="item.day">
                <v-list-item-title>{{ item.day }}</v-list-item-title>

                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-subtitle class="text-right">
                  {{ item.temp }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="6">
        <v-card class="my-2">
          <v-card-text>
            <Temperature />
          </v-card-text>
        </v-card>

        <v-card class="my-2">
          <v-card-text>
            <Storage />
          </v-card-text>
        </v-card>

        <v-card class="my-2">
          <v-card-text>
            <Memory />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Uptime from "@/components/Uptime";
import Temperature from "@/components/Temperature";
import Storage from "@/components/Storage";
import Memory from "@/components/Memory";

export default {
  name: "Detail",

  components: {
    Uptime,
    Temperature,
    Storage,
    Memory
  },

  data: () => ({
    forecast: [
      { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
      { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
      { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' }
    ]
  })
};
</script>
