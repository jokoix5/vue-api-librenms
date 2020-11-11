<template>
  <div class="detail mx-2">
    <v-row no-gutters>
      <v-col cols="12" md="4" lg="4" class="fixed-details my-2 px-2">
        <DateTime
          :dateStart="dateStart"
          :dateEnd="dateEnd"
          v-on:handleDateTime="handleDateTime"
        />

        <v-expansion-panels flat v-model="sysInfo">
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Information
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <p class="display-1 text--primary">{{ device.sysName }}</p>
              <v-divider></v-divider>

              <v-simple-table class="mt-2">
                <tbody>
                  <tr class="my-2">
                    <td width="30%"><strong>IP Address</strong></td>
                    <td class="text-right">{{ device.hostname }}</td>
                  </tr>

                  <tr>
                    <td width="30%"><strong>Hardware</strong></td>
                    <td class="text-right">{{ device.hardware }}</td>
                  </tr>

                  <tr class="my-2">
                    <td width="30%"><strong>Operating System</strong></td>
                    <td class="text-right">{{ device.os }}</td>
                  </tr>

                  <tr class="my-2">
                    <td width="30%"><strong>Object ID</strong></td>
                    <td class="text-right">{{ device.sysObjectID }}</td>
                  </tr>

                  <tr class="my-2">
                    <td width="30%"><strong>Contact</strong></td>
                    <td class="text-right">{{ device.sysContact }}</td>
                  </tr>

                  <tr class="my-2">
                    <td width="30%"><strong>Uptime</strong></td>
                    <td class="text-right">{{ timeCounter(device.uptime) }}</td>
                  </tr>

                  <tr class="my-2">
                    <td width="30%"><strong>Location</strong></td>
                    <td class="text-right">{{ device.location }}</td>
                  </tr>

                  <tr class="my-2">
                    <td width="30%"><strong>Lat/Lng</strong></td>
                    <td class="text-right">
                      {{ device.lat }} {{ device.lng }}
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col
        cols="12"
        md="8"
        lg="8"
        offset-md="4"
        offset-lg="4"
        class="my-2 px-2"
      >
        <v-expansion-panels flat v-model="sysUptime">
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Uptime
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <Uptime :dateStart="dateStart" :dateEnd="dateEnd" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels flat v-model="sysTemp" class="my-2">
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Temperature
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <Temperature />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels flat v-model="sysPro" class="my-2">
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Processor
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-card flat>
                <Processor :dateStart="dateStart" :dateEnd="dateEnd" />
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
                <Memory :dateStart="dateStart" :dateEnd="dateEnd" />
              </v-card>
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
                <Storage :dateStart="dateStart" :dateEnd="dateEnd" />
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DateTime from "@/components/Datetime"
import Uptime from "@/components/Uptime"
import Temperature from "@/components/Temperature"
import Storage from "@/components/Storage"
import Memory from "@/components/Memory"
import Processor from "@/components/Processor"


export default {
  name: "Detail",

  components: {
    Uptime,
    Temperature,
    Storage,
    Memory,
    Processor,
    DateTime,
  },

  data: () => ({
    device: {},
    dateStart: "",
    dateEnd: "",
    sysUptime: 0,
    sysInfo: 0,
    sysTemp: 0,
    sysStog: 0,
    sysMem: 0,
    sysPro: 0,
  }),
  mounted() {
    this.initDateStart()
    this.initDateEnd()
    this.fetchDevice()
  },

  methods: {
    initDateStart() {
      let start = new Date()
      start.setHours(0, 0, 0, 0)
      this.dateStart = start
    },

    initDateEnd() {
      let end = new Date()
      end.setHours(23, 59, 59, 999)
      this.dateEnd = end
    },

    fetchDevice() {
      this.axios
        .get(`/devices/${this.$route.params.hostname}`)
        .then((response) => {
          this.device = response.data.devices[0]
        })
        .catch((e) => {
          this.errors.push(e)
        })
    },

    handleDateTime(value) {
      const { dateStart, dateEnd } = value

      this.dateStart = dateStart
      this.dateEnd = dateEnd
    },

    timeCounter(item) {
      var content = ""
      var t = item

      var days = parseInt(t / 86400)
      t = t - days * 86400

      var hours = parseInt(t / 3600)
      t = t - hours * 3600

      var minutes = parseInt(t / 60)
      t = t - minutes * 60

      if (days) content += days + " days"
      if (hours || days) {
        if (days) content += ", "
        content += hours + " hours, "
      }

      content += minutes + " minutes and " + t + " seconds"

      return content
    },
  },
}
</script>

<style lang="less" scoped>
.fixed-details {
  position: fixed;
}

@media only screen and (max-device-width: 960px) {
  .fixed-details {
    position: relative;
  }
}
</style>

