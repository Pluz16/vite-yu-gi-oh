<template>
    <div class="card">
      <img :src="image" :alt="name" />
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <p><strong>Archetype:</strong> {{ archetype }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      image: String,
      archetype: String,
      description: String
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .card img {
    width: 100%;
    height: auto;
    margin-bottom: 8px;
  }
  </style>
  