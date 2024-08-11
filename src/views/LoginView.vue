<template>
    <div class="md:grid grid-cols-2 flex md:h-screen  h-full  ">
     <FormLogin></FormLogin>
        <div class="md:flex hidden">
            <img src="../assets/img/login-screen.jpg" class="h-screen w-full object-cover" alt="">

        </div>

    </div>
</template>

<script setup>
import FormLogin from '@/components/Login/FormLogin.vue';

</script>

 