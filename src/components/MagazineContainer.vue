<style lang="scss">

.cover{
  background-image: url("/img/cover.1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.magazine-container#blur.active{
  filter: blur(15px);
  // pointer-events: none;
  user-select: none;
}
.magazine-container.active{
    top: 50%;
    visibility: visible;
    opacity: 1;
    transform: 0.5s;
}

.magazine-container {
  display: flex;
  flex: 1;
  flex-flow: column;

  .header {
    display: flex;
    padding: 15px;
    transition: 500ms;
    position: relative;

    .menu-container,
    .menu-toggle {
      display: none;
    }

    @media (min-width: $breakpoint-sm) and (max-width: 480px) {
      .menu-toggle {
        display: block;
        background-color: #ffffff;
        bottom: 0;
        color: $primary-color;
        height: 40px;
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        top: 0;
        width: 40px;
      }

      .menu-container {
        display: flex;
        flex-flow: column;
        position: absolute;
        border-radius: 10px;
        width: auto;
        height: auto;
        z-index: 9998;
        top: 75px;
        visibility: hidden;
        opacity: 0;
        transition: 250ms;

        &.active {
          visibility: visible;
          opacity: 1;
        }

        .menu-btn {
          margin-top: 5px;
        }

        .language-list {
          display: flex;
          flex-flow: column;
          max-height: 10px;
          transition: 250ms;

          &.active {
            max-height: 145px;
          }

          .language {
            background-color: #ffffff;
            border: none;
            // font-size: 25px;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
            padding: 0px;
            border-radius: 50px;
            width: 33px;
            height: 33px;

            svg {
              display: block;
              fill: $primary-color-v;
              margin: auto;
            }

            &:hover {
              background-color: rgba($color: $secondary-color-v, $alpha: 0.7);
            }

            &:active {
              background-color: rgba($color: $secondary-color-v, $alpha: 0.7);
            }

            &.active {
              background-color: rgba($color: $secondary-color-v, $alpha: 0.7);
            }
          }
        }
      }
    }

    .search-group {
      margin: 0 auto;
      width: auto;
      position: relative;

      .search {
        background-color: $primary-color;
        border: 1px solid #ffffff;
        border-radius: 10px;
        color: #ffffff;
        display: block;
        font-weight: 400;
        padding: 20px;
        transition: 500ms;
        width: 200px;

        &::-webkit-input-placeholder {
          color: #ffffff;
        }

        &:hover::-webkit-input-placeholder,
        &:focus::-webkit-input-placeholder {
          color: $primary-color;
        }

        &:hover {
          background-color: #ffffff;
          color: $primary-color;
        }
      }
    }

    &.searchFocus {
      background-color: $primary-color;

      .menu-toggle {
        display: none;
      }

      .search {
        width: 300px;
        background-color: #ffffff;
        color: $primary-color;

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          width: 200px;
        }

        &::-webkit-input-placeholder {
          color: $primary-color;
        }
      }

      .search-close {
        opacity: 1;
      }
    }

    .search-close {
      position: absolute;
      right: -50px;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      background-color: #ffffff;
      color: $primary-color;
      width: 40px;
      height: 40px;
      opacity: 0;
    }
  }

  .search-wrapper {
    background-color: $primary-color;
    color: #ffffff;
    height: 100%;
    opacity: 0;
    position: absolute;
    transition: 500ms;
    width: 100%;

    &.searchFocus {
      opacity: 1;
      z-index: 99999;
    }

    .search-container {
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      flex-flow: column;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
      width: 30%;
      max-height: 100%;
      transition: max-height 500ms;

      @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
        width: 50%;
      }

      @media (min-width: $breakpoint-md) and (max-width: ($breakpoint-lg - 1px)) {
        width: 80%;
      }

      @media (min-width: 481px) and (max-width: ($breakpoint-md - 1px)) {
        width: 80%;
      }

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        width: 90%;
      }

      .search-result-title {
        color: $primary-color;
        border-bottom: 1px solid #eeeeee;
        padding-bottom: 10px;
      }

      .list-group {
        flex: 1;
        list-style-type: none;
        margin-top: 15px;
        max-height: 100%;
        overflow-y: auto;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
          width: 0px;
        }

        .list-group-item {
          border-bottom: 1px solid #eeeeee;
          border-radius: 10px;
          margin-bottom: 10px;
          width: 100%;
          padding: 10px;
          transition: 500ms;
          cursor: pointer;
          background-color: #f5f5f5;

          &:hover {
            background-color: $secondary-color-v;

            a {
              color: #ffffff;
            }
          }

          a {
            color: $primary-color;
            text-decoration: none;
          }
        }
      }
    }
  }

  .magazine-wrapper {
    align-items: center;
    display: flex;
    position: relative;
    flex: 1;
    overflow: hidden;
    position: relative;

    .zoom-wrapper {
      overflow: hidden;
      position: relative;
      height: 100%;
      width: 100%;

      .zoom {
        display: flex;
        min-height: 100%;
        height: 100%;

        .magazine {
          margin: auto;

          @media (min-width: $breakpoint-xl) {
            height: 693.11px;
            width: 980px;
          }

          @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
            height: 495.08px;
            width: 700px;
          }

          @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
            height: 600px;
            width: 420px;
          }

          @media (min-width: $breakpoint-sm) and (max-width: 480px) {
            height: 466.79px;
            width: 330px;
          }

          .p1 {
            .cover {
              height: 100%;
              visibility: hidden;

              video {
                display: none;
                position: fixed;
                top: 50%;
                left: 50%;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                z-index: -100;
                -webkit-transform: translateX(-50%) translateY(-50%);
                transform: translateX(-50%) translateY(-50%);
              }
            }
          }

          .page {
            background-color: #ffffff;
            font-size: 0.8rem;

            .highlight {
              background-color: #fff76a;
              color: #1f354c;
            }
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    padding: 15px;
    position: relative;
    bottom: 40px;
    transition: 500ms;

    &.searchFocus {
      background-color: $primary-color;

      .btn-comment {
        opacity: 0;
        top: 0px;
      }
    }

    .btn {
      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        opacity: 1;
      }

      opacity: 0;
      height: 40px;
      width: 40px;
    }

    .btn-comment {
      background-color: #ffffff;
      color: $primary-color-v;
      border-radius: 50px;
      height: 40px;
      position: absolute;
      margin-left: 0;
      margin-right: 0;
      left: 15px;
      width: 40px;

      &.active {
        color: $secondary-color-v;
        transform: scale(1.1);
      }
    }

    .comments-wrapper {
      background-color: rgba($color: $primary-color, $alpha: 1);
      color: $primary-color;
      border-radius: 10px;
      bottom: 70px;
      display: flex;
      flex-flow: column;
      height: 0px;
      left: 10px;
      padding: 10px;
      position: absolute;
      width: 400px;
      transition: opacity 500ms, height 250ms;
      -webkit-box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.3);
      box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.3);
      visibility: hidden;
      z-index: 9999;
      opacity: 0;

      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        width: calc(100% - 20px);
      }

      &.isActive {
        visibility: visible;
        height: 500px;
        opacity: 1;

        @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
          height: calc(100vh - 80px);
        }

        @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
          height: calc(100vh - 80px);
        }

        @media (min-width: $breakpoint-sm) and (max-width: 480px) {
          height: calc(100vh - 80px);
          width: calc(100% - 20px);
        }
      }

      .comments {
        flex: 1;
        display: flex;
        flex-flow: column;
        overflow: hidden;

        .comments-title {
          border-bottom: 1px solid $primary-color-v;
          padding: 10px;
          display: flex;

          .title {
            align-self: center;
            color: #ffffff;
            font-weight: 700;
          }

          button {
            margin-left: auto;
            width: 40px;

            &:hover {
              transform: scale(1);
            }

            &:active {
              transform: scale(0.9);
            }
          }
        }

        .comments-card {
          display: flex;
          flex: 1;
          flex-flow: column;
          font-size: 0.8rem;
          overflow: hidden;
          padding: 10px;

          .comments-list {
            flex: 1;
            list-style: none;
            max-height: 0;
            opacity: 0;
            overflow-y: auto;
            scroll-behavior: smooth;
            transition: 500ms;
            visibility: hidden;

            &.active {
              max-height: none;
              opacity: 1;
              visibility: visible;
            }

            &::-webkit-scrollbar {
              width: 5px;
            }

            &::-webkit-scrollbar-track {
              background: #eeeeee;
              border-radius: 50px;
            }

            &::-webkit-scrollbar-thumb {
              background: $secondary-color-v;
              border-radius: 10px;
            }

            li:last-child .comment {
              border-bottom: none;
            }

            .comment {
              border-bottom: 1px solid $primary-color-v;
              color: #ffffff;
              padding: 10px;

              .title {
                display: flex;

                .user {
                  background-color: $secondary-color-v;
                  border-radius: 50px;
                  display: flex;
                  color: #ffffff;
                  height: 50px;
                  width: 50px;
                  align-items: center;
                  justify-content: center;
                }

                .details {
                  display: flex;
                  flex: 1;
                  flex-flow: column;
                  justify-content: center;
                  line-height: 20px;
                  margin-left: 10px;
                }
              }

              .text {
                margin-top: 10px;
                line-height: 20px;
              }
            }
          }

          .comment-input {
            color: #ffffff;
            flex: 1;
            max-height: 0;
            opacity: 0;
            position: relative;
            transition: 500ms;
            visibility: hidden;

            &.active {
              max-height: none;
              visibility: visible;
              opacity: 1;
            }

            .input-group {
              display: flex;
              flex-flow: column;
              margin-bottom: 15px;

              label {
                margin-bottom: 5px;
              }

              input,
              textarea {
                border: 2px solid #dddddd;
                border-radius: 5px;
                padding: 8px;
                resize: none;
              }

              &.invalid {
                label {
                  color: $secondary-color-v;
                }

                input,
                textarea {
                  border: 2px solid $secondary-color-v;
                }
              }
            }

            button {
              height: 40px;
              // width: 40px;
              bottom: 10px;
            }
          }
        }
      }
    }

    &:not(.searchFocus) .tools-container:hover .btn {
      opacity: 1;
    }
  }
}

#image-modal {
  background-color: rgba($color: $primary-color, $alpha: 0.9);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  z-index: -9999;
  visibility: hidden;
  opacity: 0;
  transition: 500ms;

   //showImage zoom image
  &.active {
    z-index: 9999;
    visibility: visible;
    opacity: 1;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: 80%;
      max-width: 90%;
    }
  }
}



#table_of_contents {
  background-color: $primary-color;
  z-index: -9999;

  display: flex;
  flex-flow: column;

  position: absolute;
  top: 0;
  bottom: 0;
  left: -100vh;
  // right: 0;

  height: 100%;
  width: 100%;

  visibility: hidden;
  opacity: 0;

  transition: 500ms;

  &.active {
    z-index: 9999;

    visibility: visible;
    opacity: 1;

    left: 0;
  }

  .menu-container {
    padding: 20px;
    color: #ffffff;

    display: flex;

    .title {
      margin-top: auto;
      margin-bottom: auto;
    }

    .close {
      height: 40px;
      width: 40px;

      margin-left: auto;
    }
  }

  ul {
    list-style-type: none;
    flex: 1;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #eeeeee;
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
      background: $secondary-color-v;
      border-radius: 10px;
    }

    li {
      background-color: $primary-color-v;
      border-radius: 10px;
      color: #ffffff;
      font-size: 0.8rem;
      margin-left: 15px;
      margin-right: 15px;
      transition: 500ms;

      div {
        padding: 20px;
        margin-bottom: 10px;
      }
    }
  }
}

   body {font-family: Arial, Helvetica, sans-serif;}
    
    /* The Modal (background) */
    .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      
    }
    
    /* Modal Content */
    .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      border-radius:15px;
    }
    
    /* The Close Button */
    .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }

    * {
        box-sizing: border-box
      }
      body {
        font-family: Verdana, sans-serif;
        margin: 0
      }
      .mySlides {
        display: none
      }
      img {
        vertical-align: middle;
      }
      .slideshow-container {
          max-width: 700px;
          position: relative;
          margin: auto;
          background-color: black;
      }
      /* Next & previous buttons */
      .prev,
      .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -22px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
      }
      /* Position the "next button" to the right */
      .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }
      /* On hover, add a black background color with a little bit see-through */
      .prev:hover,
      .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
      /* Caption text */
      .text {
        color: #ffffff;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
          bottom: 96px;
          width: 50%;
          text-align: center;
          left: 350px;      
      }
      /* Number text (1/3 etc) */
      .numbertext {
        color: #ffffff;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
      }
      /* The dots/bullets/indicators */
      .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #999999;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
      }
      .active,
      .dot:hover {
        background-color: #111111;
      }
      /* Fading animation */
      .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
      }
      @-webkit-keyframes fade {
        from {
          opacity: .4
        }
        to {
          opacity: 1
        }
      }
      @keyframes fade {
        from {
          opacity: .4
        }
        to {
          opacity: 1
        }
      }
      /* On smaller screens, decrease text size */
      @media only screen and (max-width:400px) {
        .prev,
        .next,
        .text {
          display:none;

        }
      }
    
</style>

<template>
  <div class="magazine-container" id="blur">
    <div class="header" :class="{ searchFocus: isSearchFocus }">
      <Button
        class="menu-toggle"
        v-on:click.native="
          menu.toggled = !menu.toggled;
          language.toggled = false;
        "
      >
        <i class="fas fa-bars"></i>
      </Button>
      <div class="search-group">
        <input
          :id="search"
          class="search"
          type="search"
          :placeholder="$t('search') + '...'"
          ref="search"
          v-model="searchField"
          @focus="searchFocus(true)"
          @input="search"
          @keypress.enter="searchTurnPage"
        />
        <Button class="search-close" v-on:click.native="searchFocus(false)">
          <i class="fas fa-times"></i>
        </Button>
      </div>

        <!-- <Button v-on:click.native="print_stat()">
          <i class="fas fa-times"></i>
        </Button> -->
        
        <!-- Trigger/Open The Modal -->
        <button id="myBtn"  v-on:click="modal()" style="border-radius: 9px;height: 40px;width: 50px;"> <i class="fas fa-newspaper"></i></button>
        
        <!-- The Modal -->
        <div id="myModal" class="modal">
        
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close" v-on:click="close()">&times;</span>
              <h1>Berita terbaru</h1>  
              <div class="slideshow-container">
                <div class="mySlides fade">
                  <div class="numbertext">1 / 3</div>
                  <img id="gambar-0" src="" style="width:50%">
                  <div id="title-0" class="text"></div>
                </div>
                <div class="mySlides fade">
                  <div class="numbertext">2 / 3</div>
                  <img  id="gambar-1" src="" style="width:50%">
                  <div id="title-1" class="text"></div>
                </div>
                <div class="mySlides fade">
                  <div class="numbertext">3 / 3</div>
                  <img  id="gambar-2" src="" style="width:50%">
                  <div id="title-2" class="text"></div>
                </div>
                <a class="prev"  v-on:click="plusSlides(-1)">&#10094;</a>
                <a class="next" v-on:click="plusSlides(1)">&#10095;</a>
              </div>
              <br>
              <div style="text-align:center">
                <span class="dot"  v-on:click="currentSlide(0)"></span>
                <span class="dot"  v-on:click="currentSlide(1)"></span>
                <span class="dot"  v-on:click="currentSlide(2)"></span>
              </div>
          </div>
        
        </div>


      <div class="menu-container" :class="{ active: menu.toggled }">
        <Button class="menu-btn" v-on:click.native="highlight">
          <i class="fas fa-highlighter fa-lg"></i>
        </Button>
        <Button
          class="menu-btn"
          v-on:click.native="language.toggled = !language.toggled"
        >
          <i class="fas fa-language fa-lg"></i>
        </Button>
        <div class="language-list" :class="{ active: language.toggled }">
          <Button
            class="menu-btn language"
            :class="{ active: language.data == 'id' }"
            v-on:click.native="changeLanguage('id')"
          >
            <svg-icon icon="indonesia" />
          </Button>
          <Button
            class="menu-btn language"
            :class="{ active: language.data == 'en' }"
            v-on:click.native="changeLanguage('en')"
          >
            <svg-icon icon="united-kingdom" />
          </Button>
          <Button
            class="menu-btn language"
            :class="{ active: language.data == 'sby' }"
            v-on:click.native="changeLanguage('sby')"
          >
            <svg-icon icon="surabaya" />
          </Button>
        </div>
        <Button
          class="menu-btn menu-content-toggle-btn"
          v-on:click.native="
            tableOfContent.active = !tableOfContent.active;
            menu.toggled = false;
          "
        >
          <i class="fas fa-list-ol fa-lg"></i>
        </Button>
        <Button class="menu-btn" v-on:click.native="zoomIn">
          <i class="fas fa-plus fa-lg"></i>
        </Button>
        <Button class="menu-btn" v-on:click.native="zoomOut">
          <i class="fas fa-minus fa-lg"></i>
        </Button>
      </div>
    </div>

    <div class="magazine-wrapper">
      <div class="search-wrapper" :class="{ searchFocus: isSearchFocus }">
        <div class="search-container">
          <div class="search-result-title">
            <h3>{{ $t("search_result") }}</h3>
          </div>

          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="search in searchResult"
              v-bind:key="search.id"
              v-on:click="searchPage(search.page)"
            >
              <a href="#" v-html="search.text"></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="zoom-wrapper">
        <div class="zoom">
          <div
            id="magazine"
            class="magazine"
            :style="{ transform: 'scale(' + zoom + ')' }"
          >
            <div class="cover">
              <!-- <video
                id="cover"
                class="cover"
                autoplay
                loop
                muted
                data-keepplaying
              >
                <source src="/video/cover.mp4" type="video/mp4" />
              </video> -->
            </div>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Page7 />
            <Page8 />
            <Page9 />
            <Page10 />
            <Page11 />
            <Page12 />
            <Page13 />
            <Page14 />
            <Page15 />
            <Page16 />
            <Page17 />
            <Page18 />
            <Page19 />
            <Page20 />
            <Page21 />
            <Page22 />
            <Page23 />
            <Page24 />
            <Page25 />
            <Page26 />
            <Page27 />
            <Page28 />
            <Page29 />
            <Page30 />
            <Page31 />
            <Page32 />
          </div>
        </div>
      </div>

      <Sidebar>
        <template v-slot:table_of_contents>
          <li>
            <div
              v-on:click="
                turnPage(2);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title1") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(4);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title2") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(6);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title3") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(8);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title4") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(10);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title5") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(12);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title6") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(13);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title7") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(14);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title8") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(16);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title9") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(18);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title10") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(20);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title11") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(21);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title12") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(22);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title13") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(26);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title14") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(28);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title15") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(30);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title16") }}
            </div>
          </li>
          <li>
            <div
              v-on:click="
                turnPage(32);
                tableOfContent.active = false;
              "
            >
              {{ $t("table_of_contents_items.title17") }}
            </div>
          </li>
        </template>

        <template v-slot:song>
          <li>
            <div>
              {{ $t("song.music1") }}
              <audio controls>
                <source src="/video/just relax.mp3" type="audio/mp3">
              </audio>
            </div>
          </li>
          <li>
            <div>
              {{ $t("song.music2") }}
              <audio controls>
                <source src="/video/please calm my mind.mp3" type="audio/mp3">
              </audio>
            </div>
          </li>
          <li>
            <div>
              {{ $t("song.music3") }}
              <audio controls>
                <source src="/video/the weekend.mp3" type="audio/mp3">
              </audio>
            </div>
          </li>
        </template>
      </Sidebar>
    </div>

    <div class="footer" :class="{ searchFocus: isSearchFocus }">
      <div class="tools-container">
        <Button class="btn" v-on:click.native="doublePreviousPage">
          <i class="fas fa-angle-double-left fa-lg"></i>
        </Button>
        <Button class="btn" v-on:click.native="previousPage">
          <i class="fas fa-angle-left fa-lg"></i>
        </Button>
        <Button class="btn" v-on:click.native="nextPage">
          <i class="fas fa-angle-right fa-lg"></i>
        </Button>
        <Button class="btn" v-on:click.native="doubleNextPage">
          <i class="fas fa-angle-double-right fa-lg"></i>
        </Button>
      </div>
      <Button
        class="btn-comment"
        :class="{ active: toggleCommentStatus }"
        v-on:click.native="toggleComment"
      >
        <i class="fas fa-comments fa-lg"></i>
      </Button>

      <div
        class="comments-wrapper"
        :class="{ isActive: toggleCommentStatus, isInput: inputComment }"
      >
        <div class="comments">
          <div class="comments-title">
            <h4 class="title">{{ $t("comment") }}</h4>
            <Button v-on:click.native="toggleCommentInput">
              <i
                class="fas"
                :class="{
                  'fa-plus': !inputComment,
                  'fa-arrow-left': inputComment,
                }"
              ></i>
            </Button>
          </div>
          <div class="comments-card">
            <div class="comment-input" :class="{ active: inputComment }">
              <div class="input-group" :class="{ invalid: !commentName.valid }">
                <label for="name">{{ $t("comment_name") }}</label>
                <input id="name" type="text" v-model="commentName.data" />
              </div>
              <div
                class="input-group"
                :class="{ invalid: !commentEmail.valid }"
              >
                <label for="email">{{ $t("comment_email") }}</label>
                <input id="email" type="email" v-model="commentEmail.data" />
              </div>
              <div class="input-group" :class="{ invalid: !commentText.valid }">
                <label for="text">{{ $t("comment") }}</label>
                <textarea
                  id="text"
                  rows="5"
                  v-model="commentText.data"
                ></textarea>
              </div>
              <Button
                v-on:click.native="
                  postComment(
                    commentName.data,
                    commentEmail.data,
                    commentText.data
                  )
                "
              >
                {{ $t("comment_post") }}
              </Button>
            </div>
            <ul class="comments-list" :class="{ active: !inputComment }">
              <li v-for="c in comments" v-bind:key="c.id">
                <div class="comment">
                  <div class="title">
                    <div class="user">
                      <i class="fas fa-user"></i>
                    </div>
                    <div class="details">
                      <div>{{ c.name }}</div>
                      <div>{{ $d(new Date(c.created_at), "long") }}</div>
                    </div>
                  </div>
                  <div class="text">{{ c.text }}</div>
                </div>
              </li>
              <li v-if="comments.length == 0">
                <div>
                  <div style="color: #ffffff; text-align: center">
                    {{ $t("comment_empty") }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="image-modal" :class="{ active: image.active }">
      <div class="image-container" v-on:click="image.active = !image.active">
        <img src="" alt="" srcset="" />
      </div>
    </div>

    <div id="table_of_contents" :class="{ active: tableOfContent.active }">
      <div class="menu-container">
        <span class="title">{{ $t("table_of_contents") }}</span>
        <Button class="close" v-on:click.native="tableOfContent.active = false"
          ><i class="fas fa-times"></i
        ></Button>
      </div>
      <ul>
        <li>
          <div
            v-on:click="
              turnPage(2);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title1") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(4);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title2") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(6);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title3") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(8);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title4") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(10);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title5") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(12);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title6") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(13);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title7") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(14);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title8") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(16);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title9") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(18);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title10") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(20);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title11") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(21);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title12") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(22);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title13") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(26);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title14") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(28);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title15") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(30);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title16") }}
          </div>
        </li>
        <li>
          <div
            v-on:click="
              turnPage(32);
              tableOfContent.active = false;
            "
          >
            {{ $t("table_of_contents_items.title17") }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Button from "@/components/Button.vue";
import Page1 from "@/components/pages/Page1.vue";
import Page2 from "@/components/pages/Page2.vue";
import Page3 from "@/components/pages/Page3.vue";
import Page4 from "@/components/pages/Page4.vue";
import Page5 from "@/components/pages/Page5.vue";
import Page6 from "@/components/pages/Page6.vue";
import Page7 from "@/components/pages/Page7.vue";
import Page8 from "@/components/pages/Page8.vue";
import Page9 from "@/components/pages/Page9.vue";
import Page10 from "@/components/pages/Page10.vue";
import Page11 from "@/components/pages/Page11.vue";
import Page12 from "@/components/pages/Page12.vue";
import Page13 from "@/components/pages/Page13.vue";
import Page14 from "@/components/pages/Page14.vue";
import Page15 from "@/components/pages/Page15.vue";
import Page16 from "@/components/pages/Page16.vue";
import Page17 from "@/components/pages/Page17.vue";
import Page18 from "@/components/pages/Page18.vue";
import Page19 from "@/components/pages/Page19.vue";
import Page20 from "@/components/pages/Page20.vue";
import Page21 from "@/components/pages/Page21.vue";
import Page22 from "@/components/pages/Page22.vue";
import Page23 from "@/components/pages/Page23.vue";
import Page24 from "@/components/pages/Page24.vue";
import Page25 from "@/components/pages/Page25.vue";
import Page26 from "@/components/pages/Page26.vue";
import Page27 from "@/components/pages/Page27.vue";
import Page28 from "@/components/pages/Page28.vue";
import Page29 from "@/components/pages/Page29.vue";
import Page30 from "@/components/pages/Page30.vue";
import Page31 from "@/components/pages/Page31.vue";
import Page32 from "@/components/pages/Page32.vue";
import jQuery from "jquery";

window.jQuery = jQuery;

require("@/assets/turn.min.js");

export default {
  name: "MagazineWrapper",
  components: {
    Sidebar,
    Button,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
    Page13,
    Page14,
    Page15,
    Page16,
    Page17,
    Page18,
    Page19,
    Page20,
    Page21,
    Page22,
    Page23,
    Page24,
    Page25,
    Page26,
    Page27,
    Page28,
    Page29,
    Page30,
    Page31,
    Page32,
  },
  data() {
    return {
      zoom: 1,
      isSearchFocus: false,
      searchField: "",
      searchResult: [],
      inputComment: false,
      comments: [],
      slideIndex: 1,
      commentName: {
        data: "",
        valid: true,
      },
      commentEmail: {
        data: "",
        valid: true,
      },
      commentText: {
        data: "",
        valid: true,
      },
      toggleCommentStatus: false,
      menu: {
        toggled: false,
      },
      language: {
        toggled: false,
        data: "id",
      },
      image: {
        active: false,
      },
      tableOfContent: {
        active: false,
      },
    };
  },
  mounted() {
    const magazine = window.jQuery(".magazine");
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    if (mediaQuery.matches) {
      magazine.turn({ display: "single" });
    } else {
      magazine.turn({ display: "double" });
    }

    document.getElementById("cover").oncanplay = () => {
      document.getElementById("cover").style.visibility = "visible";
      document.getElementById("cover").style.opacity = 1;
    };
  },
  methods: {
    modal(){
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
        jQuery.ajax({
        type: 'GET',
        async: false ,
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC8-PFvO8E8Bd76Nbb0e9kWg&key=AIzaSyB6OHhDCwvsJ6oG_2kBL2TmxepvcmA-3sg&maxResult=1&order=date',
        dataType: 'json',
        success: function (data) {
          // alert("TEST");
            let snippet = (data['items']);
            for( let i = 0 ; i <= 3 ; i++){
              document.getElementById("title-"+[i]).innerText = snippet[i]['snippet']['description'];
              document.getElementById("gambar-"+[i]).src = snippet[i]['snippet']['thumbnails']['high']['url'];
            }
        },
        error : function(x, e) {
            alert('server error occoured');
            if(x.status==0){ alert('0 error'); 
            }else if(x.status==404){ alert('404 error'); 
            }else if(x.status==500){ alert('500 error'); 
            }else if(e=='parsererror'){ alert('Error.nParsing JSON Request failed.'); 
            }else if(e=='timeout'){ alert('Time out.'); 
            }else { alert(x.responseText); }
          }
      });
        
    },
    close(){
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    },
    plusSlides(n) {
        var halaman = this.slideIndex += n;
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if(halaman > slides.length) {
          this.slideIndex = 1
        }
        if(halaman < 1) {
          this.slideIndex = slides.length
        }
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for(i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    },
     currentSlides(n) {
        var halaman = n;
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if(halaman > slides.length) {
          this.slideIndex = 1;
        }
        if(halaman < 1) {
          this.slideIndex = slides.length;
        }
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for(i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    },
    print_stat(){
     jQuery.ajax({
      type: 'GET',
      async: false ,
      url: 'https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=UCkXmLjEr95LVtGuIm3l2dPg&key=AIzaSyB6OHhDCwvsJ6oG_2kBL2TmxepvcmA-3sg',
      dataType: 'json',
      success: function (data) {
        alert("TEST");
        console.log(data);
      },
      error : function(x, e) {
          alert('server error occoured');
          if(x.status==0){ alert('0 error'); 
          }else if(x.status==404){ alert('404 error'); 
          }else if(x.status==500){ alert('500 error'); 
          }else if(e=='parsererror'){ alert('Error.nParsing JSON Request failed.'); 
          }else if(e=='timeout'){ alert('Time out.'); 
          }else { alert(x.responseText); }
        }
    });
  },
    turnPage(page) {
      const magazine = window.jQuery(".magazine");
      if (magazine.turn("hasPage", page)) magazine.turn("page", page);
    },
    nextPage() {
      const magazine = window.jQuery(".magazine");
      magazine.turn("next");
    },
    previousPage() {
      const magazine = window.jQuery(".magazine");
      magazine.turn("previous");
    },
    doubleNextPage() {
      const magazine = window.jQuery(".magazine");
      let page = magazine.turn("page") + 2;
      console.log(page);
      if (magazine.turn("hasPage", page) && page > 0)
        magazine.turn("page", page);
      else magazine.turn("page", 33);
    },
    doublePreviousPage() {
      const magazine = window.jQuery(".magazine");
      let page = magazine.turn("page") - 2;
      console.log(page);
      if (magazine.turn("hasPage", page) && page > 0)
        magazine.turn("page", page);
      else magazine.turn("page", 1);
    },
    zoomIn() {
      this.zoom += 0.1;
      window.jQuery(".magazine").turn("disable", this.zoom != 1);
    },
    zoomOut() {
      if (this.zoom > 1) {
        this.zoom -= 0.1;
        window.jQuery(".magazine").turn("disable", this.zoom != 1);
      }
    },
    blurbg() {
      let blur=document.getElementById('blur');
      blur.classList.toggle('active');
      // let popup = document.getElementById('popup');
      // popup.classList.toggle('active');
    },
    autoplay() {
      setInterval(this.nextPage, 5000);
    },
    highlight() {
      const range = window.getSelection().getRangeAt(0),
        span = document.createElement("mark");
      span.appendChild(range.extractContents());
      range.insertNode(span);
    },
    searchFocus(focus) {
      this.isSearchFocus = focus;
      if (!focus) this.searchField = "";
      this.menu.toggled = false;
      this.language.toggled = false;
    },
    search() {
      let searched = this.searchField;
      let id = 1;

      if (searched !== "") {
        let text = document
          .getElementById("magazine")
          .getElementsByTagName("span");

        this.searchResult = [];

        window.jQuery.each(text, (_, val) => {
          const value = window.jQuery(val).text();
          let re = new RegExp(searched, "i");

          if (value.toLowerCase().indexOf(searched) !== -1) {
            // let parent = window.jQuery(val).parent().parent().parent().parent();
            let parent = window.jQuery(val).closest(".page");
            const page = window
              .jQuery(parent)
              .attr("class")
              .match(/p\d+/)[0]
              .substring(1);
            let text = value.replace(re, `<mark>${searched}</mark>`);

            this.searchResult.push({
              id: id,
              page: page,
              text: text,
            });

            id++;
          } else if (value.indexOf(searched) !== -1) {
            // let parent = window.jQuery(val).parent().parent().parent().parent();
            let parent = window.jQuery(val).closest(".page");
            const page = window
              .jQuery(parent)
              .attr("class")
              .match(/p\d+/)[0]
              .substring(1);
            let text = value.replace(re, `<mark>${searched}</mark>`);

            this.searchResult.push({
              id: id,
              page: page,
              text: text,
            });

            id++;
          }
        });
      } else {
        this.searchResult = [];
      }
    },
    searchPage(page) {
      this.isSearchFocus = false;
      const magazine = window.jQuery(".magazine");
      setTimeout(() => {
        magazine.turn("page", page);
      }, 200);
    },
    searchTurnPage() {
      if (this.searchField !== "") {
        const magazine = window.jQuery(".magazine");
        let page = parseInt(this.searchField) + 1;
        if (magazine.turn("hasPage", page)) {
          magazine.turn("page", page);
          this.isSearchFocus = false;
          this.$refs.search.blur();
        }
      }
    },
    toggleComment() {
      this.inputComment = false;
      this.toggleCommentStatus = !this.toggleCommentStatus;
      if (this.toggleCommentStatus) this.fetchComments();
    },
    fetchComments() {
      this.$http
        .get("http://oracleapi.erpaserver.com/comments")
        .then((result) => {
          this.comments = result.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    toggleCommentInput() {
      this.inputComment = !this.inputComment;
      this.commentName.valid = this.commentEmail.valid = this.commentText.valid = true;
    },
    postComment() {
      let valid = true;

      if (this.commentName.data.length == 0)
        this.commentName.valid = valid = false;
      else this.commentName.valid = true;
      if (this.commentText.data.length == 0)
        this.commentText.valid = valid = false;
      else this.commentText.valid = true;

      if (!valid) return;

      this.commentName.valid = this.commentText.valid = true;

      this.$http
        .post("http://oracleapi.erpaserver.com/comments", {
          name: this.commentName.data,
          email: this.commentEmail.data,
          text: this.commentText.data,
        })
        .then(() => {
          this.fetchComments();
          this.inputComment = false;

          this.commentName.data = this.commentEmail.data = this.commentText.data =
            "";
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.language.data = lang;
    },
    showImage(url) {
      this.image.active = true;
      document
        .getElementById("image-modal")
        .getElementsByTagName("img")[0].src = url;
    },
  },
};
</script>