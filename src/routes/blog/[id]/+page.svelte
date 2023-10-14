<script>
  

export let data

</script>

  <div class="w-[85%] mx-auto pt-16">
 <div class="container">
  <div class="lg:float-right float-none md:pl-8 pl-0 pb-8 ">
          <img
            src={data.res.img}
            alt=""
            class="object-cover w-full h-[20rem]  rounded-lg"
          />
        </div>
      <div class="">
        <div class="flex flex-col gap-16">
          <h1 class="font-bold md:text-2xl sm:text-xl text-xl">{data.res.title}</h1>
           

        </div>
       
      </div>
      <div class="pt-8 ">
        <p class="text-justify leading-6 indent-12 ">
          {data.res.content}
        </p>
           
      </div>
    </div>

</div>

   


