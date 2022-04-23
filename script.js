
   const api = `AIzaSyA3_AICM9pc6hUMuEQxVvBJ6GgY5pqDqLs`
   // 
   fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=44&key=${api}`).then((res)=>{
          return res.json();
   }).then((res)=>{
       console.log(res);
       append1(res.items)
   })
   
   const  searchVideos = async () =>
   {
   
       try{
          const q = document.getElementById("query").value;
          const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=${api}`);
   
          const data = await res.json()
   
       //   console.log(data)
       append(data.items);
       }
       catch(error){
     console.log("err:" ,error)
       }
   }
   
   const append = (videos) =>{
      console.log(videos)
       document.getElementById("video").innerHTML = null;
       videos.forEach(({id:{videoId},snippet:{thumbnails:{medium:{url}}, title}})=>{
                   //  console.log(title)
               let box = document.createElement("div");
               box.setAttribute("id","box")
               let thumbnail = document.createElement("img");
               thumbnail.src = url;
               thumbnail.addEventListener("click",()=>{
                  
                   var arr = [];
                   
                   console.log(videoId)
                    arr.push(videoId);
                    localStorage.setItem("videoId",JSON.stringify(arr));
                   window.location.href = "show.html"
               })
           //    let iframe = document.createElement("iframe");
           //    iframe.src = `https://www.youtube.com/embed/${videoId}`;
           //    iframe.width = "100%";
           //    iframe.height = "100%"
           //    iframe.allow = "fullscreen"
              let name = document.createElement("h4");
              name.innerText = title
              name.style.color = "white"
              box.append(thumbnail,name);
   
              document.getElementById("video").append(box);
       })
   }
   const append1 = (videos) =>{
     
       document.getElementById("video").innerHTML = null;
       videos.forEach(({id,snippet:{thumbnails:{medium:{url}}, title}})=>{
                    
               let box = document.createElement("div");
               box.setAttribute("id","box")
               let thumbnail = document.createElement("img");
               thumbnail.src = url;
               thumbnail.addEventListener("click",()=>{
                   var arr = [];
                   
                   console.log(id)
                    arr.push(id);
                    localStorage.setItem("videoId",JSON.stringify(arr));
                   window.location.href = "show.html"
               })
           //    let iframe = document.createElement("iframe");
           //    iframe.src = `https://www.youtube.com/embed/${videoId}`;
           //    iframe.width = "100%";
           //    iframe.height = "100%"
           //    iframe.allow = "fullscreen"
              let name = document.createElement("h4");
              name.innerText = title
              name.style.color = "white"
              box.append(thumbnail,name);
   
              document.getElementById("video").append(box);
       })
   }
   