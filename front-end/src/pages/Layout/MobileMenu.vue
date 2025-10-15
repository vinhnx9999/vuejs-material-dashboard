<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <md-field>
        <label>Search</label>
        <md-input v-model="search" type="text"></md-input>
      </md-field>
    </li>
    <li>
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons">dashboard</i>
        <p>Dashboard</p></a
      >
    </li>
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">notifications</i>
          <span class="notification">5</span>
          <p>Notifications</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li><a href="#">Vinh Nguyen responded to your email</a></li>
          <li><a href="#">You have 5 new tasks</a></li>
          <li><a href="#">You're now friend with Vinh Nguyen</a></li>
          <li><a href="#">Another Notification</a></li>
          <li><a href="#">Another One</a></li>
        </ul>
      </drop-down>
    </li>
    <li>
      <a href="#" data-toggle="dropdown" class="dropdown-toggle"
        ><i class="material-icons">person</i>
        <p>Profile</p></a
      >
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: [
        "Vinh Yorn",
        "Quynh Butterfly",
        "Ngoc Aleister",
        "Tran Ryoma",
        "Angela Phuong Trinh",
        "Kelly Nguyen",
        "Trung Valhein",
        "Oanh Aleister",
        "Thao Violet",
        "Điêu Thuyền",
        "Lữ Bố",
      ],
    };
  },
  mounted() {
    //const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8001/api";
    // Replace the URL below with your actual API endpoint
    fetch(`http://localhost:8001/api/users`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((json) => {
        let items = json?.users ?? [];
        console.log("usersArray", items);
        this.employees = items.map((user) => user.name);
        this.loading = false;
      })
      .catch((err) => {
        this.error = err.message;
        this.loading = false;
      });
  },
};
</script>
