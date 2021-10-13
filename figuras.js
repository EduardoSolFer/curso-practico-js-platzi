console.log("Hello world");

//Codigo del cuadrado
console.group("Cuadrado"); //Sirve para agrupar en consola
const  ladoCuadrado = 3;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado );
console.groupEnd();


//Codigo del triangulo
console.group("Triangulo");
const  lado1Trinagulo = 3;
console.log("El lado 1 del trinagulo mide: " + lado1Trinagulo + " cm");

const  lado2Trinagulo = 5;
console.log("El lado 2 del trinagulo mide: " + lado2Trinagulo + " cm");

const  lado3Trinagulo = 2;
console.log("El lado 3 del trinagulo mide: " + lado3Trinagulo + " cm");
console.groupEnd();

//Figuras