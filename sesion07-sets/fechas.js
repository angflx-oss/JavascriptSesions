
const fechaToday = new Date();

const fechaNacimiento = new Date(1998,10,18);

const comparacionFechas = fechaToday > fechaNacimiento;

const diaNacimiento = fechaNacimiento.getDate();

const mesNacimiento = fechaNacimiento.getMonth() + 1;

const anyoNacimiento = fechaNacimiento.getFullYear();