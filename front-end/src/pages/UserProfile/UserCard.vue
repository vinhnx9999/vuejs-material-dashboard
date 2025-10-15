<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Software Development Engineer (SDE)</h6>
      <h4 class="card-title">Vinh Nguyen</h4>
      <p class="card-description">
        A developer engineer, often called a Software Development Engineer
        (SDE), applies engineering principles to the entire software development
        lifecycle, from concept to maintenance. While both roles involve coding,
        a developer engineer's responsibilities are broader than a developer's,
        which can include market research, system design, and architecture, in
        addition to writing code.
      </p>
      <md-button class="md-round md-success">Follow</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/vinhnx.jpg"),
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
p {
  display: inline;
}
</style>
