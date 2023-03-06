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
      <Pagination :totalPages="totalPages" :currentPage="currentPage" @change-page="changePage" />
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue";
import Pagination from "./components/Pagination.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  components: {
    Card,
    Pagination,
    SearchBar
  },
  data() {
    return {
      cards: [],
      searchTerm: "",
      currentPage: 1,
      cardsPerPage: 20
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
    },
    totalPages() {
      return Math.ceil(this.filteredCards.length / this.cardsPerPage);
    },
    paginatedCards() {
      const startIndex = (this.currentPage - 1) * this.cardsPerPage;
      return this.filteredCards.slice(startIndex, startIndex + this.cardsPerPage);
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
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
