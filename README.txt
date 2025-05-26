Avviare l'applicazione attraverso il comando npm run start:server

Scrivere un'applicazione per la gestione di un magazzino.

L'applicazione sarà costituita da 5 pagine/rotte:
1) Dashboard di atterraggio, visualizzare all'interno di essa una navbar realizzata con bootstrap
   che permetta di navigare alle seguenti pagine:
   - visualizzazione dei prodotti
   - creazione di un prodotto
   - visualizzazione degli ordini
   - creazione di un ordine

2) Pagina di visualizzazione dei prodotti, costituita da un pulsante che permetta all'utente di
   navigare verso la dashboard e da una tabella costituita dalle seguenti colonne:
   - nome
   - descrizione
   - quantità
   - prezzo (visualizzare il valore espresso in €)

   La tabella dovrà essere popolata chiamando opportunamente l'api GET http://localhost:3000/products

   All'interno della tabella dovranno essere visualizzate 2 azioni che possano permettere di effettuare le seguenti operazioni:
   - cancellazione del prodotto, alla pressione dell'azione chiamare l'api DELETE http://localhost:3000/products/${id} passando l'id del prodotto
   - modifica del prodotto, alla pressione dell'azione navigare alla pagina di modifica del prodotto

3) Pagina di creazione/modifica di un prodotto, costituita da un pulsante che permetta all'utente di
   navigare verso la dashboard e da un form che permetta di creare o modificare un prodotto.

   Dovrà essere possibile atterrare su questa pagina passando eventualmente all'interno del pathParam l'id del prodotto.

   Il form sarà costituito dai seguenti campi:
   - nome del prodotto, che dovrà essere di tipo testo. Andranno previsti validatori per l'obbligatorietà e per la lunghezza massima di 20 caratteri;
   - descrizione del prodotto, che dovrà essere di tipo testo. Andranno previsti validatori per l'obbligatorietà e per la lunghezza massima di 100 caratteri;
   - quantità del prodotto, che dovrà essere di tipo numerico. Andrà previsto un validatore per il valore minimo pari a 0;
   - prezzo del prodotto, che dovrà essere di tipo numerico. Andranno previsto validatori per l'obbligatorietà e per il valore minimo pari a 0;

   ATTENZIONE!
   Nel caso in cui si atterrasse alla pagina in fase di "modifica" del prodotto, i campi relativi al nome e alla descrizione
   non saranno modificabili (quindi disabilitati).
   Per recuperare i dati del singolo prodotto andrà chiamata l'api GET http://localhost:3000/products/${id}

   Alla sottomissione del form dovranno essere opportunamente visualizzati messaggi di errore sfruttando le classi messe a disposizione da bootstrap.

   Nel caso in cui vogliate CREARE il prodotto andrà chiamata opportunamente l'api POST http://localhost:3000/products
   passando come body un oggetto che abbia al suo interno le seguenti proprietà { "name": string, "description": string, "price": number, "quantity": number }

   Nel caso in cui vogliate MODIFICARE il prodotto andrà chiamata opportunamente l'api PATCH http://localhost:3000/products/${id}
   passando come body un oggetto che abbia al suo interno le seguenti proprietà { "price": number, "quantity": number }

   Una volta modificato/salvato il prodotto dovrà essere prevista automaticamente la navigazione verso la pagina di visualizzazione dei prodotti.

4) Pagina di visualizzazione degli ordini, costituita da un pulsante che permetta all'utente di
   navigare verso la dashboard e da una tabella costituita dalle seguenti colonne:
   - descrizione
   - totale (visualizzare il valore espresso in €)

   La tabella dovrà essere popolata chiamando opportunamente l'api GET http://localhost:3000/orders

5) Pagina di creazione di un ordine, costituita da un pulsante che permetta all'utente di
   navigare verso la dashboard e da un form che permetta di creare un ordine.

   Il form sarà costituito dai seguenti campi:
   - descrizione dell'ordine, che dovrà essere di tipo textarea. Andranno previsti validatori per l'obbligatorietà e per la lunghezza massima di 50 caratteri;
   - cliente, che dovrà essere scelto da un menù a tendina. Andrà previsto il validatore per l'obbligatorietà;
   - prodotto, che dovrà essere scelto da un menù a tendina. Andrà previsto il validatore per l'obbligatorietà;
   - prezzo unitario del prodotto, campo di tipo numerico "readonly". Andrà valorizzato una volta selezionato il prodotto;
   - quantità, campo di tipo numerico. Andranno previsti validatori per l'obbligatorietà e per il valore massimo pari alla quantità presente in giacenza per il prodotto;
   - totale, che dovrà essere valorizzato automaticamente come risultato del prodotto fra il prezzo unitario del prodotto e la quantità indicata. Dovrà essere "readonly";

   ATTENZIONE!
   La lista di clienti potrà essere recuperata chiamando opportunamente l'api GET http://localhost:3000/customers
   La lista di prodotti potrà essere recuperata chiamando opportunamente l'api GET http://localhost:3000/products
   Visualizzare nel menù a tendina della selezione dei cliente la proprietà "name" presente all'interno del singolo oggetto.
   Visualizzare nel menù a tendina della selezione dei prodotto la proprietà "name" presente all'interno del singolo oggetto.

   Alla sottomissione del form dovranno essere opportunamente visualizzati messaggi di errore sfruttando le classi messe a disposizione da bootstrap.
   Per poter CREARE l'ordine andrà chiamata opportunamente l'api POST http://localhost:3000/orders
   passando come body un oggetto che abbia al suo interno le seguenti proprietà { "description": string, "productId": number, "customerId": number, "total": number }

   Una volta salvato l'ordine dovrà essere prevista automaticamente la navigazione verso la pagina di visualizzazione degli ordini.

