let myVariable = "value";
console.log(myVariable);
myVariable = "new value";
console.log(myVariable);

/* "let" létrehoz egy változót, "value" értéket rendel hozzá, majd a meglévő változó értékét megváltoztatjuk 
még egyszer let-tel ugyanezt a változót nem lehet létrehozni*/

/* const myVariable = "value";
console.log(myVariable);
myVariable = "new value";
console.log(myVariable); 

mivel a létrehozott változó konstans, ezért nem lehet megváltoztatni, és így nem fog lefutni */

myVariable = "2";
console.log(myVariable);

myVariable = "true";
console.log(myVariable);

/* var myVariable : ezt a var-t sose használd!!!! */

let myVariable2 = "szöveg";
console.log(myVariable2);

myVariable = myVariable2;
console.log(myVariable);

/* egyik váltpzót a másikkal egyenlővé tudjuk tenni */

let myVariable3 = myVariable+ myVariable2;
console.log(myVariable3);

/* változókat össze is tudunk adni, akár szövegeket is */

function sumVariables() {
    console.log(myVariable+myVariable2)
};

/* function: függvény: ami a {}-ben van, az fog lefutni */

sumVariables();
/* utána a meghatározott függvényt többször is le lehet hívni */

function sumVariables(variable1,variable2) {
    console.log(variable1 + variable2)
};

/* ami a ()-ben van, azok az argumentek */
/* ennek az eredménye NaN (not a number) lesz, mivel a variable1-2-t nem határoztuk meg */

sumVariables();
/* ez is NaN; az argumentek nincsenek meghatározva */

sumVariables("word1","word2");
sumVariables(8,"nyolc");
sumVariables(myVariable,myVariable3);

/* -hmtl-be belinkelés:  <script src="script.js"></script>
-a böngészőben a console-ban jelenik meg
-ez a script az oldal előtt fut le 
- ha azt akarjuk, hogy utána fusson, akkor oda kell írni, hogy defer: <script src="script.js" defer></script>
 */

function loadEvent(){
console.log("loaded");
let rootElement = document.getElementById("root");
/* megragad egy ilyen id-jú elemet */
rootElement.insertAdjacentHTML("beforeend", "hello World");
};

window.addEventListener("load",loadEvent);
/* figyel egy eseményt: amint betölt az oldal, lefuttatja a loadEvent függvényt

a "load" esemény hatására a loadEvent függvény lefut*/



/* JS tipp: const-ot érdemes használni, aztán ha mégis módosulna, akkor let-tel */