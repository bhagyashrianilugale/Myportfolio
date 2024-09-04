let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
let sideMenu = document.getElementById("sidemenu");
const scriptURL = "https://script.google.com/macros/s/AKfycbwIpvXTnjwSWOsg0AttCqpmhXGWkMRWYw1H9n2dDUVi8Nm-wu-dF6VxygiEw1H_WYDG/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")



function openTab(tabname) {
    console.log("clicked");
    console.log(tabname);
    if (!tabLinks || !tabContents) {
        console.error("tabLinks or tabContents is not initialized");
        return;
    }
    
    for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("active-link");
        
    }

    for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove("active-tab");
        
    }
   
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");    
}

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-200px";
}


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form);
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
          msg.innerHTML = "Message sent successfully";
           setTimeout(async()=>{
             msg.innerHTML = "";
             await form.reset();
           },3000)
        })
      .catch(error => console.error('Error!', error.message))
  })
