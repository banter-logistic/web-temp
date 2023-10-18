<script lang="ts">
  import Seo from "$lib/seo.svelte";
import { onMount } from "svelte";

  export let data;

  $: aktif = data.id;

  let resultTrack = "";
  
  let no_resi = "";
  let asal =''
  let ke =''
  let berat = 0
  let hasil : number
  let layanan = ''

  const resi_dummy = "JTG-1-1-0003";

  function trackResi() {
    if (no_resi == resi_dummy) {
      resultTrack = "Semarang";
    } else {
      resultTrack = "No Resi Tidak Ditemukan";
    }
  }

  function toogleform(formName: string): void {
    aktif = formName;
  }

  function calculate(){
    
    layanan = 'BanterExprees'
    hasil = berat  * 5000
    
  }

  onMount(()=>{ 
    const y = new URLSearchParams(location.search)
    const no_resiParam = y.get("no_resi");
    no_resi = no_resiParam ? no_resiParam : "";


    const x = new URLSearchParams(location.search)
     asal = x.get("asal") ?? ""
     ke = x.get("ke")??"" 
     const beratParam = x.get("berat");
    berat = beratParam ? parseInt(beratParam) : 0; 
    if(no_resiParam){
      trackResi()
    }else{
      calculate()
    }

  })

</script>

<section class=" relative -mb-4 mt-12 flex flex-col mx-2">
  <div
    class="h-full object-cover absolute inset-0 -z-10 bg-gradient-to-r from-[#AAEEF4] from-10% via-[#DBF2DC] via-30% to-[#A2C7FA] to-90% ... blur-[100px]"
  />
  <div class="flex justify-center w-full">
    <div
      class="bg-[#F0F4F4] w-[20rem] h-20 items-center flex justify-center gap-4 rounded-t-2xl drop-shadow-md"
    >
      <button
        on:click={() => toogleform("tracking")}
        class="bg-[#148CEB] rounded-xl text-white px-7 py-4 hover:bg-[#1A71B8]"
        >Tracking</button
      >
      <button
        on:click={() => toogleform("check")}
        class="bg-[#148CEB] rounded-xl text-white px-5 py-4 hover:bg-[#1A71B8]"
        >Check Ongkir</button
      >
    </div>
  </div>

  {#if aktif === "tracking"}
    <div class=" relative flex justify-center">
      <div
        class="bg-[#F0F4F4] w-[64rem] h-[10rem] items-center flex justify-start gap-4 rounded-2xl drop-shadow-md"
      >
        <div class="flex sm:pl-20 pl-4 gap-1">
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
              on:click={trackResi}
            >
              Track
            </button>
          </label>
        </div>
      </div>
    </div>
  {/if}

  <!-- {#await fetch("https://dog.ceo/api/breeds/image/random") .then(e=>e.json())}
    loading 
  {:then rest } 
    <img src={rest.message} alt="">
    {:catch}
    error
  {/await} -->
  {#if aktif === "check"}
    <div class=" relative flex justify-center">
      <div
        class="bg-[#F0F4F4] w-[64rem] items-center flex justify-center gap-4 rounded-2xl drop-shadow-md"
      >
        <div class="flex flex-wrap py-8 pl-8 gap-8">
          <label for="asal" class="block">
            <span class=" block text-sm font-medium text-slate-700 pb-1">
              Asal
            </span>
            <input
            bind:value={asal}
              type="text"
              id="asal"
              placeholder="Masukkan Asal Pengiriman"
              class="input input-info w-[15rem]"
              required
            />
          </label>
          <label for="tujuan" class="block">
            <span class="block text-sm font-medium text-slate-700 pb-1"
              >Tujuan
            </span>
            <input
              required
            bind:value={ke}
              type="text"
              id="tujuan"
              placeholder="Masukkan Tujuan Pengiriman "
              class="input input-info w-[15rem]"
            />
          </label>
          <label for="berat" class="block">
            <span class="block text-sm font-medium text-slate-700 pb-1"
              >Berat
            </span>
            <input
            bind:value={berat}
              type="number"
              id="berat"
              placeholder="Masukkan Berat barang "
              class="input input-info w-[8rem]"
              required
            />
          </label>
          <label for="berat" class="block">
            <span
              class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
            >
              Panjang
            </span>
            <input
              type="number"
              id="berat"
              placeholder="Masukkan Berat barang "
              class="input input-info w-[8rem]"
            />
          </label>

          <label for="lebar" class="block">
            <span
              class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
            >
              lebar
            </span>
            <input
              type="number"
              id="lebar"
              placeholder="Masukkan Berat barang "
              class="input input-info w-[8rem]"
            />
          </label>
          <label for="tinggi" class="block">
            <span
              class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
            >
              tinggi
            </span>
            <input
              type="number"
              id="tinggi"
              placeholder="Masukkan Berat barang "
              class="input input-info w-[8rem]"
            />
            <button
              class="bg-[#148CEB] rounded-xl text-white px-7 py-3 hover:bg-[#1A71B8] ml-3" on:click={calculate}
            >
              Search
            </button>
          </label>
      </div>

        <div />
      </div>
    </div>
  {/if}
  <div class=" relative flex justify-center mt-16">
    <div
      class="bg-[#F0F4F4] w-[64rem] h-full pl-20 py-4 flex gap-4 rounded-2xl drop-shadow-md"
    >
      {#if aktif === "tracking" && resultTrack!== ''}
        <div>
          <h1 class="font-bold text-2xl">Hasil Pencarian :</h1>
          <div class="flex flex-col justify-start items-start">{resultTrack}</div>
        </div>
      {/if}
      {#if aktif === "check" && hasil !== 0  }
        <div>
          <h1 class="font-bold text-2xl">Hasil Perhitungan :</h1>
          <div class="flex flex-col justify-start items-start">{hasil}</div>
        </div>
      {/if}
      <div />
    </div>
  </div>
</section>

<Seo title="BANTER | Tracking " description="Lacak pengiriman Anda dengan BANTER. Gunakan layanan pelacakan kami yang andal dan transparan untuk mengikuti perjalanan paket Anda dari pintu ke pintu. Dengan teknologi mutakhir, kami memberikan akses real-time ke status pengiriman Anda. Pantau paket Anda dengan mudah, di mana saja, kapan saja, dan melalui berbagai perangkat. Kami memberikan ketenangan pikiran dengan informasi pelacakan yang jelas dan akurat." type="WebPage" />