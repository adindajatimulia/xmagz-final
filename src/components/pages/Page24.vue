<style lang="scss" scoped>
.p25 {
  background-image: url("/img/pages/24.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    display: flex;
    flex-flow: column;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;

    font-size: 0.6rem;
    line-height: 10px;

    padding-left: 30px;
    padding-right: 30px;

    .text1 {
      text-align: center;
      margin-top: auto;
      margin-bottom: 15px;
    }

    .text2 {
      text-align: center;
      margin-bottom: auto;
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p24p1">{{ $t("p24.paragraph1") }}</div>
      <div id="p24p2">{{ $t("p24.paragraph2") }}</div>
    </div>

    <div class="content">
      <div id="p24p1_" class="text1"></div>
      <div id="p24p2_" class="text2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page24",
  mounted() {
    let ref = this;
    ref.processText("p24p1");
    ref.processText("p24p2");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p24p1,#p24p2", function () {
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