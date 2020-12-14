<style lang="scss">
.p26 {
  background-image: url("/img/pages/25.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .title {
    font-size: 1rem;
    color: #ffffff;
    line-height: 19px;

    position: absolute;
    top: 38px;
    left: 30px;

    width: 249px;

    span {
      font-weight: 700;
    }
  }

  .row1 {
    display: grid;
    grid-template-columns: 50% 50%;

    position: absolute;
    top: 96px;

    .image {
      display: flex;

      img {
        margin: auto;
        width: 120px;
        max-height: 100%;
      }
    }

    .text {
      font-size: 0.45rem;
      text-align: justify;
      line-height: 9px;

      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .row2 {
    display: grid;
    grid-template-columns: 50% 50%;

    position: absolute;
    top: 275px;

    .text {
      font-size: 0.45rem;
      text-align: justify;
      line-height: 9px;

      padding-left: 10px;
      padding-right: 10px;

      &:first-child {
        padding-left: 22px;
        padding-right: 22px;
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p25t">{{ $t("p25.title") }}</div>
      <div id="p25p1">{{ $t("p25.paragraph1") }}</div>
      <div id="p25p2">{{ $t("p25.paragraph2") }}</div>
      <div id="p25p3">{{ $t("p25.paragraph3") }}</div>
    </div>

    <div id="p25t_" class="title"></div>
    <div class="row1">
      <div class="image">
        <img src="/img/pages/25_1.jpg" alt="" srcset="" />
      </div>
      <div id="p25p1_" class="text"></div>
    </div>
    <div class="row2">
      <div id="p25p2_" class="text"></div>
      <div id="p25p3_" class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page25",
  mounted() {
    let ref = this;
    ref.processText("p25t");
    ref.processText("p25p1");
    ref.processText("p25p2");
    ref.processText("p25p3");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p25t,#p25p1,#p25p2,#p25p3", function () {
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
    showImage(url) {
      this.$parent.showImage(url);
    },
  },
};
</script>