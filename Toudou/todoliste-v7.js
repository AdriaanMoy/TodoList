//////////////////////////////////////////////////////////////////////////
// Version 7 - Ajout écouteurs boutons
////////////////////////////////////////////////////////////////////////////
let todoListe = {
    todos : [], //  [ {texte:"Un truc", completed: false} , {texte:"Un autre truc", completed: true} ];
    displayTodos: function(){ // execution avec listToDisplay <= myTodos
        if(this.todos.length == 0){
            console.log("Liste des Todos est vide");
        } else {
            for(let i = 0; i < this.todos.length; i++){
                if(this.todos[i].completed == false){
                    console.log("( ) ", this.todos[i].texte);
                } else {
                    console.log("(x) ", this.todos[i].texte);
                }
            }
        }
    },
    addTodo: function(item){ // item <= "test1"
        if(item != null && item != ""){
            let newItem = {
                texte:item,
                completed: false
            };
            this.todos.push(newItem);
            // Equivalent
            // this.todos.push({texte:item,completed:false});
        } else {
            console.log("Todo vide !")
        }

        this.displayTodos();
    },
    changeTodo: function(position,nouvelleValeur){ // position = 1 , nouvelleValeur = "mon test modifié"
        if(position < this.todos.length){
            this.todos[position].texte = nouvelleValeur;
        } else {
            console.log("La todo à modifier n'existe pas!")
        }
        this.displayTodos();
    },
    deleteTodo: function(position){
        if(position < this.todos.length){
            this.todos.splice(position,1);
        } else {
            console.log("La todo à supprimer n'existe pas!")
        }
        this.displayTodos();
    },
    toggleCompleted: function(position){
    //Version plus étalée
    // if (this.todos[position].completed) {
    //   this.todos[position].completed = false;
    // } else {
    //   this.todos[position].completed = true;
    // }    
        if(position < this.todos.length){
            this.todos[position].completed = !this.todos[position].completed;
        } else {
            console.log("La todo dont l'état de complétion est à modifier n'existe pas!")
        }
        this.displayTodos();
    },
    inverserTout: function(){
        for(let i = 0; i < this.todos.length; i++){
            // Version 1
            //this.todos[i].completed = !this.todos[i].completed;
            
            // Version 2
            this.toggleCompleted(i);
        }
    }, 
    touMettreAVrai: function(){
        for(let i = 0; i < this.todos.length; i++){
            if(!this.todos[i].completed){
                this.toggleCompleted(i);
            }
        }
    }, 
    supprimerTachesCompletees: function(){
        for(let i = 0; i < this.todos.length; i++){
            if(this.todos[i].completed){
                this.deleteTodo(i);
            }
        }
    },
    validerPuisSupprimer: function(position){
        this.toggleCompleted(position);
        this.deleteTodo(position);
    },
    rechercherParTexte: function(motRecherche){
        let position = this.todos.findIndex(item => item.texte === motRecherche);
        console.log("Todo trouvé à l'indice ", position);
        return position;
    }
}


let boutonAfficherListe = document.getElementById("boutonAfficherListe");
let boutonCocherDecocher = document.getElementById("boutonCocherDecocher");

boutonAfficherListe.addEventListener('click', function(){
    todoListe.displayTodos();
});

boutonCocherDecocher.addEventListener('click', function(){
    todoListe.inverserTout();
})

