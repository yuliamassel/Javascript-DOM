const navToggle = document.querySelector(".toggle-btn");

      navToggle.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-open");
    });
    const toggle = document.getElementById("toggle");
    toggle.onclick = () => {
      toggle.classList.toggle("active");
    };
    
    const books = [
        { title: "Expresso", image: './images/exxpreso.png',cost : 'Rp.10.000'},
        { title: "Coffe Latte", image: './images/bear.png',cost : 'Rp.15.000' },
        { title: "Cappucino", image: './images/cappucino.png',cost:'Rp.5.000'},
        { title: "Red Velvet Latte ", image: './images/redvelvet.png',cost : 'Rp.33.000' },
        { title: "Choco Rhum", image: './images/chocorum.png',cost : 'Rp.28.000' },
        { title: "Black Forest", image: './images/blackforest.png',cost : 'Rp.30.000' },
        { title: "Chicken Katsu Dabu-dabu", image: './images/chickenkatsu.png',cost : 'Rp.60.000' },
        { title: "Salmon Truffle Teriyaki", image: './images/salmon.png',cost : 'Rp.60.000' },
        { title: "Wiener Schnitzel", image: './images/wiener.png',cost : 'Rp.69.000' },
      ];

   
// const fetchDrink = ()=>{
//     console.log(books)
// }    
    
// document.getElementById('check').addEventListener('click',()=>{
//     console.log('baru',books)
// })

books.map((item)=>{
    document.getElementById('menu').innerHTML+=`<div class="card">
    <img src="${item.image}" alt="">
    <p style="margin-top: 1vh; font-size:20px;">${item.title}</p>
    <p style ="margin-top:-2vh;font-weight:bold;">${item.cost}</p>
    </div>`    
        
})
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // document.getElementById('check',()=>{
    //     fetch('https://61a70a9c8395690017be948a.mockapi.io/menu')
    //     .then(res=>res.json())
    //     .then(json=>{
    //         drinks = json.map((newArr)=>{
    //             return newArr
    //         })
    //     })
    //     const drink = ({avatar,drinkName,cost})=>{
    //         return`<div class="card m-2 p-2">
    //             <img src=${avatar} class="card-img-top" alt="...">
    //             <div class = "card-body">
    //                 <h5 class = "card-title">${drinkName}</h5>
    //                 <span class="card-text">${cost}</span>
    //             </div>
    //             </div>`    
    //     }
    //     drinks.map((item)=>{
    //         document.getElementById('menu').innerHTML += drink(item)
    //     })
    // })

