<template>
  <v-layout>
    <v-card flat class="mb-2" width="100%">
      <v-row class="mx-3">
        <v-col cols="12" md="12" lg="5">
          <v-datetime-picker label="Start Date" v-model="dateStart" date-format="MM/dd/yyyy" time-format="HH:mm" :time-picker-props="{ ampmInTitle: true }">
            <template slot="dateIcon">
              <v-icon>fas fa-calendar</v-icon>
            </template>

            <template slot="timeIcon">
              <v-icon>fas fa-clock</v-icon>
            </template>
          </v-datetime-picker>
        </v-col>

        <v-col cols="12" md="12" lg="5">
          <v-datetime-picker label="End Date" v-model="dateEnd" date-format="MM/dd/yyyy" time-format="HH:mm">
            <template slot="dateIcon">
              <v-icon>fas fa-calendar</v-icon>
            </template>

            <template slot="timeIcon">
              <v-icon>fas fa-clock</v-icon>
            </template>
          </v-datetime-picker>
        </v-col>

        <v-col cols="12" md="2" lg="2" class="mt-2">
          <v-btn fab small color="primary" @click="handleDateTime">
            <v-icon dark>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-layout>
</template>

<script charset="utf-8">
export default {
  name: "DateTime",

  props: ["dateStart", "dateEnd"],

  data: () => ({
    hasError: false,
  }),

  methods: {
    handleDateTime() {
      const value = { dateStart: this.dateStart, dateEnd: this.dateEnd }

      this.$emit("handleDateTime", value)
    },
  },
}
</script>

