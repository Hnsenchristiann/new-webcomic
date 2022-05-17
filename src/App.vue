<template>
  <div class="text-gray-50 bg-gray-800 mt-0 h-auto w-full z-20 top-0 font-sans">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
          </div>

          <div class="flex-1 flex items-end justify-end sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                    <!-- <router-link @click="mobileMenuOpen = false" :to="{name: 'dashboard'}" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</router-link>
                    <router-link :to="{}" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</router-link>
                    <router-link :to="{}" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</router-link>
                    <router-link :to="{}" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</router-link> -->
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="sm:hidden bg-gray-800 absolute w-full" id="mobile-menu" v-if="mobileMenuOpen">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <router-link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</router-link>
            <router-link to="/mycomic" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">My Comics</router-link>
            <router-link to="/transaction" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">My Transactions</router-link>
            <router-link to="/token" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Purchase Tokens</router-link>
        </div>
      </div>
  </div>
  <router-view/>
  <div class="w-100 bg-gray-800 divide-y text-white text-center h-full">
      <div class="h-12 py-2">
          <router-link to="/about">About Us</router-link>
      </div>
      <div class="h-12 py-2">
          My Account
      </div>
      <div class="h-12 py-2">
          <router-link to="/privacy">Privacy Policy</router-link>
      </div>
      <div class="h-12 py-2">
          FAQ
      </div>
      <div class="py-2">
          Follow Us On
          <div class="flex w-full flex flex-row items-center justify-center mt-2">
              <a v-for="(soc, idx) in socials" :key="'soc-' + idx" :href="soc.link">
                  <img class="w-12" :src="soc.icon" />
              </a>
              <!-- <img class="w-12" :src="facebookIcon.default" />
              <img class="w-12" :src="instagramIcon.default" />
              <img class="w-12" :src="twitterIcon.default" /> -->
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          mobileMenuOpen: false,
          profileMenuOpen: false,
          // icons: {
          //     facebook: require('../../icons/facebook.png'),
          //     instagram: require('../../icons/instagram.png'),
          //     twitter: require('../../icons/twitter.png'),
          //     visi8: require('../../assets/visi8_logo.png')
          // },
          // visi8Icon: require('../../assets/visi8_logo.png'),
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#mobile-menu{
    z-index: 900;
}
.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
.badge{
    position: relative;
    top: -13px;
    right: -34px;
    padding: 0px 5px;
    border-radius: 50%;
    background: red;
    font-size: 12px;
    color: white;
    pointer-events: none;
}
</style>
