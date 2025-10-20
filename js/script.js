// Menu burger
document.addEventListener('DOMContentLoaded', function(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  if(burger){
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('active');
    });
  }

  // Lightbox gallery
  const figures = document.querySelectorAll('.gallery-grid figure');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.querySelector('.lightbox-img');
  const lbCaption = document.querySelector('.lightbox-caption');
  const lbClose = document.querySelector('.lightbox-close');
  if(figures && lightbox){
    figures.forEach(f => {
      f.addEventListener('click', ()=>{
        const img = f.querySelector('img');
        const caption = f.querySelector('figcaption')?.innerText || '';
        lbImg.src = img.src;
        lbImg.alt = img.alt || '';
        lbCaption.textContent = caption;
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden','false');
      });
    });
    lbClose.addEventListener('click', ()=>{
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden','true');
    });
    lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) { lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); } });
  }

  // Gallery filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const year = btn.dataset.filter;
      document.querySelectorAll('#gallery figure').forEach(fig=>{
        if(year==='all' || fig.dataset.year===year) fig.style.display = '';
        else fig.style.display = 'none';
      });
    });
  });

  // Countdown to 12 March 2026 (local time)
  const countdownEl = document.getElementById('countdown');
  if(countdownEl){
    function updateCountdown(){
      const target = new Date('2026-03-12T09:30:00'); // le 12 mars 2026 à 9h30
      const now = new Date();
      const diff = target - now;
      if(diff<=0){ countdownEl.innerHTML = '<strong>L'événement a commencé !</strong>'; return; }
      const days = Math.floor(diff/86400000);
      const hours = Math.floor((diff%86400000)/3600000);
      const minutes = Math.floor((diff%3600000)/60000);
      const seconds = Math.floor((diff%60000)/1000);
      countdownEl.innerHTML = '<div class="countdown-inner"><strong>Compte à rebours :</strong> '+days+'j '+hours+'h '+minutes+'m '+seconds+'s</div>';
    }
    updateCountdown(); setInterval(updateCountdown,1000);
  }
});
