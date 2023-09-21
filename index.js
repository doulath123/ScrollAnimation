let t1=gsap.timeline({defaults:{ease:"SlowMo.easeOut"}});

        t1.to("#create", {y:"0%", duration:0.7, stagger:0.2});

           const navLinkEls=document.querySelectorAll(".dot");
           const sectionEls=document.querySelectorAll('.sec');

           let currentSection='one';
           window.addEventListener("scroll", ()=>{
            sectionEls.forEach(sectionEl=>{
                if(window.scrollY>=sectionEl.offsetTop){
                    currentSection= sectionEl.id;
                }
            });

            navLinkEls.forEach(navLinkEl=>{
                if(navLinkEl.href.includes(currentSection)){
                    
                    document.querySelector(".active").classList.remove('active');
                    navLinkEl.classList.add('active');
                }

            })

           })