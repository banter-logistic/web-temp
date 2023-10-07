<script>
  import { fly } from "svelte/transition";
  import "../app.css";
  import Hambuger from "./hambuger.svelte";
  import { onMount } from "svelte";
  import { invalidateAll } from "$app/navigation";
  import { enhance } from "$app/forms";
  export let data 
  

 

  export let open = false;
  export let onClick = () => {
    open = !open;
  };
  const autoClose = (/** @type {any}*/ e) => {
    if (e.target.tagName == "A") open = false;
  };
</script>

<link
  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap"
  rel="stylesheet"
/>
<header class=" sticky top-0 bg-white font-[Poppins] z-50">
  <nav class="flex justify-between items-center w-[85%] mx-auto py-3">
    <a href="/">
      <img src="../Banter-image/logo.png" alt="" class="w-[4rem]" />
    </a>
    <div
      class=" static bg-white min-h-fit left-0 w-auto lg:flex hidden items-center px-5"
    >
      <ul class="flex flex-row items-center gap-[3.5vw]">
        <li>
          <a class="hover:text-blue-300" href="/">Home</a>
        </li>

        <li>
          <a class="hover:text-blue-300" href="/tracking">Tracking</a>
        </li>

        <li>
          <a class="hover:text-blue-300" href="/tracking/check">Check Ongkir</a>
        </li>

        <li>
          <a class="hover:text-blue-300" href="/layanan"> Layanan </a>
        </li>

        <li>
          <a class="hover:text-blue-300" href="/about">Tentang Kami</a>
        </li>
        <li>
          <a class="hover:text-blue-300" href="/blog">Blog</a>
        </li>
      </ul>
    </div>
    <div>
      {#if data.auth.isLoggedin}
      <form action="/auth?/logout" method="post" use:enhance data-sveltekit-preload-data="off">
    <button class="bg-[#148CEB] rounded-full text-white px-5 py-2 hover:bg-[#1A71B8]">Logout</button>
</form>

        {:else}
        <button class="bg-[#148CEB] rounded-full text-white px-5 py-2 hover:bg-[#1A71B8]"><a
        
        href="/login"
      >
        Sign in
      </a>
      </button>
      {/if}
      
    </div>
    <div class="lg:hidden sticky">
      <Hambuger {open} {onClick} />
    </div>
    {#if open}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={autoClose}
        transition:fly={{ y: -200, duration: 400 }}
        class=" absolute bg-white min-h-[50vh] left-0 top-[100%] w-full flex items-center px-5"
      >
        <ul class="flex flex-col gap-10 text-center mx-auto">
          <li>
            <a class="hover:text-blue-300" href="/">Home</a>
          </li>

          <li>
            <a class="hover:text-blue-300" href="/tracking">Tracking</a>
          </li>

          <li>
            <a class="hover:text-blue-300" href="/tracking">Check Ongkir</a>
          </li>

          <li>
            <a class="hover:text-blue-300" href="/layanan">Layanan </a>
          </li>

          <li>
            <a class="hover:text-blue-300" href="/about">Tentang Kami</a>
          </li>
          <li>
            <a class="hover:text-blue-300" href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    {/if}
  </nav>
</header>
<slot />

<footer class="bg-[#3C5E7A] mt-[10%]">
  <div
    class="md:flex grid md:justify-between justify-start gap-8 w-full md:p-24 p-12"
  >
    <div class="grid gap-2 w-60">
       <img src="../Banter-image/logo.png" alt="" class="bg-white rounded-2xl w-12 h-14"/>
      
      <p class="text-lg text-[#F0F4F4]">let's make dream come true </p>
      <div class=" flex gap-8">
        <a href="https://www.instagram.com/banterinaja/" target="_blank">
        <img src="../Banter-image/instagram.png" alt="instagram" /> 
        </a>
        <a href="https://www.facebook.com/banter" target="_blank"> 
        <img src="../Banter-image/facebook.png" alt="facebook" />
         </a>

         <a href="https://api.whatsapp.com/send?phone=628112788199&text=p balap " target="_blank">
        <img src="../Banter-image/google-plus.png" alt="whatsapp" />
        </a>

        <a href="https://www.tiktok.com/@banterinaja" target="_blank">
        <img src="../Banter-image/tik-tok.png" alt="tiktok" class=""/>
        </a>
      </div>
    </div>
    <div class="grid gap-2 text-[#F0F4F4]">
      <h1 class="font-bold text-xl">Information</h1>
      <ul class="grid gap-2">
        <li>
          <a class="hover:text-blue-300" href="/">Home</a>
        </li>

        <li>
          <a class="hover:text-blue-300" href="/tracking">Tracking</a>
        </li>

        <li>
          <a class="hover:text-blue-300" href="/tracking">Check Ongkir</a>
        </li>

        <li>
          <a class="hover:text-blue-300" href="/layanan">Layanan </a>
        </li>

        <li>
          <a class="hover:text-blue-300" href="/about">Tentang Kami</a>
        </li>
      </ul>
    </div>
    <div class="grid gap-6 text-[#F0F4F4]">
      <h1 class="font-bold text-xl">contact Info</h1>
      <div class="flex gap-4 text-lg">
        <img
          src="../Banter-image/location.png"
          alt=""
          class="w-8 h-8 flex items-center"
        />
        <p>Candi Kalasan Timur 7a no. 4, Semarang</p>
      </div>
      <div class="flex gap-4 text-lg">
        <img
          src="../Banter-image/old-typical-phone.png"
          alt=""
          class="w-8 h-8 flex items-center"
        />
        <p>0247613372</p>
      </div>
      <div class="flex gap-4 text-lg">
        <img
          src="../Banter-image/email.png"
          alt=""
          class="w-8 h-8 flex items-center"
        />
        <a
          href="mailto:office@banter.id?subject=Penawaran Harga&body=Apa penawaran harga hari ini ?"
          target="_blank">office@banter.id</a
        >
      </div>
    </div>
  </div>
</footer>
