<template>
  <v-app id="app">
    <div>
      <Navbar />

      <v-main style="margin-top: 64px;">
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",

  components: {
    Navbar
  }
};
</script>

<style>
#app {
  background-color: var(--v-background-base);
}
</style>

