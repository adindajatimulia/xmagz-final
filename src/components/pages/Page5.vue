<style lang="scss">
.p6 {
  background-image: url("/img/pages/5.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content1 {
    position: absolute;
    top: 235px;
    left: 10px;
    width: 444px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 162px;
      width: 399px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 201px;
      width: 358px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 152px;
      width: 297px;
    }

    .title {
      span {
        font-size: 1.4rem;
        color: #ffffff;
        font-weight: 700;
        line-height: 20px;

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
  }

  .content2 {
    position: absolute;
    top: 302px;
    left: 43px;
    width: 404px;
    text-align: justify;
    text-indent: 10px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 217px;
      left: 29px;
      width: 286px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 259px;
      left: 31px;
      width: 356px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 204px;
      left: 29px;
      width: 270px;
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
      <div id="p5t">{{ $t("p5.title") }}</div>
      <div id="p5p1">{{ $t("p5.paragraph1") }}</div>
      <div id="p5p2">{{ $t("p5.paragraph2") }}</div>
    </div>
    <div class="content1">
      <div id="p5t_" class="title"></div>
    </div>
    <div class="content2">
      <div id="p5p1_" class="text text1"></div>
      <div id="p5p2_" class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page5",
  mounted() {
    let ref = this;
    ref.processText("p5t");
    ref.processText("p5p1");
    ref.processText("p5p2");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p5t, #p5p1, #p5p2", function () {
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