document.addEventListener("DOMContentLoaded",()=>{
    const faqContent=document.querySelector(".faq-content")
    faqContent.addEventListener("click",(e)=>{
       const groupHeader= e.target.closest(".faq-group-header")
       if(!groupHeader) return;
       const group=groupHeader.parentElement;
       const groupBody=group.querySelector(".faq-group-body")
       const icon = groupHeader.querySelector("i")
    //    toggle icon
    icon.classList.toggle("bi-file-plus-fill")
    icon.classList.toggle("bi-file-minus-fill")
       
    //   togglle visibility of body
    groupBody.classList.toggle("open")
    // close other bodies
    const otherGroups=faqContent.querySelectorAll(".faq-group")
    otherGroups.forEach((other)=>{
        if(other!==group){
            const otherBodies=other.querySelector(".faq-group-body")
            const otherIcon=other.querySelector(".faq-group-header i")
            otherBodies.classList.remove("open")
            otherIcon.classList.remove("bi-file-minus-fill")
            otherIcon.classList.add("bi-file-plus-fill")
        }
    })
    })
})

// mobile menu

document.addEventListener("DOMContentLoaded",()=>{
    const hb=document.querySelector(".hb")
    const mobileMenu=document.querySelector(".mobile-menu")
    hb.addEventListener("click",()=>{
        mobileMenu.classList.toggle("active")
    })
})