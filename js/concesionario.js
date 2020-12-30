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
