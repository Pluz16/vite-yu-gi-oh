<template>
    <div class="search-bar">
      <input type="text" v-model="searchTerm" placeholder="Search by name" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: ""
      };
    },
    watch: {
      searchTerm(newVal) {
        this.$emit("search", newVal);
      }
    }
  };
  </script>
  
  <style scoped>
  .search-bar {
    margin-bottom: 16px;
  }
  </style>
  