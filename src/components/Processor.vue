<template>
  <v-card flat class="mx-auto">
    <div v-if="isEmpty">
      <v-alert type="warning">
        Opps! Graph for Processor is not available.
      </v-alert>
    </div>

    <div v-if="isLoading">
      <Loading />
    </div>

    <div v-if="!isLoading">
      <div v-if="!isEmpty">
        <v-img
          class="white--text align-end"
          max-height="300px"
          max-width="100%"
          :src="processorGraph"
        ></v-img>
      </div>
    </div>
  </v-card>
</template>

<script>
import Loading from "@/components/Loading"
import { toTimestamp } from "../utils/date"

export default {
  name: "Processor",

  components: { Loading },

  props: ["dateStart", "dateEnd"],

  data: () => ({
    processorGraph: "",
    isEmpty: false,
    isLoading: false,
  }),

  mounted() {
    this.fetchProcessor()
  },

  watch: {
    dateStart() {
      this.fetchProcessor()
    },

    dateEnd() {
      this.fetchProcessor()
    },
  },

  methods: {
    fetchProcessor() {
      this.isLoading = true
      let baseUrl = `/devices/${this.$route.params.hostname}/graphs/health/device_processor?legend=no`
      let fromDate = `from=${toTimestamp(this.dateStart)}`
      let toDate = `to=${toTimestamp(this.dateEnd)}`
      let width = `width=${500}`
      let height = `height=${160}`
      let url = [baseUrl, fromDate, toDate, width, height].join("&")

      this.axios
        .get(url, { responseType: "blob" })
        .then((response) => {
          if (response.data.size === 0) {
            this.isEmpty = true
            this.isLoading = false
          } else {
            let reader = new FileReader()

            reader.readAsDataURL(response.data)

            reader.onload = () => {
              this.processorGraph = reader.result
            }

            this.isEmpty = false
            this.isLoading = false
          }
        })
        .catch((e) => {
          this.errors.push(e)
          this.isLoading = false
        })
    },
  },
}
</script>

