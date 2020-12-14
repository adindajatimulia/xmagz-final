<style lang="scss">
.p13 {
  background-image: url("/img/pages/12.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content1 {
    position: absolute;
    top: 26px;
    left: 60px;
    width: 412px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 18px;
      left: 50px;
      width: 300px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 30px;
      left: 50px;
      width: 300px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 15px;
      left: 50px;
      width: 283px;
    }

    .title {
      color: #ffffff;
      font-size: 2rem;

      @media (min-width: $breakpoint-sm) and (max-width: ($breakpoint-xl - 1px)) {
        font-size: 1.5rem;
      }

      span {
        font-weight: 700;
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 391px;
    line-height: 14px;
    left: 51px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      left: 36px;
      width: 281px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      left: 42px;
      width: 338px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      left: 36px;
      width: 281px;
    }

    &.content2 {
      position: absolute;
      top: 170px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        top: 112px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        top: 136px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        top: 105px;
      }
    }

    &.content3 {
      position: absolute;
      top: 307px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        top: 220px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        top: 276px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        top: 210px;
      }
    }

    &.content4 {
      position: absolute;
      top: 500px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        top: 360px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        top: 443px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        top: 338px;
      }
    }

    .text {
      font-size: 0.65rem;
      line-height: 12px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        font-size: 0.45rem;
        line-height: 10px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        font-size: 0.55rem;
        line-height: 10px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        font-size: 0.5rem;
        line-height: 8px;
      }

      .title {
        margin-bottom: 5px;

        span {
          font-weight: 600;
        }
      }
    }

    .image {
      display: flex;
      cursor: pointer;

      img {
        width: 100px;
        max-height: 100px;
        margin: auto;

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          width: 80px;
          max-height: 80px;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p12pt">{{ $t("p12.title") }}</div>
      <div id="p12p1t">{{ $t("p12.paragraph1t") }}</div>
      <div id="p12p1">{{ $t("p12.paragraph1") }}</div>
      <div id="p12p2t">{{ $t("p12.paragraph2t") }}</div>
      <div id="p12p2">{{ $t("p12.paragraph2") }}</div>
      <div id="p12p3t">{{ $t("p12.paragraph3t") }}</div>
      <div id="p12p3">{{ $t("p12.paragraph3") }}</div>
    </div>

    <div class="content1">
      <div id="p12pt_" class="title"></div>
    </div>
    <div class="content content2">
      <div class="image" v-on:click="showImage('/img/pages/12_1.jpg')">
        <img src="/img/pages/12_1.jpg" alt="" />
      </div>
      <div class="text">
        <div id="p12p1t_" class="title"></div>
        <div id="p12p1_" class="desc"></div>
      </div>
    </div>
    <div class="content content3">
      <div class="text">
        <div id="p12p2t_" class="title"></div>
        <div id="p12p2_" class="desc"></div>
      </div>
      <div class="image" v-on:click="showImage('/img/pages/12_2.jpg')">
        <img src="/img/pages/12_2.jpg" alt="" />
      </div>
    </div>
    <div class="content content4">
      <div class="image" v-on:click="showImage('/img/pages/12_3.jpg')">
        <img src="/img/pages/12_3.jpg" alt="" />
      </div>
      <div class="text">
        <div id="p12p3t_" class="title"></div>
        <div id="p12p3_" class="desc"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page12",
  mounted() {
    let ref = this;
    ref.processText("p12pt");
    ref.processText("p12p1t");
    ref.processText("p12p1");
    ref.processText("p12p2t");
    ref.processText("p12p2");
    ref.processText("p12p3t");
    ref.processText("p12p3");
    window
      .jQuery("body")
      .on(
        "DOMSubtreeModified",
        "#p12pt,#p12p1t,#p12p1,#p12p2t,#p12p2,#p12p3t,#p12p3",
        function () {
          ref.processText(window.jQuery(this).attr("id"));
        }
      );
  },
  methods: {
    processText(id) {
      let text = document.getElementById(id).textContent;
      let r = text.split(".");
      document.getElementById(id + "_").innerHTML = "";
      window.jQuery.each(r, function (i, w) {
        var node = document.createElement("span");
        var textnode = document.createTextNode(
          w + (id.slice(-1) == "t" || id.slice(-1) == "s" ? "" : ".")
        );
        node.appendChild(textnode);
        document.getElementById(id + "_").appendChild(node);
      });
    },
    showImage(url) {
      this.$parent.showImage(url);
    },
  },
};
</script>