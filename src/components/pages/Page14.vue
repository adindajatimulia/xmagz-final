<style lang="scss">
.p15 {
  background-image: url("/img/pages/14.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    text-align: justify;
    font-size: 0.7rem;
    line-height: 14px;
    text-indent: 10px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      font-size: 0.5rem;
      line-height: 9px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      font-size: 0.65rem;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      font-size: 0.5rem;
      line-height: 9px;
    }

    &.content1 {
      position: absolute;
      top: 50px;
      left: 20px;
      width: 368px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        top: 35px;
        width: 275px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        top: 35px;
        width: 275px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        top: 40px;
        width: 230px;
      }

      span {
        font-weight: 700;
      }
    }

    &.content2 {
      position: absolute;
      top: 100px;
      display: grid;
      grid-template-columns: 50% 50%;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        top: 78px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        top: 35px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        top: 71px;
      }

      & > div {
        &:first-child {
          color: #ffffff;
          padding-left: 24px;
        }

        padding-left: 10px;
        padding-right: 10px;
      }
    }

    &.content4 {
      position: absolute;
      top: 412px;
      left: 24px;
      width: 220px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        top: 296px;
        width: 141px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        top: 296px;
        width: 141px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        top: 280px;
        width: 141px;
      }
    }

    &.content5 {
      position: absolute;
      top: 518px;
      left: 258px;
      width: 220px;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        top: 375px;
        left: 186px;
        width: 152px;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
        top: 375px;
        left: 186px;
        width: 152px;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        top: 359px;
        left: 176px;
        width: 146px;
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p14t">{{ $t("p14.title") }}</div>
      <div id="p14p1">{{ $t("p14.paragraph1") }}</div>
      <div id="p14p2">{{ $t("p14.paragraph2") }}</div>
      <div id="p14p3">{{ $t("p14.paragraph3") }}</div>
      <div id="p14p4">{{ $t("p14.paragraph4") }}</div>
      <div id="p14p5">{{ $t("p14.paragraph5") }}</div>
    </div>

    <div id="p14t_" class="content content1"></div>
    <div class="content content2">
      <div>
        <div id="p14p1_"></div>
        <div id="p14p2_"></div>
      </div>
      <div id="p14p3_" class="content content3"></div>
    </div>
    <div id="p14p4_" class="content content4"></div>
    <div id="p14p5_" class="content content5"></div>
  </div>
</template>

<script>
export default {
  name: "Page14",
  mounted() {
    let ref = this;
    ref.processText("p14t");
    ref.processText("p14p1");
    ref.processText("p14p2");
    ref.processText("p14p3");
    ref.processText("p14p4");
    ref.processText("p14p5");
    window
      .jQuery("body")
      .on(
        "DOMSubtreeModified",
        "#p14t,#p14p1,#p14p2,#p14p3,#p14p4,#p14p5",
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