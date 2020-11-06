<template id="users">
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-simple-table fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Username</th>
              <th class="text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.username">
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script charset="utf-8">
// import { usersCollection } from "@/plugins/firebase";

export default {
  name: "Users",
  data: () => ({
    users: []
  }),

  mounted() {
    // this.fetchUsersCollection();
  },

  methods: {
    // fetchUsersCollection() {
    //   usersCollection.onSnapshot((snapshot) => {
    //     let usersArray = [];

    //     snapshot.forEach((doc) => {
    //       let user = doc.data();
    //       user.id = doc.id;

    //       usersArray.push(user);
    //     });

    //     this.users = usersArray;
    //   });
    // }
  }
};
</script>

