<script>
  import Seo from "$lib/seo.svelte";


  import Productser from "../productser.svelte";
  import Valued from "../valued.svelte";

</script>


<section class="w-[85%] mx-auto mt-[10%] flex flex-col gap-[4rem]">
    <div class="flex flex-col gap-[1rem]">
      
      <p class="text-[#14EBDE] text-xl">Our Service</p>
      <h1 class="text-[#2C3E50] text-4xl font-bold" >Product Service</h1>
    </div>
    <div class="flex flex-wrap gap-8 justify-center items-center">
      <Productser/>
      
    </div>
  </section>

   <!-- valued Service  -->
  <section class="mt-[10%] md:h-[42rem] h-[30rem]">
    <div class="h-full w-full bg-cover bg-left " style="background-image: url('../Banter-image/bg-valued.jpg');">
    <!-- <img
      src="../Banter-image/bg-valued.jpg"
      alt="valuedService"
      class=" absolute object-cover  w-full h-full -z-10"
    /> -->
     <div class=" flex  flex-col  gap-[4rem]  pt-[8%]">

      <div class=" w-[85%] mx-auto flex  flex-col gap-4  ">
        <p class="text-[#14EBDE] text-xl">Valued Service</p>
        <h1 class="text-[#F0F4F4] text-4xl font-bold">Why Choose Us</h1>
        <p class="text-lg text-[#F0F4F4]">
          Bergabunglah dengan BANTER sekarang untuk mendapatkan manfaat dari
          fitur-fitur unggulan kami .
        </p>
      </div>

      <div class=" ">
        
        <Valued/>
      </div>

    </div>
    
  </section>



  <Seo title="BANTER | Layanan Pengiriman" type="WebPage" description="Banter Pengiriman menawarkan layanan pengiriman global yang handal dan efisien. Dengan jaringan luas dan teknologi canggih, kami memberikan solusi pengiriman terpercaya kepada pelanggan kami. Layanan kami mencakup pengiriman darat, udara, dan laut. Kami mengutamakan keamanan, kecepatan, dan keandalan dalam setiap pengiriman. Temui tim kami yang ahli dan percayakan pengiriman Anda kepada kami." />
