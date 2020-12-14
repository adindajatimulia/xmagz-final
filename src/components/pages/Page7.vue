<style lang="scss">
.p8 {
  background-image: url("/img/pages/7.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content1 {
    position: absolute;
    top: 204px;
    left: 60px;
    width: 270px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 139px;
      left: 43px;
      width: 197px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 172px;
      left: 50px;
      width: 211px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 130px;
      left: 39px;
      width: 197px;
    }

    .title {
      span {
        color: #ffffff;
        font-weight: 600;
        font-size: 1.1rem;
        line-height: 1px;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          font-size: 0.5rem;
        }

        @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
          font-size: 0.8rem;
        }

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          font-size: 0.8rem;
        }
      }
    }
  }

  .content2 {
    position: absolute;
    top: 263px;
    left: 28px;
    width: 240px;
    text-align: justify;
    text-indent: 10px;
    line-height: 13px;
    font-size: 0.7rem;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 187px;
      left: 19px;
      width: 171px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 229px;
      left: 27px;
      width: 207px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 172px;
      left: 24px;
      width: 166px;
    }

    .text {
      font-size: 0.7rem;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        font-size: 0.5rem;
        line-height: 9px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        font-size: 0.65rem;
        line-height: 11px;
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
      <div id="p7t">{{ $t("p7.title") }}</div>
      <div id="p7p1">{{ $t("p7.paragraph1") }}</div>
      <div id="p7p2">{{ $t("p7.paragraph2") }}</div>
      <div id="p7p3">{{ $t("p7.paragraph3") }}</div>
    </div>
    <div class="content1">
      <div id="p7t_" class="title"></div>
    </div>

    <div class="content2">
      <div id="p7p1_" class="text text1"></div>
      <div id="p7p2_" class="text"></div>
      <div id="p7p3_" class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page7",
  mounted() {
    let ref = this;
    ref.processText("p7t");
    ref.processText("p7p1");
    ref.processText("p7p2");
    ref.processText("p7p3");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p7t, #p7p1, #p7p2, #p7p3", function () {
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