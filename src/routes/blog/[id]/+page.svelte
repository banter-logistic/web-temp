<script>
  

export let data

</script>

  <div class="w-[85%] mx-auto pt-12">
 <div class="container">
  <div class="lg:float-right float-none md:pl-8 pl-0 ">
          <img
            src={data.res.img}
            alt=""
            class="object-cover w-[40rem] h-[20rem]  rounded-lg"
          />
        </div>
      <div class="">
        <div class="flex flex-col gap-16">
          <h1 class="font-bold md:text-2xl sm:text-xl text-xl pt-8">{data.res.title}</h1>
           

        </div>
       
      </div>
      <div class="pt-4 ">
        <!-- <p class="text-justify leading-6 indent-12 ">
          {data.res.content}
        </p> -->
        {#each data.res.content.split('\n') as d}
        <p class="text-justify leading-6 indent-12 ">
          {d}
        </p>
        {/each}
 
      </div>
    </div>

</div>

   


