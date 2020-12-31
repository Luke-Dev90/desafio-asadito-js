const TablaBody = document.getElementById('descripcion-productos');
const Apellido = document.getElementById('apellido-nombre');
const Localidad = document.getElementById('localidad');
const Edad = document.getElementById('edad');
const Horarios = document.getElementById('horarios');

const datos =[{
    apellido: 'Chalela',
    nombre: 'Lucas',
    localidad: 'San Fernando',
    horarios: ' 14 a 22hs',
    edad: 30
}]
datos.map( d =>{
    Apellido.innerHTML = `Apellido y Nombre: ${d.apellido} ${d.nombre}`;
    Localidad.innerHTML = `Localidad: ${d.localidad}`;
    Horarios.innerHTML = `Disponible apartir de: ${d.horarios}`
    Edad.innerHTML = `Edad: ${d.edad}`;

})

// <h2 id="apellido-nombre"></h2>
// <h3 id="localidad"></h3>
// <h3 id="edad"></h3>



const vehiculos = [
    {
        Marca: 'Peugeot',
        Modelo:'206',
        Puertas:'4',
        Cilindrada:'',
        Precio:200000
    },
    {
        Marca: 'Honda',
        Modelo:'Titan',
        Puertas:'',
        Cilindrada:'125cc',
        Precio:60000
    },
    {
        Marca: 'Peugeot',
        Modelo:'208',
        Puertas:'5',
        Cilindrada:'',
        Precio:250000
    },
    {
        Marca: 'Yamaha',
        Modelo:'YBR',
        Puertas:'',
        Cilindrada:'160cc',
        Precio:200000
    },
]
function Listar(){
    vehiculos.map((v)=>{
        console.log(`Marca ${v.Marca} // Modelo: ${v.Modelo} // Puertas: ${v.Puertas} // Cilindrada: ${v.Cilindrada} // Precio: ${v.Precio}`);
    } )
    console.log('====================================================================');    
}

Listar();

function vehiculosCarosBaratos(){
    vehiculos.sort( (a,b) =>{
        return a.Precio - b.Precio;
    })
    let vehiculoCaro = vehiculos[(vehiculos.length-1)];
    let vehiculoBarato = vehiculos[0];
    
    console.log(`Vehiculo más caro: ${vehiculoCaro.Marca} ${vehiculoCaro.Modelo}`);
    console.log(`Vehiculo más barato: ${vehiculoBarato.Marca} ${vehiculoBarato.Modelo}`);
    Buscar();
    console.log('====================================================================');    
}

vehiculosCarosBaratos();

function Buscar(){
    let letra = /Y{1,4}/;
    vehiculos.map(v =>{
        if(v.Modelo.match(letra)){
            console.log(`Vehiculo que contien en el modelo la letra: 'Y': ${v.Marca} ${v.Modelo} $ ${v.Precio}`);
        }
    })
}

function vehiculosMayorMenor(){
    vehiculos.sort( (a,b) =>{
        return b.Precio - a.Precio;
    })
    vehiculos.map( v =>{
        console.log(v.Marca, v.Modelo);
    })
    console.log('====================================================================');    
}
vehiculosMayorMenor();

function ListarTabla(){

    for (var i = 0; i < vehiculos.length; i++) {
        
        // tr para hileras
        var hilera = document.createElement("tr");
        
        // <td> para listar tabla
        var td1  = document.createElement('td');
        td1.innerHTML = i;
        
        var td2 = document.createElement('td');
        td2.innerHTML = vehiculos[i].Marca;

        var td3 = document.createElement('td');
        td3.innerHTML = vehiculos[i].Modelo;
        
        var td4 = document.createElement('td');
        td4.innerHTML = vehiculos[i].Puertas ? vehiculos[i].Puertas : 'N/A';
        
        var td5 = document.createElement('td');
        td5.innerHTML = vehiculos[i].Cilindrada ? vehiculos[i].Cilindrada : 'N/A';

        var td6 = document.createElement('td');
        td6.innerHTML = vehiculos[i].Precio && vehiculos[i].Precio;
        
        hilera.appendChild(td1);
        hilera.appendChild(td2);
        hilera.appendChild(td3);
        hilera.appendChild(td4);
        hilera.appendChild(td5);
        hilera.appendChild(td6);
        
        TablaBody.appendChild(hilera);
      }
}

ListarTabla();

// Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00
// Marca: Honda // Modelo: Titan // Cilindrada: 125cc // Precio: $60.000,00
// Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00
// Marca: Yamaha // Modelo: YBR // Cilindrada: 160cc // Precio: $80.500,50
// =============================
// Vehículo más caro: Peugeot 208
// Vehículo más barato: Honda Titan
// Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR $80.500,50
// =============================
// Vehículos ordenados por precio de mayor a menor:
// Peugeot 208
// Peugeot 206
// Yamaha YBR
// Honda Titan
