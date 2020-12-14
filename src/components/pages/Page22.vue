<style lang="scss">
.p23 {
  background-image: url("/img/pages/22.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    position: absolute;
    top: 175px;
    width: 153px;

    padding-left: 20px;
    padding-right: 20px;

    text-align: justify;

    font-size: 0.5rem;
    line-height: 10px;

    text-indent: 10px;
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p22p1">{{ $t("p22.paragraph1") }}</div>
    </div>

    <div id="p22p1_" class="content"></div>
  </div>
</template>

<script>
export default {
  name: "Page22",
  mounted() {
    let ref = this;
    ref.processText("p22p1");
    window.jQuery("body").on("DOMSubtreeModified", "#p22p1", function () {
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