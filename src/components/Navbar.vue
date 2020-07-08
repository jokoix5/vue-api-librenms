<template>
  <div>
    <v-app-bar color="blue accent-4" flat dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <router-link to="/" class="white--text font-weight-bold">
          Dashoard LibreNMS
        </router-link>
      </v-toolbar-title>
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
