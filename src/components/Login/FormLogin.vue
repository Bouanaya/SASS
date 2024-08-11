<template>
    <div class="flex md:justify-center mt-16 md:mt-0 items-center flex-col">
        <div class="md:mb-16 mb-16  ">
            <h1 class="text-center text-3xl font-bold mb-4">Sass Login</h1>
            <p class=" text-center m-auto w-3/4 text-balance text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sit, repellat porro ex cumque incidunt voluptates impedit!
            </p>
        </div>



        <div class="card flex flex-col items-center justify-center space-y-8">

            <div class=" space-y-5 ">
                <div class="flex flex-col ">
                    <label for="username">Username</label>
                    <InputText id="username" v-model="Username"    />
                </div>
                <div class="flex flex-col  ">
                    <label for="Password">Password</label>
                    <Password :feedback="false" variant="filled" v-model="Pass" />
                </div>
            </div>
            <Button label="Login" severity="success" class="w-full" />

        </div>




    </div>
</template>

 
<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';

import Password from 'primevue/password';


import Button from 'primevue/button';


const Username = ref(null);
const Pass = ref(null);
</script>