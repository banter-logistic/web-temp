<script>
  

export let data

</script>

  <div class="w-[85%] mx-auto ">
 <div class="container">
      <div class="top">
        <div class="info">
          <h1 class="font-bold md:text-2xl sm:text-xl text-xl">{data.res.title}</h1>
          <p class="text-[#79797C] md:text-xl text-sm sm:text-lg">
            {data.res.desc}
            
          </p>
          <div class="author ">
            <img
              src={data.res.userProfile}
              alt=""
              width={40}
              height={40}
              class="avatar "
            />
            <span class="user">{data.res.user}</span>
          </div>
        </div>
        <div class="imageContainer">
          <img
            src={data.res.img}
            alt=""
            class="object-cover w-full h-[20rem]  rounded-lg"
          />
        </div>
      </div>
      <div class="content">
        <p class="text indent-20">
          {data.res.content}
           
        </p>
      </div>
    </div>

</div>

    <style>

      .container {
  margin-top: 50px;
  padding: 20px;
}

.top {
  display: flex;
  width:100%;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}



.author {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.avatar {
  object-fit: cover;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
}

.imageContainer {
  flex: 1;
  position: relative;
}



.content {
  margin-top: 50px;
  display: flex;

}
.text{
   font-size: 20px;
  font-weight: 400;
  color: #999;
  text-align: justify;
}


    </style>