<template>
  <!--header-->
  <div class=" bg-gray-50 flex items-center">
    <section class = "w-full bg-cover bg-center py-32" style="background-color:black ;">
      <div class="container mx-auto text-center text-white">
        <h1 class="text-6xl mb-6 font-serif font-extrabold">CREA.VISIONS</h1>
        <p class="text-xl mb-12">Empower Your Voice with Visual Impact: Transform Ideas into Action</p>
        <a href="#" class="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Try it now!</a>
      </div>
    </section>
  </div>


<!--cards-->
  <div class = " bg-gray-50 flex" >
    <div class = "w-full grid grid-cols-4 gap-4 pl-24 pr-24">
      <div class = " p-5 my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 justify-center"> 
        <div class = "text-lg font-semibold">
          Effortless Image Editing
        </div>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed cursus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed cursus nunc </div>
      <div class = "p-5 my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
        <div class = "text-lg font-semibold">
          Citizen Engagement
        </div>  
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </div>
      <div class = "p-5 my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"> 
        <div class = "text-lg font-semibold">Accessible Design</div> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div class = "p-5 my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"> 
        <div class = "text-lg font-semibold">
          Shareable Content
        </div> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  </div>

  <!--end cards-->

  <div class = "w-full grid grid-cols-2 ">

    <div>
      <h2 class = "font-bold text-2xl ml-20 pl-5 text-gray-500">Who are we?</h2>
      <h1 class = "font-black text-4xl ml-20 pl-5 pt-1"> Our Research Group</h1>
      <p class = " ml-20 pl-5 pt-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed cursus nunc. Donec aliquam, tellus ut lacinia eleifend, odio sapien  faucibus dui, eget egestas tellus purus ac quam. Duis scelerisque, ante  at ornare vulputate, lacus urna condimentum nisl, a placerat dui dolor a  elit. Sed malesuada rhoncus mi quis vestibulum. Pellentesque habitant  morbi tristique senectus et netus et malesuada fames ac turpis egestas.  Etiam diam arcu, feugiat non egestas ac, tempus in libero. Nullam vel  posuere odio. In eget accumsan arcu. Etiam varius eget felis id  tristique. </p>

    </div>
    
    <div> 
      <img class = "p-20" src="https://images.unsplash.com/photo-1682687220363-35e4621ed990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt = "">
    
    </div>
  </div>   
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
