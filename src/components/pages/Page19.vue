<style lang="scss" scoped>
.p20 {
  background-image: url("/img/pages/19.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    position: absolute;
    display: grid;
    grid-template-columns: 50% 50%;

    text-align: justify;

    font-size: 0.5rem;
    line-height: 10px;

    top: 229px;
    padding-left: 20px;
    padding-right: 20px;

    .text {
      padding-left: 5px;
      padding-right: 5px;

      text-indent: 10px;

      &:first-child {
        text-indent: 0px;

        &::first-letter {
          color: #000000;
          font-size: 2rem;
          float: left;
          line-height: 30px;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p19p1">{{ $t("p19.paragraph1") }}</div>
      <div id="p19p2">{{ $t("p19.paragraph2") }}</div>
    </div>

    <div class="content">
      <div id="p19p1_" class="text"></div>
      <div id="p19p2_" class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page19",
  mounted() {
    let ref = this;
    ref.processText("p19p1");
    ref.processText("p19p2");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p19p1,#p19p2", function () {
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