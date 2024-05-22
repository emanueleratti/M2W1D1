// 1. Che cos'è un algoritmo?
// Un ALGORITMO una funzione, una ricetta, un codice che esegue un COMANDO, ossia che dice alla nostra applicazione cosa fare. Gli INPUT sono dei valori di questa operazione, mentro l'output è il risultato. 
// Algoritmo > Input > Output


// 2. Che cos'è una variabile?
// Una VARIABILE è un "contenitore", una sorta di DIV per l'HTML. E' un elemento che contiene delle informazioni che può essere riutilizzato e richiamato all'interno del nostro codice. DICHIARANDO una variabile, operazione che permette di assegnare un nome a questo contenitore, assegno un valore a questo elemento, che a seconda della tipologia potra essere utilizzato, richiamato e in certi casi anche riassegnato all'interno del nostro codice.
// Esistono 3 tipologia di KEYWORD per dichiarare una variabile che si differenziano per gli scopi di utilizzo: 
// - VAR: è stata la prima keyword utilizzata per dichiarare variabili in JavaScript, ma ad oggi non è più tanto utilizzata salvo in applicazioni contenente codice un po più datato. Può essere ridichiarata ed ha uno scope di tipo global ossia può essere letta all'interno di tutto il documento. 
var x = 5;

// - LET: è stata introdotta successivamente e come per var, può essere ridichiarata più volte nel nostro codice. A differenza della precedente però ha uno scope di tipo block o function, ovvero è leggibile solo all'interno del blocco di codice dove è stata dichiarata. 
let y = 10; // ho assegnato valore 10 alla variabile y
y = 20; // ho riassegnato e un altro valore alla variabile y

// - CONST: come per la precedente ha uno suo scope di tipo block, ovvero vive e muore all'interno del blocco di codice in cui è dichiarata, ma si differenzia da LET per il fatto che NON PUO' essere ridichiarata da quel momento in poi nel codice, quindi il suo valore rimarrà sempre quello originale.


// 3. Undefined e null sono la stessa cosa?
// No, non sono la stessa cosa; sono entrambi DATA TYPE, ossia valori assegnabili ad una variabile ma si differenziano tra loro per cosa rappresentato. UNDEFINED identifica una variabile dichiarata ma che allo stato attuale non presenta alcun valore assegnato. NULL invece identifia una variabile a cui volutamente è stato assegnato un valore nullo.
let varNull = null;
let varUndefined1 = undefined;
let varUndefined2;