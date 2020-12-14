<style lang="scss">
.p21 {
  background-image: url("/img/pages/20.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    position: absolute;
    top: 60px;
    width: 191px;

    text-align: justify;

    .text {
      font-size: 0.5rem;
      line-height: 10px;

      padding-left: 20px;
      padding-right: 10px;

      &::first-letter {
        color: $secondary-color-v;
        font-size: 2rem;
        font-weight: 600;
        float: left;
        line-height: 30px;
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p20p1">{{ $t("p20.paragraph1") }}</div>
    </div>

    <div class="content">
      <div id="p20p1_" class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page20",
  mounted() {
    let ref = this;
    ref.processText("p20p1");
    window.jQuery("body").on("DOMSubtreeModified", "#p20p1", function () {
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