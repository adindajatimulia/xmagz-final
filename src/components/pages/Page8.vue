<style lang="scss">
.p9 {
  background-image: url("/img/pages/8.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    position: absolute;
    top: 104px;
    left: 72px;
    width: 252px;
    text-align: justify;
    text-indent: 10px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 74px;
      left: 50px;
      width: 181px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 89px;
      left: 57px;
      width: 223px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 73px;
      left: 52px;
      width: 164px;
    }

    .text {
      font-size: 0.7rem;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        font-size: 0.5rem;
        line-height: 10px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        font-size: 0.65rem;
        line-height: 11px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        font-size: 0.5rem;
        line-height: 10px;
      }

      &.text1 {
        text-indent: 0px;
        margin-bottom: 5px;

        &::first-letter {
          color: #a9203e;
          font-size: 3rem;
          float: left;
          line-height: 40px;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p8p1">{{ $t("p8.paragraph1") }}</div>
      <div id="p8p2">{{ $t("p8.paragraph2") }}</div>
      <div id="p8p3">{{ $t("p8.paragraph3") }}</div>
    </div>
    <div class="content">
      <div id="p8p1_" class="text"></div>
      <div id="p8p2_" class="text"></div>
      <div id="p8p3_" class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page8",
  mounted() {
    let ref = this;
    ref.processText("p8p1");
    ref.processText("p8p2");
    ref.processText("p8p3");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p8p1, #p8p2, #p8p3", function () {
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