<template>
    <main>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="card in cards" :key="card.id">
          <Card :card="card" />
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import Card from './Card.vue';
  
  export default {
    components: {
      Card,
    },
  
    async created() {
      await this.loadCards();
    },
  
    computed: {
      ...mapState(['cards', 'loading']),
    },
  
    methods: {
      ...mapActions(['loadCards']),
    },
  };
  </script>
  