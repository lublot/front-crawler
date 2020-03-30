<template>
  <div class="column is-9 is-paddingless justify-between">
    <button
      class="button is-info is-large"
      :style="renderPrevious"
      @click="previous"
    >
      Anterior
    </button>
    <button class="button is-info is-large" :style="renderNext" @click="next">
      Próximo
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    renderPrevious () {
      if (this.isFirst) {
        return "visibility: hidden";
      }
      return "";
    },
    renderNext () {
      if (this.isLast) {
        return "visibility: hidden";
      }
      return "";
    },
    ...mapGetters(["isFirst", "isLast"])
  },
  methods: {
    ...mapActions({
      next: "nextMovie",
      previous: "previousMovie"
    })
  }
};
</script>
