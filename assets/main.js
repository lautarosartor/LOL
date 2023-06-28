//JS para filtrar los personajes por rol
document.getElementById('filtro-roles').addEventListener('change', function() {
    let rolSeleccionado = this.value;

    //Oculta todas las tarjetas de personajes
    let tarjetas = document.querySelectorAll('section');
    for (let i = 0; i < tarjetas.length; i++) {
        tarjetas[i].style.display = 'none';
    }

    //Muestra las tarjetas de personajes que coincidan con el rol seleccionado o muestra todas si se selecciona "todos"
    if (rolSeleccionado === 'todos') {
        for (let i = 0; i < tarjetas.length; i++) {
            tarjetas[i].style.display = 'block';
        }
    }
    else {
        let tarjetasFiltradas = document.getElementsByClassName(rolSeleccionado);
        for (let i = 0; i < tarjetasFiltradas.length; i++) {
            tarjetasFiltradas[i].style.display = 'block';
        }
    }
});

const campeones = [
    {
        "id": 1,
        "name": "Ahri",
        "image": "./assets/img/Campeones/ahri.jpg",
        "type": "mago"
    },
    {
        "id": 2,
        "name": "Alistar",
        "image": "./assets/img/Campeones/alistar.jpg",
        "type": "tanque"
    },
    {
        "id": 3,
        "name": "Amumu",
        "image": "./assets/img/Campeones/amumu.jpg",
        "type": "tanque"
    },
    {
        "id": 4,
        "name": "Annie",
        "image": "./assets/img/Campeones/annie.jpg",
        "type": "mago"
    },
    {
        "id": 5,
        "name": "Blitzcrank",
        "image": "./assets/img/Campeones/blitzcrank.jpg",
        "type": "tanque"
    },
    {
        "id": 6,
        "name": "Brand",
        "image": "./assets/img/Campeones/brand.jpg",
        "type": "mago"
    },
    {
        "id": 7,
        "name": "Cassiopeia",
        "image": "./assets/img/Campeones/cassiopeia.jpg",
        "type": "mago"
    },
    {
        "id": 8,
        "name": "Cho'Gath",
        "image": "./assets/img/Campeones/cho'gath.jpg",
        "type": "tanque"
    },
    {
        "id": 9,
        "name": "Darius",
        "image": "./assets/img/Campeones/darius.jpg",
        "type": "luchador"
    },
    {
        "id": 10,
        "name": "Fiora",
        "image": "./assets/img/Campeones/fiora.jpg",
        "type": "luchador"
    },
    {
        "id": 11,
        "name": "Garen",
        "image": "./assets/img/Campeones/garen.jpg",
        "type": "luchador"
    },
    {
        "id": 12,
        "name": "Gnar",
        "image": "./assets/img/Campeones/gnar.jpg",
        "type": "luchador"
    },
    {
        "id": 13,
        "name": "Graves",
        "image": "./assets/img/Campeones/graves.jpg",
        "type": "tirador"
    },
    {
        "id": 14,
        "name": "Irelia",
        "image": "./assets/img/Campeones/irelia.jpg",
        "type": "luchador"
    },
    {
        "id": 15,
        "name": "Janna",
        "image": "./assets/img/Campeones/janna.jpg",
        "type": "soporte"
    },
    {
        "id": 16,
        "name": "Jarvan IV",
        "image": "./assets/img/Campeones/jarvan IV.jpg",
        "type": "tanque"
    },
    {
        "id": 17,
        "name": "Jinx",
        "image": "./assets/img/Campeones/jinx.jpg",
        "type": "tirador"
    },
    {
        "id": 18,
        "name": "Leblanc",
        "image": "./assets/img/Campeones/leblanc.jpg",
        "type": "asesino"
    },
    {
        "id": 19,
        "name": "Lee Sin",
        "image": "./assets/img/Campeones/lee sin.jpg",
        "type": "luchador"
    },
    {
        "id": 20,
        "name": "Leona",
        "image": "./assets/img/Campeones/leona.jpg",
        "type": "tanque"
    },
    {
        "id": 21,
        "name": "Lucian",
        "image": "./assets/img/Campeones/lucian.jpg",
        "type": "tirador"
    },
    {
        "id": 22,
        "name": "Morgana",
        "image": "./assets/img/Campeones/morgana.jpg",
        "type": "mago"
    },
    {
        "id": 23,
        "name": "Nami",
        "image": "./assets/img/Campeones/nami.jpg",
        "type": "soporte"
    },
    {
        "id": 24,
        "name": "Poppy",
        "image": "./assets/img/Campeones/poppy.jpg",
        "type": "tanque"
    },
    {
        "id": 25,
        "name": "Sion",
        "image": "./assets/img/Campeones/sion.jpg",
        "type": "tanque"
    },
    {
        "id": 26,
        "name": "Talon",
        "image": "./assets/img/Campeones/talon.jpg",
        "type": "asesino"
    },
    {
        "id": 27,
        "name": "Vayne",
        "image": "./assets/img/Campeones/vayne.jpg",
        "type": "tirador"
    },
    {
        "id": 28,
        "name": "Vel'Koz",
        "image": "./assets/img/Campeones/vel'koz.jpg",
        "type": "mago"
    },
    {
        "id": 29,
        "name": "Viktor",
        "image": "./assets/img/Campeones/viktor.jpg",
        "type": "mago"
    },
    {
        "id": 30,
        "name": "Wukong",
        "image": "./assets/img/Campeones/wukong.jpg",
        "type": "luchador"
    },
    {
        "id": 31,
        "name": "Xayah",
        "image": "./assets/img/Campeones/xayah.jpg",
        "type": "tirador"
    },
    {
        "id": 32,
        "name": "Xin Zhao",
        "image": "./assets/img/Campeones/xin zhao.jpg",
        "type": "luchador"
    },
    {
        "id": 33,
        "name": "Yasuo",
        "image": "./assets/img/Campeones/yasuo.jpg",
        "type": "luchador"
    },
    {
        "id": 34,
        "name": "Zed",
        "image": "./assets/img/Campeones/zed.jpg",
        "type": "asesino"
    },
    {
        "id": 35,
        "name": "Zilean",
        "image": "./assets/img/Campeones/zilean.jpg",
        "type": "soporte"
    },
];

let card = document.getElementById("card-template");

campeones.map((x) => {
    card.innerHTML += `
        <section class="${x.type}">
            <img src="${x.image}" alt="${x.name}">
            <div>
                <h5 class="card-title text-center">${x.name}</h5>
            </div>
        </section>`
});