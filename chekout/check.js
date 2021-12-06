
const navToggle = document.querySelector(".toggle-btn");

      navToggle.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-open");
    });
    const toggle = document.getElementById("toggle");
    toggle.onclick = () => {
      toggle.classList.toggle("active");
    };
    


    const drinks = [
        { title: "Expresso", image: '../images/exxpreso.png',cost : 'Rp.10.000'},
        { title: "Coffe Latte", image: '../images/bear.png',cost : 'Rp.15.000' },
        { title: "Cappucino", image: '../images/cappucino.png',cost:'Rp.5.000'},
        { title: "Red Velvet Latte ", image: '../images/redvelvet.png',cost : 'Rp.33.000' },
        { title: "Choco Rhum", image: '../images/chocorum.png',cost : 'Rp.28.000' },
        { title: "Black Forest", image: '../images/blackforest.png',cost : 'Rp.30.000' },
        { title: "Chicken Katsu Dabu-dabu", image: '../images/chickenkatsu.png',cost : 'Rp.60.000' },
        { title: "Salmon Truffle Teriyaki", image: '../images/salmon.png',cost : 'Rp.60.000' },
        { title: "Wiener Schnitzel", image: '../images/wiener.png',cost : 'Rp.69.000' },
      ];



drinks.map((item)=>{
    document.getElementById('menu').innerHTML+=`<div class="card">
    <img src="${item.image}" alt="">
    <p style="margin-top: 1vh; font-size:20px;">${item.title}</p>
    <p style ="margin-top:-2vh;font-weight:bold;">${item.cost}</p>
    </div>`    
        
})

