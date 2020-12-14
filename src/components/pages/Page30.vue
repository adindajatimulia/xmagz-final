<style lang="scss" scoped>
.p31 {
  background-image: url("/img/pages/30.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .text1 {
    position: absolute;
    top: 30px;
    left: 15px;

    color: #ffffff;
    font-size: 0.5rem;
    text-align: justify;
    line-height: 9px;

    width: 242px;
  }

  .content {
    position: absolute;
    top: 118px;
    right: 0px;

    font-size: 0.5rem;
    text-align: justify;
    line-height: 9px;

    width: 244px;
    padding-right: 15px;
  }

  .image {
    position: absolute;
    top: 244px;
    right: 22px;

    width: 211px;
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p30p1">{{ $t("p30.paragraph1") }}</div>
      <div id="p30p2">{{ $t("p30.paragraph2") }}</div>
      <div id="p30p3">{{ $t("p30.paragraph3") }}</div>
    </div>

    <div id="p30p1_" class="text1"></div>
    <div class="content">
      <div id="p30p2_" class="text2"></div>
      <div id="p30p3_" class="text3"></div>
    </div>

    <img src="/img/w.jpeg" alt="" class="image" />
  </div>
</template>

<script>
export default {
  name: "Page30",
  mounted() {
    let ref = this;
    ref.processText("p30p1");
    ref.processText("p30p2");
    ref.processText("p30p3");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p29p1,#p29p2,#p29p3", function () {
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