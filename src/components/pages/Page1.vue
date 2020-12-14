<style lang="scss">
.p2 {
  background-image: url("/img/pages/1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    color: #ffffff;
    position: absolute;
    top: 250px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 175px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 215px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 165px;
    }

    .title {
      text-align: center;
      margin-bottom: 8px;

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        margin-bottom: 0px;
      }

      span {
        font-weight: 700;
        font-size: 2rem;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          font-size: 1.6rem;
        }

        @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
          font-size: 1.6rem;
        }

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          margin-bottom: 0px;
          font-size: 1.6rem;
        }
      }
    }

    .text {
      font-size: 0.8rem;
      text-align: center;
      line-height: 14px;
      padding-left: 36px;
      padding-right: 36px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        font-size: 0.5rem;
        line-height: 10px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        font-size: 0.7rem;
        line-height: 12px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        font-size: 0.5rem;
        line-height: 9px;
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p1t">{{ $t("p1.title") }}</div>
      <div id="p1p1">{{ $t("p1.paragraph1") }}</div>
    </div>
    <div class="content">
      <div id="p1t_" class="title"></div>
      <div id="p1p1_" class="text paragraph1"></div>
    </div>
  </div>
</template>

<script>
import jQuery from "jquery";

window.jQuery = jQuery;

export default {
  name: "Page1",
  mounted() {
    let ref = this;
    ref.processText("p1t");
    ref.processText("p1p1");
    window.jQuery("body").on("DOMSubtreeModified", "#p1t, #p1p1", function () {
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
        console.log(id.slice(-1));
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