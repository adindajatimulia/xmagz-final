<style lang="scss">
.p5 {
  background-image: url("/img/pages/4.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    position: absolute;
    top: 363px;
    display: grid;
    grid-template-columns: 50% 50%;
    font-size: 0.7rem;
    line-height: 14px;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      font-size: 0.5rem;
      top: 259px;
      line-height: 10px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      font-size: 0.65rem;
      top: 315px;
      line-height: 11px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      font-size: 0.5rem;
      top: 227px;
      line-height: 10px;
    }

    .col {
      padding-left: 30px;
      padding-right: 30px;
      text-align: justify;

      .text1 {
        text-indent: 10px;
      }

      .text {
        margin-top: 5px;
        text-indent: 10px;
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p4p1">{{ $t("p4.paragraph1") }}</div>
      <div id="p4p2">{{ $t("p4.paragraph2") }}</div>
      <div id="p4p3">{{ $t("p4.paragraph3") }}</div>
      <div id="p4p4">{{ $t("p4.paragraph4") }}</div>
    </div>
    <div class="content">
      <div class="col">
        <div id="p4p1_" class="text1"></div>
        <div id="p4p2_" class="text"></div>
      </div>
      <div class="col">
        <div id="p4p3_" class="text1"></div>
        <div id="p4p4_" class="text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page4",
  mounted() {
    let ref = this;
    ref.processText("p4p1");
    ref.processText("p4p2");
    ref.processText("p4p3");
    ref.processText("p4p4");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p4p1, #p4p2, #p4p3, #p4p4", function () {
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