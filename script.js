let mat1500 = [];
let mun1500 = [];
let mod1500 = [];
let comps = 0;
let despl = 0;
let letra2 = ["F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"];
let letra3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
let estados = ["Ahome", "Angostura", "Badiraguato", "Concordia", "Cosalá", "Culiacán", "Choix", "Elota", "Escuinapa", "El Fuerte", "Guasave", "Mazatlán", "Mocorito", "Rosario", "Salvador Alvarado", "San Ignacio", "Sinaloa", "Navolato", "El Dorado", "Juan José Ríos"];
let modelos = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
let boton_gen = document.getElementById("boton_generar");
let boton_sort = document.getElementById("boton_sort");

boton_gen.addEventListener("click", function() {
    mat1500 = [];
    mun1500 = [];
    mod1500 = [];
    for (let i = 0; i < 1500; i++) {
        let randl2 = Math.floor(Math.random() * letra2.length);
        let randl3 = Math.floor(Math.random() * letra3.length);
        let rand0 = Math.floor(Math.random() * 10);
        let rand1 = Math.floor(Math.random() * 10);
        let rand2 = Math.floor(Math.random() * 10);
        let munnum = Math.floor(Math.random() * estados.length);
        let munmod = Math.floor(Math.random() * modelos.length);
        mat1500.push("V" + letra2[randl2] + letra3[randl3] + rand0 + rand1 + rand2);
        mun1500.push(estados[munnum]);
        mod1500.push(modelos[munmod]);
    }
    llenarTabla();
});

function llenarTabla() {
    let tbody = document.querySelector("#tabla_matriculas tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < mat1500.length; i++) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = mat1500[i];
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = mun1500[i];
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = mod1500[i];
        tr.appendChild(td3);

        tbody.appendChild(tr);
    }
}

function insSort(mat1500, mun1500, mod1500) {
    despl = 0;
    comps = 0; 

    for (let j = 1; j < mat1500.length; j++) {
        let keyMat = mat1500[j];
        let keyMun = mun1500[j];
        let keyMod = mod1500[j];
        let i = j - 1;
        
        while (i >= 0 && mat1500[i] > keyMat) {
            despl += 1;
            comps += 1;
            mat1500[i + 1] = mat1500[i];
            mun1500[i + 1] = mun1500[i];
            mod1500[i + 1] = mod1500[i];
            i = i - 1;
        }
        mat1500[i + 1] = keyMat;
        mun1500[i + 1] = keyMun;
        mod1500[i + 1] = keyMod;
        comps += 1;
    }
}

boton_sort.addEventListener("click", function() {
    insSort(mat1500, mun1500, mod1500);
    llenarTabla();
    alert("El programa ha tenido " + comps + " comparaciones.");
    alert("El programa ha tenido " + despl + " desplazamientos.");
});