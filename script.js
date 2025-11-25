// script.js — small enhancements
document.addEventListener("DOMContentLoaded", function(){
  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"], a[href*=".html"]').forEach(a => {
    a.addEventListener('click', function(e){
      // allow external links and downloads normally
      if(this.getAttribute('href').endsWith('.xlsx')) return;
      // small delay for file links to navigate normally
      setTimeout(()=>{},150);
    });
  });
});
