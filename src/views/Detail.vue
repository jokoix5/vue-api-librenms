<template>
  <div class="detail container">
    <div class="px-1">
      <Uptime />
    </div>

    <v-row no-gutters>
      <v-col cols="12" md="6" lg="6" class="my-2 px-1">
        <v-expansion-panels flat v-model="sysInfo">
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Information
            </v-expansion-panel-header>

            <v-expansion-panel-content>
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" md="6" lg="6" class="my-2 px-1">
        <v-expansion-panels flat v-model="sysTemp">
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Temperature
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <Temperature />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels flat v-model="sysStog" class="my-2">
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Storage
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text>
                  <Storage />
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels flat v-model="sysMem" class="my-2">
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Memory
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text>
                  <Memory />
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
    sysInfo: 0,
    sysTemp: 0,
    sysStog: 0,
    sysMem: 0,
    forecast: [
      { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
      { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
      { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' }
    ]
  })
};
</script>
