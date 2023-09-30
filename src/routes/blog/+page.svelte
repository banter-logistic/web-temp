<script>
  import Blog from "../blog.svelte";
  import Layout from "./layout.svelte"
  import { blog} from "$lib/data/dataBlog";


</script>

 <Layout>
  <div class=" w-[85%] mx-auto flex flex-wrap justify-center items-center gap-8 mt-16 border py-8">
  {#each blog as bg , i  }

  
<a href="/blog/{bg.id}" class="   md:w-[19rem] w-[17rem] bg-white  p-4 hover:text-white shadow-2xl rounded-2xl flex flex-col gap-4 justify-center items-center transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:bg-[#148CEB] duration-300  
    " >
        <img src={bg.img} alt="" class="w-[17rem] h-[8rem]  rounded-xl shadow-xl ">
        <div class="flex gap-4">
        <img src="../Banter-image/profile-user.png" alt="" class="w-[1.5rem] h-[1.5rem]">
        <p>{bg.user}</p>
        <img src="../Banter-image/calendar.png" alt="" class="w-[1.5rem] h-[1.5rem]">
        <p>{bg.date}</p>
        </div>
        <h1 class="font-semibold sm:text-lg  text-md ">{bg.title} {bg.id}</h1>
        <p class="text-justify sm:text-md text-sm px-4 text-ellipsis ">{bg.desc}</p>
    </a>


    
  {/each}
    </div>
 </Layout>

