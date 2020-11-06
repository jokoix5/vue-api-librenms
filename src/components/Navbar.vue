<template>
  <div>
    <v-app-bar fixed color="blue accent-4" flat dark>
      <v-toolbar-title class="ml-0 pl-4">
        <router-link to="/" class="white--text font-weight-bold">
          Dashoard LibreNMS
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-if="login" class="d-none d-md-flex d-lg-flex">
        <router-link to="/" class="white--text font-weight-bold">
          <v-btn outlined class="mr-2">
            <v-icon>mdi-home</v-icon>
            Home
          </v-btn>
        </router-link>

        <v-btn color="red" @click="logout">
          Logout
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>

    <v-app-bar-nav-icon
      v-if="login"
      class="d-md-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-if="login"
      v-model="drawer"
      fixed
      temporary
      class="d-md-none"
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
            :key="item.title"
            :to="item.url"
            link
          >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot: append>
        <div class="pa-2">
          <v-btn block color="red white--text" @click="logout">
            Logout
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div >
</template >

<script>
import {auth} from "@/plugins/firebase";

export default {
  name: "Navbar",

  data: () => ({
    user: sessionStorage.currentUser,
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", url: "/" }
    ]
  }),

  computed: {
    login() {
      return sessionStorage.currentUser != null;
    }
  },

  methods: {
    logout: function() {
      auth.signOut().then(() => (window.location.href = "/login"));
      sessionStorage.removeItem("currentUser");
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>