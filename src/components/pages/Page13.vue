<style lang="scss">
.p14 {
  background-image: url("/img/pages/13.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content1 {
    color: #ffffff;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 150px;

    .title {
      font-size: 2rem;
      line-height: 30px;

      @media (min-width: $breakpoint-sm) and (max-width: ($breakpoint-xl - 1px)) {
        font-size: 1.5rem;
        line-height: 25px;
      }

      span {
        font-weight: 700;
      }
    }

    .subtitle {
      font-size: 1rem;

      @media (min-width: $breakpoint-sm) and (max-width: ($breakpoint-xl - 1px)) {
        font-size: 0.8rem;
        line-height: 15px;
      }
    }
  }

  .row {
    position: absolute;
    top: 335px;
    display: grid;
    grid-template-columns: 34% 66%;
    font-size: 0.7rem;
    text-align: justify;
    text-indent: 10px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      top: 240px;
      font-size: 0.6rem;
      line-height: 10px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      top: 290px;
      font-size: 0.65rem;
      line-height: 13px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 220px;
      font-size: 0.5rem;
      line-height: 10px;
    }

    .content2 {
      color: #ffffff;
      padding-left: 15px;
      padding-right: 15px;
    }

    .content3 {
      padding-left: 15px;
      padding-right: 15px;
    }

    .content3 {
      padding-left: 15px;
      padding-right: 15px;
    }

    .content4 {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p13t">{{ $t("p13.title") }}</div>
      <div id="p13s">{{ $t("p13.subtitle") }}</div>
      <div id="p13p1">{{ $t("p13.paragraph1") }}</div>
      <div id="p13p2">{{ $t("p13.paragraph2") }}</div>
      <div id="p13p3">{{ $t("p13.paragraph3") }}</div>
    </div>

    <div class="content1">
      <div id="p13t_" class="title"></div>
      <div id="p13s_" class="subtitle"></div>
    </div>

    <div class="row">
      <div id="p13p1_" class="content2"></div>
      <div>
        <div id="p13p2_" class="content3"></div>
        <div id="p13p3_" class="content4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page13",
  mounted() {
    let ref = this;
    ref.processText("p13t");
    ref.processText("p13s");
    ref.processText("p13p1");
    ref.processText("p13p2");
    ref.processText("p13p3");
    window
      .jQuery("body")
      .on(
        "DOMSubtreeModified",
        "#p13t,#p13s,#p13p1,#p13p2,#p13p3",
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