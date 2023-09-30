<script>
  import {blog as data } from "$lib/data/dataBlog.js"
// export let data
</script>

{#each data  as d }
  
 <div class="container">
      <div class="top">
        <div class="info">
          <h1 class="title">{d.title}</h1>
          <p class="desc">
            {d.desc}
            
          </p>
          <div class="author">
            <img
              src={d.img}
              alt=""
              width={40}
              height={40}
              class="avatar"
            />
            <span class="user">{d.user}</span>
          </div>
        </div>
        <div class="imageContainer">
          <img
            src={d.img}
            alt=""
            class="image"
          />
        </div>
      </div>
      <div class="content">
        <p class="text">
          {d.content}
           
        </p>
      </div>
    </div>

    {/each}


    <style>

      .container {
  margin-top: 100px;
}

.top {
  display: flex;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title{
  font-size: 40px;
}

.desc{
  font-size: 18px;
  font-weight: 300;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  object-fit: cover;
  border-radius: 50%;
}

.imageContainer {
  flex: 1;
  height: 300px;
  position: relative;
}

.image {
  object-fit: cover;
}

.content {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 300;
  color: #999;
  text-align: justify;
}
    </style>