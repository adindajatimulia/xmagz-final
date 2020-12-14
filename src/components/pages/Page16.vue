<style lang="scss">
.p17 {
  background-image: url("/img/pages/16.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content1 {
    position: absolute;
    top: 10px;

    display: grid;
    grid-template-columns: 50% 50%;

    padding-left: 20px;
    padding-right: 20px;

    text-align: justify;

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      font-size: 0.5rem;
      line-height: 9px;
    }

    div:first-child {
      padding-right: 15px;
    }

    div:last-child {
      padding-left: 0px;
    }
  }

  .content2 {
    position: absolute;
    top: 10px;

    display: grid;
    grid-template-columns: 50% 50%;

    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      top: 172px;

      padding-left: 13.5px;
      padding-right: 20px;
    }

    img {
      width: 146px;
      height: 80px;
    }

    div:last-child {
      img {
        padding-left: 8px;
        width: 153px;
      }
    }
  }

  .content3 {
    position: absolute;
    top: 305px;

    display: grid;
    grid-template-columns: 50% 50%;

    padding-left: 20px;
    padding-right: 20px;

    text-align: justify;

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      font-size: 0.5rem;
      line-height: 9px;
    }

    div:first-child {
      padding-right: 15px;
    }

    div:last-child {
      padding-left: 0px;
    }
  }
}
</style>

<template>
  <div>
    <div style="display: none">
      <div id="p16p1">{{ $t("p16.paragraph1") }}</div>
      <div id="p16p2">{{ $t("p16.paragraph2") }}</div>
      <div id="p16p3">{{ $t("p16.paragraph3") }}</div>
      <div id="p16p4">{{ $t("p16.paragraph4") }}</div>
    </div>

    <div class="content1">
      <div id="p16p1_"></div>
      <div id="p16p2_"></div>
    </div>
    <div class="content2">
      <div>
        <img
          src="/img/pages/16_1.jpg"
          alt=""
          srcset=""
          v-on:click="showImage('/img/pages/16_1.jpg')"
        />
      </div>
      <div>
        <img
          src="/img/pages/16_2.jpg"
          alt=""
          srcset=""
          v-on:click="showImage('/img/pages/16_2.jpg')"
        />
      </div>
    </div>
    <div class="content3">
      <div id="p16p3_"></div>
      <div id="p16p4_"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page16",
  mounted() {
    let ref = this;
    ref.processText("p16p1");
    ref.processText("p16p2");
    ref.processText("p16p3");
    ref.processText("p16p4");
    window
      .jQuery("body")
      .on("DOMSubtreeModified", "#p16p1,#p16p2,#p16p3,#p16p4", function () {
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