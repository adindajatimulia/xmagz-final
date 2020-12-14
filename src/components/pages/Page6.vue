<style lang="scss">
.p7 {
  background-image: url("/img/pages/6.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    position: absolute;
    top: 53px;
    display: grid;
    grid-template-columns: 50% 50%;
    font-size: 0.7rem;

    @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
      font-size: 0.5rem;
      top: 39px;
      line-height: 10px;
    }

    @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
      font-size: 0.65rem;
      top: 45px;
      line-height: 11px;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      font-size: 0.5rem;
      top: 35px;
      line-height: 10px;
    }

    .col {
      text-align: justify;

      &.col-1 {
        padding-left: 35px;
        padding-right: 10px;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          padding-left: 26px;
        }

        @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
          padding-left: 29px;
        }

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          padding-left: 26px;
        }
      }

      &.col-2 {
        padding-left: 10px;
        padding-right: 35px;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          padding-right: 26px;
        }

        @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
          padding-right: 29px;
        }

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          padding-right: 26px;
        }
      }

      .text1 {
        text-indent: 10px;
      }

      .text {
        text-indent: 10px;
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p6p1">{{ $t("p6.paragraph1") }}</div>
      <div id="p6p2">{{ $t("p6.paragraph2") }}</div>
    </div>
    <div class="content">
      <div class="col col-1">
        <div id="p6p1_" class="text1"></div>
      </div>
      <div class="col col-2">
        <div id="p6p2_" class="text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page6",
  mounted() {
    let ref = this;
    ref.processText("p6p1");
    ref.processText("p6p2");
    window.jQuery("body").on("DOMSubtreeModified", "#p6p1, #p6p2", function () {
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