<style lang="scss" scoped>
.p24 {
  background-image: url("/img/pages/23.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    position: absolute;
    top: 228px;

    color: #ffffff;
    text-align: justify;
    text-indent: 10px;

    font-size: 0.5rem;
    line-height: 10px;

    padding-left: 20px;
    padding-right: 20px;

    .row1 {
      display: grid;
      grid-template-columns: 50% 50%;

      .image {
        display: flex;

        img {
          margin: auto;

          height: 120px;
          width: 120px;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p23p1">{{ $t("p23.paragraph1") }}</div>
      <div id="p23p2">{{ $t("p23.paragraph2") }}</div>
    </div>

    <div class="content">
      <div class="row1">
        <div id="p23p1_" class="text"></div>
        <div class="image">
          <img
            src="/img/pages/23_1.jpg"
            alt=""
            v-on:click="showImage('/img/pages/23_1.jpg')"
          />
        </div>
      </div>
      <div>
        <div id="p23p2_" class="text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page23",
  mounted() {
    let ref = this;
    ref.processText("p23p1");
    ref.processText("p23p2");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p23p1,#p23p2", function () {
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