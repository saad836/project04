
//PRELOADER JS

window.addEventListener("load", function(){
    
    document.querySelector(".preloader").classList.add("opacity-0");
    
    setTimeout(function(){
       document.querySelector(".preloader").style.display="none";
    },1000)
})


//PORTFOLIO ITEM FILTER 


 const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length;
      




     for(let i=0; i<totalFilterBtn; i++){
         
         filterBtns[i].addEventListener("click", function(){
             filterContainer.querySelector(".active").classList.remove("active");
             this.classList.add("active");
             
             const filterValue=this.getAttribute("data-filter");
             for(let k=0; k<totalPortfolioItem; k++){
                 if(filterValue === portfolioItems[k].getAttribute("data-category")){
                     portfolioItems[k].classList.remove("hide");
                     portfolioItems[k].classList.add("show");
                 }
                 
                 else{
                      portfolioItems[k].classList.remove("show");
                      portfolioItems[k].classList.add("hide");
                 }
                 
                 if(filterValue === "all"){
                     
                     portfolioItems[k].classList.remove("hide");
                     portfolioItems[k].classList.add("show");
                     
                 }
             }
         })
         
         
     } 
      
      

//ASIDE NAVBER

const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;


for(let i=0; i<totalNavList; i++){
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function(){
        //REMOVE BACK SECTION CLASS
         for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
        
        for(let j=0; j<totalNavList; j++){
        if(navList[j].querySelector("a").classList.contains("active")){
            
         //ADD BACK SECTION CLASS  
            
            allSection[j].classList.add("back-section");
        }
            navList[j].querySelector("a").classList.remove("active");
        }   
      this.classList.add("active");
        
      showSection(this);
        
        
        if(window.innerWidth < 1200){ 
           asideSectionTogglerBtn(); 
        }
        
    })
}






function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
   document.querySelector("#"+target).classList.add("active")
}

function updateNav(element){
    
    for(let i=0; i<totalNavList; i++){
        
        navList[i].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
           navList[i].querySelector("a").classList.add("active"); 
        }
    }
    
    //console.log(element.getAttribute("href").split("#")[1])
    
}

 
document.querySelector(".hire-me").addEventListener("click",function(){
     
     showSection(this);
     updateNav(this);
     
 })



 const navToggolerBtn=document.querySelector(".nav-toggler"),
       aside=document.querySelector(".aside");
 navToggolerBtn.addEventListener("click",asideSectionTogglerBtn);
      

 function asideSectionTogglerBtn(){
     aside.classList.toggle("open");
     navToggolerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
 }

















    