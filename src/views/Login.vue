<template>
  <v-app id="inspire" style="margin-top: -100px;">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="6" lg="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title class="jus">Login form</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field
                    label="your@email.com"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="email"
                    :rules="emailRules" required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    :type="show ? 'text' : 'password'"
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { auth } from "@/plugins/firebase";

export default {
  name: "login",

  data: () => ({
    email: "",
    password: "",
    show: false,
    emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
    passwordRules: [
            v => !!v || 'Password is required',
            v =>
                v.length >= 6 ||
                'Password must be greater than 6 characters'
        ]
  }),

  methods: {
    login: function() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(({ user }) => {
          sessionStorage.setItem("currentUser", user.uid);
          window.location.href = "/";
        })
        .catch((error) => alert(`Error ${error.message}`));
    }
  }
};
</script>
