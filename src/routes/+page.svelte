<script lang="ts">
  import Seo from "$lib/seo.svelte";
  import Blog from "./blog.svelte";
  import Cek from "./cek.svelte";
  import Productser from "./productser.svelte";
  import Valued from "./valued.svelte";

  let bgtrack = "../Banter-image/bgnewhome.jpg";
  let bgabout = "../Banter-image/kirim.jpg";

  let active: string = "tracking";

  function toogleform(formName: string) {
    active = formName;
  }

  let result = "";

  let no_resi = "";

  let asal = "";
  let ke = "";
  let berat = 0;

  const resi_dummy = "JTG-1-1-0003";
  let hasil = 0;

  function trackResi() {
    if ( no_resi.trim().length < 13 ) {
      alert("diisi dulu form nya ");
    } else {
      // Navigasi ke halaman tujuan dengan no_resi sebagai parameter query
      const url = `/tracking?no_resi=${encodeURIComponent(no_resi)}`;
      window.location.href = url;
    }
  }

  function calculate() {
    if (asal.trim() == "" || ke.trim() == "") {
      alert("diisi dulu form nya ");
    } else {
      const url = `/tracking/check?asal=${asal}&ke=${ke}&berat=${berat}`;
      window.location.href = url;
    }
  }
</script>

<body class=" w-full min-h-screen">
  <section class=" relative flex w-[85%] mx-auto">
    <div class="relative w-full h-full object-cover">
      <Cek />
    </div>
    <!-- <img
      src={bgtrack}
      alt=""
      class="absolute w-full  h-full object-cover z-[-10] rounded-2xl brightness-75"
    />
    <div class=" flex flex-col gap-4 py-16 pl-8  text-left  border ">
      <h1 class="text-4xl max-md:text-2xl font-bold text-[#F0F4F4] border  ">
        <span class="text-[#14EBDE] ">Pelacakan </span> Pengiriman yang <br/>mudah dan
        akurat!
      </h1>
      <p class="sm:text-xl max-w-lg text-md text-[#F0F4F4]  ">
        Pantau status pengiriman Anda secara real-time dengan BanterLogistics
        menggunakan kode  pelacakan  unik untuk setiap pengiriman.
      </p>

      
    </div> -->
  </section>

  <div
    class="relative -mt-8 flex flex-col justify-center sm:items-start items-center"
  >
    <div
      class="flex justify-center items-center gap-[1rem] w-[18rem] h-[3.5rem] bg-white/30 backdrop-blur-md shadow-md sm:ml-[18%] ml-0 rounded-t-xl"
    >
      <button
        on:click={() => toogleform("tracking")}
        class="bg-[#148CEB] rounded-xl text-white px-7 py-2 hover:bg-[#1A71B8]"
        >Tracking</button
      >
      <button
        on:click={() => toogleform("checkongkir")}
        class="bg-[#148CEB] rounded-xl text-white px-5 py-2 hover:bg-[#1A71B8]"
        >Check Ongkir</button
      >
    </div>
    {#if active === "tracking"}
      <form
        on:submit={trackResi}
        class=" h-[8.375rem] flex items-center justify-center bg-white/30 backdrop-blur-md shadow-md px-8 sm:rounded-tl-[0rem] rounded-tl-[0.625rem] sm:ml-[18%] ml-0 rounded-tr-[0.625rem] rounded-br-[0.625rem] rounded-bl-[0.625rem]"
      >
        <label for="tracking" class="block">
          <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
            >No Resi
          </span>
          <input
            type="text"
            id="tracking"
            placeholder="13 Digit "
            class="input input-info sm:w-[20rem] w-[10rem]"
            bind:value={no_resi}
            required
          />
          <button
            class="bg-[#148CEB] rounded-xl text-white px-7 py-3 hover:bg-[#1A71B8]"
            type="submit"
          >
            Track
          </button>
        </label>
      </form>
    {/if}
    {#if active === "checkongkir"}
      <div
        class="   sm:ml-[18%] ml-2 bg-white/30 backdrop-blur-md shadow-md flex justify-center mx-2 items-center px-16 py-8 rounded-tl-[0rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] rounded-bl-[0.625rem]"
      >
        <form action="" class="flex gap-4 flex-wrap">
          <label for="asal" class="block">
            <span class="block text-md font-medium text-slate-700"> Asal</span>
            <input
              type="text"
              id="asal"
              bind:value={asal}
              placeholder="Type here"
              class="input input-bordered input-info w-[15rem]"
              required
            />
          </label>
          <label for="Tujuan" class="block">
            <span class="block text-md font-medium text-slate-700">
              Tujuan</span
            >
            <input
              type="text"
              bind:value={ke}
              id="Tujuan"
              placeholder="Type here"
              class="input input-bordered input-info w-[15rem]"
              required
            />
          </label>
          <label for="Berat" class="block">
            <span class="block text-md font-medium text-slate-700"> Berat</span>
            <input
              bind:value={berat}
              type="number"
              id="Berat"
              placeholder="Type here"
              class="input input-bordered input-info w-[7rem]"
              required
            />
            <button
              class="bg-[#148CEB] rounded-xl text-white px-7 py-3 hover:bg-[#1A71B8] ml-3"
              on:click={calculate}
            >
              Search
            </button>
          </label>
        </form>
      </div>
    {/if}
  </div>
  <!-- section about us  -->
  <section
    class="md:flex-row flex-col flex flex-shrink-0 mt-[10%] w-[85%] gap-[3rem] mx-auto"
  >
    <div class="w-full">
      <div
        class="relative w-full h-[24rem] justify-center flex items-center mx-auto"
      >
        <!-- <div
          class="absolute inset-0 bg-[#94FBF5] rotate-12 blur-[50px] object-cover -z-10"
        /> -->
        <img src={bgabout} alt="" class=" w-full aspect-[2/1.4] rounded-3xl" />
      </div>
    </div>

    <div class=" relative flex flex-col items-start gap-[1rem]">
      <p class="text-[#14EBDE] text-xl">About Us</p>
      <h1
        class=" lg:text-4xl text-3xl text-left font-bold text-[#2C3E50] mr-16"
      >
        Selangkah Menuju Indonesia
      </h1>
      <!-- <div
        class="w-[19rem] h-[15rem] right-0 absolute bg-[#8CCCFE] rotate-12 blur-[37px] object-cover -z-10"
      /> -->
      <p class="text-xl text-[#79797C] text-justify">
        Kami adalah BANTER penyedia layanan logistik yang berdedikasi untuk
        menghadirkan solusi logistics yang aman dan cepat.
      </p>
      <a
        href="/about"
        class="bg-[#148CEB] rounded-full text-white px-5 py-2 hover:bg-[#1A71B8]"
        >More Info
      </a>
    </div>
  </section>

  <section class="w-[85%] mx-auto mt-[10%] flex flex-col gap-[4rem]">
    <div class="flex flex-col gap-[1rem]">
      <p class="text-[#14EBDE] text-xl">Our Service</p>
      <h1 class="text-[#2C3E50] text-4xl font-bold">Product Service</h1>
    </div>
    <div class="flex flex-wrap gap-8 justify-center">
      <Productser />
    </div>
  </section>

  <!-- valued Service  -->
  <section class="mt-[10%] md:h-[42rem] h-[30rem]">
    <div
      class="h-full w-full bg-cover bg-left"
      style="background-image: url('../Banter-image/bg-valued.jpg');"
    >
      <!-- <img
      src="../Banter-image/bg-valued.jpg"
      alt="valuedService"
      class=" absolute object-cover  w-full h-full -z-10"
    /> -->
      <div class=" flex flex-col gap-[4rem] pt-[8%]">
        <div class=" w-[85%] mx-auto flex flex-col gap-4">
          <p class="text-[#14EBDE] text-xl">Valued Service</p>
          <h1 class="text-[#F0F4F4] text-4xl font-bold">Why Choose Us</h1>
          <p class="text-lg text-[#F0F4F4]">
            Bergabunglah dengan BANTER sekarang untuk mendapatkan manfaat dari
            fitur-fitur unggulan kami .
          </p>
        </div>

        <div class=" ">
          <Valued />
        </div>
      </div>
    </div>
  </section>

  <section class="mt-[15%]">
    <div class=" w-[75%] mx-auto flex flex-col gap-4 justify-center">
      <p class="text-[#14EBDE] text-xl">Latest News</p>
      <div class="flex justify-between">
        <h1 class="text-4xl max-md:text-2xl font-bold text-[#2C3E50]">
          Latest Update
        </h1>
        <a
          href="/blog"
          class="bg-[#148CEB] rounded-full text-white px-4 py-2 hover:bg-[#1A71B8]"
        >
          View More
        </a>
      </div>
    </div>

    <div>
      <Blog />
    </div>
  </section>
</body>
<Seo
  title="BANTER | Home "
  description="BANTER Selangkah menuju Indonesia. BANTER adalah mitra andal untuk mempercepat bisnis Anda dengan solusi pengiriman inovatif. Dengan jaringan lokal yang solid dan teknologi canggih, kami menghadirkan layanan pengiriman yang efisien, aman, dan terpercaya. Tak hanya sekadar mengirim paket, kami mengirimkan kepercayaan dan ketenangan pikiran. Jadikan pengalaman pengiriman Anda lebih mudah, lebih cepat, dan lebih handal dengan BANTER."
  type="WebSite"
/>
