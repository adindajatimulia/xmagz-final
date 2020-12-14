<style lang="scss">
.p30 {
  background-image: url("/img/pages/29.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .title {
    position: absolute;
    top: 52px;
    left: 30px;

    color: #ffffff;
    font-size: 1.4rem;
    line-height: 23px;

    width: 182px;

    span {
      font-weight: 700;
    }
  }

  .text1 {
    position: absolute;
    top: 158px;
    right: 0px;
    width: 200px;

    text-align: justify;

    padding-right: 20px;

    color: #ffffff;

    font-size: 0.5rem;
    line-height: 10px;
  }

  .text2 {
    position: absolute;
    top: 294px;
    width: 329px;

    text-align: justify;

    padding-left: 30px;
    padding-right: 30px;

    font-size: 0.5rem;
    line-height: 8px;
  }

  .text3 {
    position: absolute;
    top: 359px;
    width: 329px;

    text-align: justify;

    padding-left: 30px;
    padding-right: 30px;

    font-size: 0.5rem;
    line-height: 8px;
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p29t">{{ $t("p29.title") }}</div>
      <div id="p29p1">{{ $t("p29.paragraph1") }}</div>
      <div id="p29p2">{{ $t("p29.paragraph2") }}</div>
      <div id="p29p3">{{ $t("p29.paragraph3") }}</div>
    </div>

    <div id="p29t_" class="title"></div>
    <div id="p29p1_" class="text1"></div>
    <div id="p29p2_" class="text2"></div>
    <div id="p29p3_" class="text3"></div>
  </div>
</template>

<script>
export default {
  name: "Page29",
  mounted() {
    let ref = this;
    ref.processText("p29t");
    ref.processText("p29p1");
    ref.processText("p29p2");
    ref.processText("p29p3");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p29t,#p29p1,#p29p2,#p29p3", function () {
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