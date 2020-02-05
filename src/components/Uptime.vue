<template>
  <v-card flat class="mx-auto">
    <v-img
      class="white--text align-end"
      height="400px"
      width="100%"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    ></v-img>

    <v-card-text class="text--primary">
      <v-layout justify-center>
        <div class="d-inline-flex mx-auto">
          <v-row>
            <v-col cols="12" sm="4" md="4">
              <v-menu
                ref="menuDateStart"
                v-model="menuDateStart"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormattedStart"
                    label="Date Start"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    @blur="dateStart = parseDate(dateFormattedStart)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="dateStart" no-title @input="menuDateStart = false"></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" sm="4" md="4">
              <v-menu
                ref="menuDateEnd"
                v-model="menuDateEnd"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormattedEnd"
                    label="Date End"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    @blur="dateEnd = parseDate(dateFormattedEnd)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="dateEnd" no-title @input="menuDateEnd = false"></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" sm="4" md="4" class="mt-4">
              <v-btn color="primary">Result</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Uptime",

  data: () => ({
    menuDateStart: false,
    menuDateEnd: false,
    dateStart: new Date().toISOString().substr(0, 10),
    dateEnd: new Date().toISOString().substr(0, 10),
    dateFormattedStart: "",
    dateFormattedEnd: ""
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    dateStart() {
      this.dateFormattedStart = this.formatDate(this.dateStart);
    },
    dateEnd() {
      this.dateFormattedEnd = this.formatDate(this.dateEnd);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>