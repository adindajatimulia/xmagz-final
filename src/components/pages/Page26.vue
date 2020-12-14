<style lang="scss" scoped>
.p27 {
  background-image: url("/img/pages/26.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .text1 {
    position: absolute;
    top: 45px;
    left: 30px;
    width: 250px;

    color: #ffffff;
    font-size: 0.5rem;
    line-height: 10px;
  }

  .text2 {
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 200px;

    color: #ffffff;
    font-size: 0.5rem;
    line-height: 11px;
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p26p1">{{ $t("p26.paragraph1") }}</div>
      <div id="p26p2">{{ $t("p26.paragraph2") }}</div>
    </div>

    <div id="p26p1_" class="text1"></div>
    <div id="p26p2_" class="text2"></div>
  </div>
</template>

<script>
export default {
  name: "Page26",
  mounted() {
    let ref = this;
    ref.processText("p26p1");
    ref.processText("p26p2");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p26p1,#p26p2", function () {
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