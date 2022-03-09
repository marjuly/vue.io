console.log("the file is linked correctly");

const app = Vue.createApp({
  data() {
    return {
      worldText: true,
      text: "Click the button to end the world"
    };
  },
  methods: {
    toggleWorldText() {
      this.worldText = !this.worldText;
    }
  }
});

app.mount("#app");
