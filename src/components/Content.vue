<template>
  <section class="hero is-transparent is-fullheight-with-navbar">
    <div
      class="hero-body columns is-centered is-multiline blurry-bg align-start"
      :style="{ background: `url(${currentBackground})` }"
    >
      <div class="column is-9 box" style="margin-bottom: 0px">
        <div class="columns">
          <div class="column is-3 is-paddingless">
            <figure class="image is-2by3">
              <img :src="imgUrl" :alt="title" class="cover" />
            </figure>
          </div>
          <div class="column is-1"></div>
          <div class="column is-7">
            <section class="has-text-left">
              <h1 class="title is-3 has-text-black">Eduardo e Mônica</h1>
              <div class="description-container">
                <strong>Descrição</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam aperiam soluta, delectus rem quam voluptatibus fugit
                  optio! Similique, corporis quaerat voluptates rem laudantium,
                  quae saepe minus ipsa corrupti unde eius!
                </p>
              </div>
              <div class="schedule-container">
                <strong>Sessões de Hoje ({{ date }})</strong>
                <div class="cine-data">
                  <strong>Orient Cinemas</strong>
                  <span class="text-helper"> | Boulevard Shopping</span>
                  <ul class="schedule">
                    <li style="display: inline">
                      <time>
                        <span class="tag is-rounded is-info is-medium">
                          19:30
                        </span>
                      </time>
                    </li>
                    <li style="display: inline">
                      <time>
                        <span class="tag is-rounded is-info is-medium">
                          19:30
                        </span>
                      </time>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <control />
    </div>
  </section>
</template>

<script>
import JIMP from "jimp";
import axios from "axios";
import Control from "./Control.vue";

export default {
  components: {
    Control
  },
  data () {
    return {
      apiUrl: "https://18d4m810fl.execute-api.us-east-1.amazonaws.com/dev/getAll",
      currentBackground:
        "http://www.cinesercla.com.br/Uploads/filmes/901626a5-991c-4cf4-9e39-5bed5b32d4e5_w320_460.jpg",
      title: "Eduardo e Mônica",
      imgUrl:
        "http://www.cinesercla.com.br/Uploads/filmes/901626a5-991c-4cf4-9e39-5bed5b32d4e5_w320_460.jpg",
    };
  },
  mounted () {
    this.fetchData();
    this.blurImage();
  },
  computed: {
    date () {
      let date = new Date();
      let formatDate = function () {
        if (date.getMonth() + 1 < 10) {
          return `${date.getDate()}/0${date.getMonth() + 1}`;
        }
        return `${date.getDate()}/${date.getMonth() + 1}`;
      };
      return formatDate();
    }
  },
  methods: {
    async blurImage () {
      let image = await JIMP.read(this.imgUrl);
      let callback = function (err, res) {
        if (err) return;
        this.currentBackground = res;
      }.bind(this);
      image.blur(2).getBase64(JIMP.MIME_JPEG, callback);
    },
    async fetchData () {
      let data = axios.get(this.apiUrl, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.blurry-bg {
  background-repeat: no-repeat !important;
  background-size: cover !important;
  margin-bottom: 0px !important;
}

.cover {
  border-radius: 50px;
  box-shadow: 4px 0px 1px rgba(0, 0, 0, 0.1);
}

ul.schedule {
  margin-top: 5px;
  & > li:first-of-type {
    margin-left: 0px !important;
  }
  & > li {
    margin: 5px;
    display: inline;
  }
}

.cine-data {
  border-left: 4px solid;
  margin-top: 10px;
  padding: 10px;
  &:first-of-type {
    border-color: green;
  }
  &:nth-of-type(2) {
    border-color: pink;
  }
}

.description-container {
  margin: 20px 0px;
  & p {
    padding: 5px 0px;
  }
}

.schedule-container {
  margin: 20px 0px;
}

.text-helper {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.9em;
}

time {
  font-size: 1.1em;
}
</style>
