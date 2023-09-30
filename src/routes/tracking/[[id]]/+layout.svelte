<script>

export let data 

$: title = data.id == "check" ? "CheckOngkir" : "Tracking"

</script>


<header>
  <div class="relative w-full sm:h-[12rem] h-[8rem] md:h-[20rem] ">
    <img
      src="../track.svg"
      alt="BackgroundImage"
      class="absolute w-full h-full object-cover -z-10"
    />

    <div class="w-[50%] h-full flex flex-col gap-4 justify-center items-center md:pl-20 pl-10 ">
      <h1 class="text-4xl max-md:text-2xl font-bold text-[#F0F4F4]">{title}</h1>
      
    </div>
  </div>
</header>

<slot />
