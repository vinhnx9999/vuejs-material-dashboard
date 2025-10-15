<template>
  <div>
    <h2>Task Manager</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <md-table v-model="data" :table-header-color="tableHeaderColor">
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID">{{ item._id }}</md-table-cell>
          <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
          <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
          <md-table-cell md-label="CreatedAt">{{
            item.createdAt
          }}</md-table-cell>
          <md-table-cell md-label="CompletedAt">{{
            item.completedAt
          }}</md-table-cell>
        </md-table-row>
      </md-table>
    </ul>
  </div>
</template>

<script>
export default {
  name: "fetchData",
  data() {
    return {
      data: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    // const apiUrl = "http://localhost:8001/api";
    // if (import.meta.env.VITE_API_URL) {
    //   apiUrl = import.meta.env.VITE_API_URL;
    // }
    // Replace the URL below with your actual API endpoint
    fetch(`http://localhost:8001/api/tasks?filter=all`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((json) => {
        this.data = Object.values(json?.tasks ?? []);
        this.loading = false;
      })
      .catch((err) => {
        this.error = err.message;
        this.loading = false;
      });
  },
  filters: {
    json(value) {
      return JSON.stringify(value, null, 2);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f5f5f5;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
  font-family: monospace;
}
</style>
