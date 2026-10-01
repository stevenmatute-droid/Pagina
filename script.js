let usuarios=[];
let contador=1;

function agregarUsuario(){
    const nombre=document.getElementById("nombre").value.trim();
    const correo=document.getElementById("correo").value.trim();

    if(!nombre||!correo){
        alert("Por favor, complete todos los campos.");
        return;
    }

    usuarios.push({id:contador++,nombre,correo});
    mostrarUsuarios();

    document.getElementById("nombre").value="";
    document.getElementById("correo").value="";
}

function mostrarUsuarios(){
    const tabla=document.getElementById("tablaUsuarios");
    tabla.innerHTML="";

    usuarios.forEach(usuario=>{
        const fila=document.createElement("tr");
        fila.innerHTML=`
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td>
                <button class="btn-editar" onclick="editarUsuario(${usuario.id})">Editar</button>
                <button class="btn-eliminar" onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
            </td>`;
        tabla.appendChild(fila);
    });
}

function eliminarUsuario(id){
    usuarios=usuarios.filter(usuario=>usuario.id!==id);
    mostrarUsuarios();
}

function editarUsuario(id){
    const usuario=usuarios.find(usuario=>usuario.id===id);
    if(!usuario)return;

    const nuevoNombre=prompt("Ingrese el nuevo nombre:",usuario.nombre);
    const nuevoCorreo=prompt("Ingrese el nuevo correo:",usuario.correo);

    if(nuevoNombre&&nuevoCorreo){
        usuario.nombre=nuevoNombre.trim();
        usuario.correo=nuevoCorreo.trim();
        mostrarUsuarios();
    }
}
