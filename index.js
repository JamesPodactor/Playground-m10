// EJ. 1 hasId
// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene
// una propiedad llamada id (debe devolver booleano true / false ).

// const myObject = [
//     {userName: "Juan", registration: 45873021, regDate: 15/8/2014, id: "J&J"}
// ];

// const hasId = obj => obj.some(user => user.id);
// console.log(hasId(myObject));
//____________________________________________________________________________________________________________


// EJ. 2 head
// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

// const myArray = ["a", "b", "c", "d", "e", "f", "g"];

// const head = element => {
//     console.log(element);
// };
// head(...myArray);
//____________________________________________________________________________________________________________


// EJ. 3 tail
// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los
// elementos menos el primero.

// const myArray = ["a", "b", "c", "d", "e", "f", "g"];

// const tail = arr => {
//     const [, ...restElements] = arr;
//     console.log(restElements);
// };
// tail(myArray);
//____________________________________________________________________________________________________________


// EJ. 4 swapFirstToLast
// Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array
// donde el primer elemento ha sido colocado en la última posición.

// const myArray = ["a", "b", "c", "d", "e", "f", "g"];

// const swapFirstToLast = ([first, ...restElements]) => [restElements, first];
// console.log(swapFirstToLast(myArray));

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//____________________________________________________________________________________________________________


// EJ. 5 excludeId
// Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado
// excepto la propiedad id si la hubiera.

// const user = {
//     id: 4451234,
//     name: "Ernesto",
//     surname: "Elfresco",
//     age: 36,
// };

// const excludeId = ({id, ...rest}) => rest;
// console.log(excludeId(user));
//____________________________________________________________________________________________________________


// EJ. 6 wordsStartingWithA
// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro
// array filtrado con aquellas palabras que empiecen por a.

// const myArray= ["pintura", "cemento", "enchufe", "armario", "bombilla", "desagüe", "antena"];

// const wordsStartingWithA = arr => arr.filter(elements => elements[0] === "a");
// console.log(wordsStartingWithA(myArray));
//____________________________________________________________________________________________________________


// EJ. 7 concat
// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string
// con la concatenación de todos, separados por | .

// const myStrings = ["yeye", "yoyo", "yaya", "yiyi", "yuju"];

// const concat = str => {
//     console.log(str.join(" | "));
// };
// concat(myStrings);
//____________________________________________________________________________________________________________


// EJ. 8 multArray
// Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un
// número ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

// const myNumbers = [45, 8, 102, 458700, -1];

// const multArray = (arr, x) => arr.map(element => element * x);
// console.log(multArray(myNumbers, 2));
//____________________________________________________________________________________________________________


// EJ. 9 calcMult
// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como
// resultado el producto de todos ellos.

// const myNumbers = [45, 8, 102, 458700, -1];

// const calcMult = nums => nums.reduce((acc, element) => acc * element, 1);
// console.log(calcMult(myNumbers));
//____________________________________________________________________________________________________________


// Ejercicios Extra

//____________________________________________________________________________________________________________


// EJ. 10 swapFirstSecond
// Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.

// const myNumbers = [45, 8, 102, 458700, -1];

// const swapFirstSecond = ([first, second, ...rest]) => [second + "," + first + "," + rest];
// console.log(swapFirstSecond(myNumbers));

// XXXXXXXXXXXXXXXXXXXXXX EL ARRAY SOLO TIENE UN OBJETO CON TODOS LOS NÚMEROS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//____________________________________________________________________________________________________________


// EJ. 11 firstEqual
// Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter
// cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.

// const myStrings = ["audi", "bmw", "volvo", "seat", "kia", "peugeot", "dacia"];

// const firstEqual = (arr, char) => arr
//     .map(car => ({...car}))
//     .every(car => car[0] === char);
// console.log(firstEqual(myStrings, "a"));

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX NO PUEDO HACERLO SIN [0] XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//____________________________________________________________________________________________________________


// EJ. 12 longest
// Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.

// const arrOfArrs = [
//     ["a", "b", "c", "d"],
//     [1, 8, 6, 78, 20, 3, 3, 65],
//     ["mandarina", "manzana", "melocotón", "melón", "mora", "maracuyá"],
//     [5, 2]
// ];

// const longest = arr => arr
//     .sort((a, b) => b.length - a.length)
//     .find((first,) => first);
// console.log(longest(arrOfArrs));
//____________________________________________________________________________________________________________


// EJ. 13 searchInStringV1
// Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece
// dicho carácter en el string.

// const str = "verde que te quiero verde";

// const searchInStringV1 = (str, char) => Array.from(str)
//     .reduce((acc, letters) => {
//         if(letters === char) acc++;
//         return acc;
//     }, 0);

// console.log(searchInStringV1(str, "i"));
//____________________________________________________________________________________________________________


// EJ. 14 searchInStringV2
// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce.

// const str = "verde que te quiero verde";

// const searchInStringV2 = (str, char) => Array.from(str)
//     .filter(letter => letter === char);

// console.log(searchInStringV2(str, "u"));
//____________________________________________________________________________________________________________


// EJ. 15 sortCharacters
// Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.

// const str = "verde que te quiero verde";

// const sortCharacters = str => Array.from(str)
//     .sort();

// console.log(sortCharacters(str));
//____________________________________________________________________________________________________________


// EJ. 16 shout
// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde
// aparezcan en mayúsculas y con exclamaciones.

// const quietArray = ["wow,", "hace", "mucho", "calor"];

// const shout = arr => arr
//     .map(wrd => wrd.toUpperCase())
//     .join("!")

// console.log(shout(quietArray));
//____________________________________________________________________________________________________________


// EJ. 17 Lista de la compra
// Dada la siguiente lista de la compra:

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

// const addVAT = (prop, arr) => arr.map(product => ({...product, VAT: product.price * 0.21}));

// console.log(addVAT("VAT", shoppingCart));


// B. Ordena la lista de más a menos unidades.

// const sortList = arr => arr.sort((a, b) => (a.units > b.units ? -1 : 1));

// console.log(sortList(shoppingCart));


// C. Obtén el subtotal gastado en droguería.

// const getDrugSubTotal = arr => arr
//     .filter(prod => prod.category === "Droguería")
//     .reduce((acc, prod) => acc += prod.price, 0);

// console.log(getDrugSubTotal(shoppingCart));


// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

// const extractList = arr => arr
//     .sort((a, b) => a.category > b.category ? 1 : -1) 
//     .map(prod => ({ producto : prod.product, precio : prod.price*1.21 + "€"}))

// console.log(extractList(shoppingCart));

//XXXXXXXXXXXXXXXXXXXXXXX NO HE PODIDO CONVERTIR LA CATEGORÍA "producto" Y "precio" EN "Producto" Y "Precio Total"XXXXXXXXXXXXXXXXXXXXXXXXXX