<style lang="scss">
.p10 {
  background-image: url("/img/pages/9.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content1 {
    position: absolute;
    top: 55px;
    left: 30px;
    width: 229px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 37px;
      left: 22px;
      width: 234px;
      line-height: 15px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 45px;
      left: 24px;
      width: 211px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 25px;
      left: 22px;
      width: 197px;
    }

    .title {
      span {
        color: #ffffff;
        font-weight: 600;
        font-size: 1.1rem;
        line-height: 1px;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          font-size: 0.8rem;
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
    color: #ffffff;
    position: absolute;
    top: 119px;
    left: 31px;
    width: 203px;
    text-align: justify;
    text-indent: 10px;
    line-height: 12px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 87px;
      left: 23px;
      width: 144px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 104px;
      left: 26px;
      width: 174px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 80px;
      left: 22px;
      width: 136px;
    }

    .text {
      font-size: 0.69rem;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        font-size: 0.5rem;
        line-height: 8px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        font-size: 0.6rem;
        line-height: 10px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        font-size: 0.465rem;
        line-height: 8px;
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
      <div id="p9t">{{ $t("p9.title") }}</div>
      <div id="p9p1">{{ $t("p9.paragraph1") }}</div>
      <div id="p9p2">{{ $t("p9.paragraph2") }}</div>
      <div id="p9p3">{{ $t("p9.paragraph3") }}</div>
      <div id="p9p4">{{ $t("p9.paragraph4") }}</div>
    </div>

    <div class="content1">
      <div id="p9t_" class="title"></div>
    </div>

    <div class="content2">
      <div id="p9p1_" class="text"></div>
      <div id="p9p2_" class="text"></div>
      <div id="p9p3_" class="text"></div>
      <div id="p9p4_" class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page9",
  mounted() {
    let ref = this;
    ref.processText("p9t");
    ref.processText("p9p1");
    ref.processText("p9p2");
    ref.processText("p9p3");
    ref.processText("p9p4");
    window
      .jQuery("body")
      .on(
        "DOMSubtreeModified",
        "#p9t, #p9p1, #p9p2, #p9p3, #p9p4",
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
  },
};
</script>