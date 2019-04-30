import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
new Vue({
  el: "#app",
  data:{
    value: 0,
    value2: 0,
    //result: 0,
    currencies: [],
    rate: 1,
    selected: {},

  },
  methods:{
    fetchCurrencies(){
      console.log("Fetching currencies")
      fetch("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(data => {
      this.currencies = data.rates;
      console.log(data);
     });
   },

    updateRate(){
      this.rate = this.currencies[this.selected];
    }

  },
  mounted(){
    console.log("PAGE LOADED");
    this.fetchCurrencies();
  },
  computed:{
    result(){
      return (this.value * this.rate).toFixed(2);
    },
    toEuros(){
      return (this.value2 / this.rate).toFixed(2);
    }
  }
})
})
