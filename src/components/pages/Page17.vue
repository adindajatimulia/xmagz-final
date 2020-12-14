<style lang="scss">
.p18 {
  background-image: url("/img/pages/17.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    position: absolute;
    top: 170px;

    padding-left: 20px;
    padding-right: 20px;

    display: grid;
    grid-template-columns: 50% 50%;

    text-align: justify;

    .content1 {
      padding-right: 5px;

      .text {
        &::first-letter {
          color: #000000;
          font-size: 2rem;
          float: left;
          line-height: 30px;
        }
      }
    }

    .content2 {
      padding-left: 5px;
    }

    .title {
      span {
        color: $secondary-color;

        font-size: 1.3rem;
        font-style: italic;
        font-weight: 700;
      }
    }

    .text {
      font-size: 0.5rem;
      line-height: 11px;
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p17t">{{ $t("p17.title") }}</div>
      <div id="p17p1">{{ $t("p17.paragraph1") }}</div>
      <div id="p17p2">{{ $t("p17.paragraph2") }}</div>
    </div>

    <div class="content">
      <div class="content1">
        <div id="p17t_" class="title"></div>
        <div id="p17p1_" class="text"></div>
      </div>
      <div class="content2">
        <div id="p17p2_" class="text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page17",
  mounted() {
    let ref = this;
    ref.processText("p17t");
    ref.processText("p17p1");
    ref.processText("p17p2");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p17t,#p17p1,#p17p2", function () {
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