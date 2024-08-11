<template>
    <div class="container  flex justify-between items-center h-full   md:py-2  ">
        <div class="flex items-center">
            <h1 class="text-2xl  font-bold mr-20">Sass</h1>
            <ul class="md:flex items-center gap-7 hidden">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>

                <li>
                    <RouterLink to="/Features">Features</RouterLink>
                </li>

                <li>
                    <RouterLink to="/Pricing">Pricing</RouterLink>

                </li>
                <li>
                    <RouterLink to="/Support">Support</RouterLink>

                </li>


            </ul>

        </div>
        <div class="flex items-center md:gap-8 gap-4">
            <RouterLink to="/login" class="px-4  md:px-5 whitespace-nowrap py-1 rounded-full bg-Blue text-white
                    ">Sign in </RouterLink>
            <button class="py-4 flex gap-2 px-2 md:px-5 whitespace-nowrap  animate-pulse  items-center  ">Live
                demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>

          </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
 
</script>

<style lang="scss" scoped>

</style>