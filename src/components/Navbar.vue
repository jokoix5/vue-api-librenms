<template>
  <div>
    <v-app-bar color="blue accent-4" flat dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <router-link to="/" class="white--text font-weight-bold">
          Vue LibreNMS
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-form>
        <v-text-field
          flat
          dense
          hide-details
          outlined
          prepend-inner-icon="mdi-magnify"
          class="hidden-sm-and-down"
          placeholder="Searching..."
        />
      </v-form>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
