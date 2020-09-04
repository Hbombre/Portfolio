const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const toolItems = document.querySelectorAll('.toolItem')

    toolItems.forEach((item) =>{
        item.addEventListener("mouseOver", function(event){
            event.target.inner
            item.style.animation = `animateText 0.7 ease forwards`;
        })
    })


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
            }
        });

        burger.classList.toggle('toggle')

    });
}

const app = ()=>{
    navSlide();
}

app();