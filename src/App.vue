<template>
  <div>
    <div class = "pb-20 flex justify-end " style = "background-color: black;">
      <nav>
        <router-link to="/" class = "text-white p-3  bg-indigo-500 hover:bg-indigo-600 hover:font-bold rounded" >Home</router-link>
        <router-link to="/" class = "text-white p-3 m-5 bg-indigo-500 hover:bg-indigo-600 hover:font-bold rounded" >Versions</router-link>
        <router-link to="/" class = "text-white p-3 mr-10 bg-indigo-500 hover:bg-indigo-600 hover:font-bold rounded" >Play</router-link>
     
      </nav>
    </div>
  </div>
  <router-view/>


</template>

<style>

</style>
