// Crear un programa que me permita generar un saludo personalizado

const generarSaludo = (nombre, edad) => {
  const mensaje = `Hola ${nombre} Tienes ${edad} años.`;
  return mensaje;
}

const saludoPersonalizado = generarSaludo("July", 15);
console.log(saludoPersonalizado);
