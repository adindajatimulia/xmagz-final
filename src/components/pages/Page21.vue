<style lang="scss">
.p22 {
  background-image: url("/img/pages/21.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .title {
    position: absolute;
    top: 27px;
    left: 30px;
    width: 240px;

    color: #ffffff;

    span {
      font-weight: 700;
    }
  }

  .content {
    position: absolute;
    top: 180px;

    font-size: 0.5rem;
    line-height: 10px;

    padding-left: 20px;
    padding-right: 20px;

    .text1 {
      text-align: center;
      margin-bottom: 5px;
    }

    .text2 {
      text-align: justify;
      text-indent: 10px;
    }
  }

  .image1 {
    position: absolute;
    top: 340px;
    left: 20px;

    height: 88.38px;
    width: 210px;

    cursor: pointer;
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p21t">{{ $t("p21.title") }}</div>
      <div id="p21p1">{{ $t("p21.paragraph1") }}</div>
      <div id="p21p2">{{ $t("p21.paragraph2") }}</div>
    </div>

    <div id="p21t_" class="title"></div>
    <div class="content">
      <div id="p21p1_" class="text1"></div>
      <div id="p21p2_" class="text2"></div>
    </div>

    <img
      class="image1"
      src="/img/pages/21_1.jpg"
      alt=""
      v-on:click="showImage('/img/pages/21_1.jpg')"
    />
  </div>
</template>

<script>
export default {
  name: "Page21",
  mounted() {
    let ref = this;
    ref.processText("p21t");
    ref.processText("p21p1");
    ref.processText("p21p2");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p21t,#p21p1,#p21p2", function () {
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