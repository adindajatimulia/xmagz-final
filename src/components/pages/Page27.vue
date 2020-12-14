<style lang="scss">
.p28 {
  background-image: url("/img/pages/27.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .title {
    position: absolute;
    top: 35px;
    left: 20px;

    font-size: 1rem;
    line-height: 17px;

    width: 150px;

    span {
      font-weight: 700;
    }
  }

  .text1 {
    position: absolute;
    top: 97px;

    padding-left: 20px;
    padding-right: 20px;

    text-align: justify;

    font-size: 0.5rem;
    line-height: 9px;

    &::first-letter {
      font-size: 2rem;
      font-weight: 600;
      float: left;
      line-height: 27px;
    }
  }

  .content {
    position: absolute;
    top: 195px;
    right: 0;
    width: 211px;

    padding-left: 20px;
    padding-right: 20px;

    text-align: justify;

    font-size: 0.5rem;
    line-height: 9px;

    .text2 {
      margin-bottom: 30px;
    }
  }

  .image1 {
    position: absolute;
    top: 200px;

    width: 100px;
    height: 118.5px;
  }

  .image2 {
    position: absolute;
    top: 323px;

    width: 100px;
    height: 118.5px;
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p27t">{{ $t("p27.title") }}</div>
      <div id="p27p1">{{ $t("p27.paragraph1") }}</div>
      <div id="p27p2">{{ $t("p27.paragraph2") }}</div>
      <div id="p27p3">{{ $t("p27.paragraph3") }}</div>
    </div>

    <div id="p27t_" class="title"></div>
    <div id="p27p1_" class="text1"></div>

    <div class="content">
      <div id="p27p2_" class="text2"></div>
      <div id="p27p3_" class="text3"></div>
    </div>

    <img class="image1" src="/img/a.jpg" alt="" />
    <img class="image2" src="/img/c.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Page27",
  mounted() {
    let ref = this;
    ref.processText("p27t");
    ref.processText("p27p1");
    ref.processText("p27p2");
    ref.processText("p27p3");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p27t,#p27p1,#p27p2,#p27p3", function () {
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