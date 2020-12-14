<style lang="scss">
.p4 {
  background-image: url("/img/pages/3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content1 {
    position: absolute;
    top: 110px;
    left: 20px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 75px;
      left: 10px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 95px;
      left: 10px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 70px;
      left: 10px;
    }

    .title {
      span {
        color: #000000;
        font-weight: 700;
        font-size: 1.7rem;
        letter-spacing: 3px;
        line-height: 1px;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          font-size: 1.1rem;
        }

        @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
          font-size: 1.2rem;
        }

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          font-size: 1rem;
        }
      }
    }

    .subtitle {
      span {
        color: #ffffff;
        font-weight: 600;
        letter-spacing: 3px;
        font-size: 1.7rem;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          font-size: 1.1rem;
        }

        @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
          font-size: 1.2rem;
        }

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          font-size: 1rem;
        }
      }
    }
  }

  .content2 {
    position: absolute;
    top: 228px;
    width: 264px;
    left: 215px;
    font-size: 0.7rem;
    text-align: justify;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 162px;
      width: 172px;
      left: 155px;
      font-size: 0.5rem;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 202px;
      width: 210px;
      left: 185px;
      font-size: 0.65rem;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 134px;
      width: 177px;
      left: 141px;
      font-size: 0.5rem;
    }

    .text1,
    .text2,
    .text3 {
      line-height: 14px;
      margin-top: 5px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        line-height: 10px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        line-height: 11px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        line-height: 11px;
      }
    }

    .text2,
    .text3 {
      text-indent: 10px;
    }

    .text1::first-letter {
      color: #a9203e;
      font-size: 3rem;
      float: left;
      line-height: 40px;
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p3t">{{ $t("p3.title") }}</div>
      <div id="p3s">{{ $t("p3.subtitle") }}</div>
      <div id="p3p1">{{ $t("p3.paragraph1") }}</div>
      <div id="p3p2">{{ $t("p3.paragraph2") }}</div>
      <div id="p3p3">{{ $t("p3.paragraph3") }}</div>
    </div>
    <div class="content1">
      <div id="p3t_" class="title"></div>
      <div id="p3s_" class="subtitle"></div>
    </div>

    <div class="content2">
      <div id="p3p1_" class="text1"></div>
      <div id="p3p2_" class="text2"></div>
      <div id="p3p3_" class="text3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page3",
  mounted() {
    let ref = this;
    ref.processText("p3t");
    ref.processText("p3s");
    ref.processText("p3p1");
    ref.processText("p3p2");
    ref.processText("p3p3");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p3t, #p3s, #p3p1, #p3p2, #p3p3", function () {
        ref.processText(window.jQuery(this).attr("id"));
      });
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
  },
};
</script>