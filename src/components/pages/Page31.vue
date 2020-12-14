<style lang="scss">
.p32 {
  background-image: url("/img/pages/31.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .title {
    position: absolute;
    top: 160px;
    left: 82px;
    color: #ffffff;
    font-size: 1.7rem;

    span {
      font-weight: 700;
    }
  }

  .text {
    position: absolute;
    top: 198px;
    left: 17px;
    color: #ffffff;
    text-align: center;
    font-size: 0.5rem;
    line-height: 11px;
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p31t">{{ $t("p31.title") }}</div>
      <div id="p31p1">{{ $t("p31.paragraph1") }}</div>
    </div>

    <div id="p31t_" class="title"></div>
    <div id="p31p1_" class="text"></div>
  </div>
</template>

<script>
export default {
  name: "Page31",
  mounted() {
    let ref = this;
    ref.processText("p31t");
    ref.processText("p31p1");
    window.jQuery("body").on("DOMSubtreeModified", "#p31t,#p31p1", function () {
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