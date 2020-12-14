<style lang="scss" scoped>
.p16 {
  background-image: url("/img/pages/15.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content1 {
    position: absolute;
    top: 352px;

    font-size: 1.5rem;

    padding-left: 46px;
    padding-right: 46px;

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 229px;

      font-size: 1rem;

      padding-left: 30px;
      padding-right: 30px;
    }
  }

  .content2 {
    position: absolute;
    top: 439px;

    display: grid;
    grid-template-columns: 50% 50%;

    padding-left: 46px;
    padding-right: 46px;

    font-size: 0.7rem;
    line-height: 12px;
    text-align: justify;

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 282px;

      font-size: 0.5rem;
      line-height: 9px;

      padding-left: 30px;
      padding-right: 30px;
    }

    div:first-child {
      padding-right: 5px;

      &::first-letter {
        color: #000000;
        font-size: 3rem;
        float: left;
        line-height: 40px;

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          font-size: 2rem;
          line-height: 27px;
        }
      }
    }

    div:last-child {
      padding-left: 10px;

      text-indent: 10px;
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p15t">{{ $t("p15.title") }}</div>
      <div id="p15p1">{{ $t("p15.paragraph1") }}</div>
      <div id="p15p2">{{ $t("p15.paragraph2") }}</div>
    </div>

    <div id="p15t_" class="content1"></div>
    <div class="content2">
      <div id="p15p1_"></div>
      <div id="p15p2_"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page15",
  mounted() {
    let ref = this;
    ref.processText("p15t");
    ref.processText("p15p1");
    ref.processText("p15p2");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p15t,#p15p1,#p15p2", function () {
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