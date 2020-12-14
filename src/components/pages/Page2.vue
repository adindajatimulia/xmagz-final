<style lang="scss">
.p3 {
  background-image: url("/img/pages/2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    top: 520px;
    position: absolute;
    right: 50px;
    width: 250px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 370px;
      width: 180px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 450px;
      width: 190px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 345px;
      width: 165px;
    }

    .title {
      text-align: right;
      margin-right: 37px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        margin-right: 20px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        margin-right: 20px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        margin-right: 20px;
      }

      span {
        color: $secondary-color-v;
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: 3px;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          font-size: 1rem;
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
      text-align: right;
      margin-right: 37px;
      margin-bottom: 12px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        line-height: 5px;
        margin-right: 20px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        line-height: 5px;
        margin-right: 20px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        line-height: 5px;
        margin-right: 20px;
      }

      span {
        font-weight: 500;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          font-size: 0.6rem;
          line-height: 5px;
        }

        @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
          font-size: 0.7rem;
        }

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          font-size: 0.55rem;
        }
      }
    }

    .text {
      text-align: right;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        line-height: 13px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        line-height: 13px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        line-height: 13px;
      }

      span {
        font-weight: 500;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          font-size: 0.6rem;
        }

        @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
          font-size: 0.7rem;
        }

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          font-size: 0.55rem;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p2t">{{ $t("p2.title") }}</div>
      <div id="p2s">{{ $t("p2.subtitle") }}</div>
      <div id="p2p1s">{{ $t("p2.paragraph1") }}</div>
    </div>
    <div class="content">
      <div id="p2t_" class="title"></div>
      <div id="p2s_" class="subtitle"></div>
      <div id="p2p1s_" class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page1",
  mounted() {
    let ref = this;
    ref.processText("p2t");
    ref.processText("p2s");
    ref.processText("p2p1s");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p2t, #p2s, #p2p1s", function () {
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