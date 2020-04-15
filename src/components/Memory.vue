<template >
  <v-card flat class="mx-auto">

    <div v-if="isEmpty">
      <v-alert type="warning">Opps! Graph for memory pools is not available.</v-alert>
    </div>

    <div v-if="!isEmpty">
      <v-img class="white--text align-end" max-height="300px" max-width="100%" :src="memoryImage"></v-img>

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
                      v-model="dateStart"
                      label="Date Start"
                      hint="YYYY/MM/DD format"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      @blur="dateStart = parseDate(dateStart)"
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
                      v-model="dateEnd"
                      label="Date End"
                      hint="YYYY/MM/DD format"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      @blur="dateEnd = parseDate(dateEnd)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="dateEnd" no-title @input="menuDateEnd = false"></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" sm="4" md="4" class="mt-4">
                <v-btn color="primary" @click="fetchMemoryImage()">Result</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-layout>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>


export default {
  name: "Memory",

  data: () => ({
    menuDateStart: false,
    menuDateEnd: false,
    dateStart: new Date().toISOString().substr(0, 10),
    dateEnd: new Date().toISOString().substr(0, 10),
    dateFormattedStart: "",
    dateFormattedEnd: "",
    memoryImage: "",
    isEmpty: false
  }),

  mounted() {
    this.fetchMemoryImage();
  },

  computed: {
    computedDataFormatted() {
      return this.formatDate(this.date);
    }
  },
  methods: {
    fetchMemoryImage() {
      this.axios
        .get(`/devices/${this.$route.params.hostname}/device_ucd_memory?from=${this.dateStart.replace(/-/g, "")}&to=${this.dateEnd.replace(/-/g, "")}&legend=no&width=500&height=160`,
          {
            responseType: "blob"
          })
        .then(response => {
          if (response.data.size === 0) {
            this.isEmpty = true;
          } else {
            let reader = new FileReader();
            reader.readAsDataURL(response.data);
            reader.onload = () => {
              this.memoryImage = reader.result;
            };
            this.isEmpty = false;
            
          }
          // console.log(response)
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
