<template>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="changePage(page)"
      >{{ page }}</button>
      <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalPages: Number,
      currentPage: Number
    },
    methods: {
      changePage(page) {
        this.$emit("change-page", page);
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }
  .pagination button {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    margin: 0 4px;
    padding: 4px 8px;
  }
  .pagination button.active {
    background-color: #333;
    color: #fff;
  }
  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  </style>