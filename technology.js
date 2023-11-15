

let page=2




const fetchdata=async()=>{

 const response=await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=e15a87d942a840fca586073cfc8894c6&pageSize=10&page=1&category=technology")
const json=await response.json()
json.articles.map((ele)=>{

let link=document.createElement("a")
link.setAttribute("href",`${ele.url}`)

let x=document.createElement("div")
x.setAttribute("class","cards")
x.setAttribute("data-aos","fade-down-right")

let y=document.createElement("img")

y.setAttribute("src",`${ele.urlToImage?ele.urlToImage:"/breaking.jpg"}`)
y.setAttribute("alt","")

let z=document.createElement("div")
z.setAttribute("class","right-side")
let h3=document.createElement("h3")
h3.innerHTML=`${ele.title}`
let p=document.createElement("p")
p.innerHTML=`${ele.description?ele.description.slice(0,80)+"...":""}`
x.appendChild(y)
x.appendChild(z)
z.append(h3)
z.append(p)


let auther=document.createElement("span")
auther.setAttribute("class","auther")

let publish=document.createElement("span")
publish.setAttribute("class","publish")
document.querySelector(".news-container").appendChild(link)
link.appendChild(x)

let content=document.createElement("p")
content.setAttribute("class","content")
auther.innerHTML=`${ele.author}`
publish.innerHTML=`${ele.publishedAt}`
content.innerHTML=`${ele.content?ele.content.slice(0,40):""}`
z.append(auther)
z.append(publish)
z.append(content)

})
}

fetchdata()


window.addEventListener("scroll",()=>{
  let loading=document.getElementById("loading")
  if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight)
  {
    loading.style.display="flex"
    setTimeout(()=>{
      fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e15a87d942a840fca586073cfc8894c6&pageSize=10&page=${page}&category=technology`).then((res)=>res.json()).then((json)=>{


      json.articles.map((ele)=>{
  
        let link=document.createElement("a")
        link.setAttribute("href",`${ele.url}`)
        
        let x=document.createElement("div")
        x.setAttribute("class","cards")
        x.setAttribute("data-aos","fade-down-right")
        
        let y=document.createElement("img")
        
        y.setAttribute("src",`${ele.urlToImage?ele.urlToImage:"/breaking.jpg"}`)
        y.setAttribute("alt","")
        
        let z=document.createElement("div")
        z.setAttribute("class","right-side")
        let h3=document.createElement("h3")
        h3.innerHTML=`${ele.title}`
        let p=document.createElement("p")
        p.innerHTML=`${ele.description?ele.description.slice(0,80):""}`
        x.appendChild(y)
        x.appendChild(z)
        z.append(h3)
        z.append(p)
        
        
        let auther=document.createElement("span")
        auther.setAttribute("class","auther")
        
        let publish=document.createElement("span")
        publish.setAttribute("class","publish")
        document.querySelector(".news-container").appendChild(link)
        link.appendChild(x)
        
        let content=document.createElement("p")
        content.setAttribute("class","content")
        auther.innerHTML=`${ele.author}`
        publish.innerHTML=`${ele.publishedAt}`
        content.innerHTML=`${ele.content?ele.content.slice(0,40):""}`
        z.append(auther)
        z.append(publish)
        z.append(content)
        
        })
  
   loading.style.display="none"
  
  
      })
    },3000)
    
   page=page+1
  }
})
