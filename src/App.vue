<template>
  <div class="app">
    <header>
      <h1>Yu-Gi-Oh Cards</h1>
      <SearchBar @search="searchTerm = $event" />
    </header>
    <main>
      <div class="card-list">
        <Card
          v-for="card in filteredCards"
          :key="card.id"
          :name="card.name"
          :image="card.image"
          :archetype="card.archetype"
          :description="card.description"
        />
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  components: {
    Card,
    SearchBar
  },
  data() {
    return {
      cards: [],
      searchTerm: ""
    };
  },
  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then(response => {
        this.cards = response.data.data;
      });
  },
  computed: {
    filteredCards() {
      return this.cards.filter(card =>
        card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
};
</script>

<style>
.app {
  margin: 0 auto;
  max-width: 800px;
}
header {
  margin-bottom: 16px;
  text-align: center;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
