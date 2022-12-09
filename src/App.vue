<style lang="scss">
* {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
  outline: none;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

body {
 
}

.app {
  overflow: hidden;
}


html, body {
  padding: 0;
  margin: 0;
}
/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: rgba(17, 16, 34, 0.911);
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

p {
  color: var(--text-primary-color);
}
.switch-checkbox {
  display: none;
}
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem; /* <- this is the base size of our element */
}
.switch-label {
  /* for width, use the standard element-size */
  width: 80px; 

  /* for other dimensions, calculate values based on it */
  border-radius: var(--element-size);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  padding: calc(var(--element-size) * 0.3);
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.1);

  align-items: center;
  background: var(--text-primary-color);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: background 0.5s ease;
  justify-content: space-between;
  z-index: 1;
} 
.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 100%;
  top: calc(var(--element-size) * 0.02);
  left: calc(var(--element-size) * 0);
  height: calc(var(--element-size) * 0.58);
  width: calc(var(--element-size) * 0.58);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}
.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
.container-center {
  background-color: var(--background-color-primary);
  height: 100vh;
  width: 100vw;
}
</style>

<template>
  <div class="app">
    <svg-sprite />
    <div class="container-center">
    <div class="card">
      <input
        @change="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="switch-checkbox"
      />
      <label for="checkbox" class="switch-label">
        <span style="margin-left:-12px;">🌙</span>
        <span style="margin-right:-10px;">☀️</span>
         <div
            class="switch-toggle"
            :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
          ></div>
      </label>    
      <router-view />
    </div>
    </div>

  </div>
</template>

<script>
import SvgSprite from "@/components/SvgSprite.vue";

export default {
  name: "App",
  components: {
    SvgSprite,
  },

  mounted() {
    const initUserTheme = this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },
  methods: {
  setTheme(theme) {
    localStorage.setItem("user-theme", theme);
    this.userTheme = theme;
    document.documentElement.className = theme;
  },
  toggleTheme() {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    this.setTheme("dark-theme");
  } else {
    this.setTheme("light-theme");
  }
  },
  getMediaPreference() {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
  },
  getTheme() {
  return localStorage.getItem("user-theme");
  },
  },
};
</script>