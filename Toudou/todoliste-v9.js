//////////////////////////////////////////////////////////////////////////
// Version 9 - Sortir de la console
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
    cocherDecocherTout: function(){
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
        let position = this.todos.findIndex(item => item.texte.includes(motRecherche));
        console.log("Todo trouvé à l'indice ", position);
        return position;
    }
}

// Gestionnaires de clics
let gestionnaires = {
    afficherTodos: function(){
        todoListe.displayTodos();
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
    },
    cocherDecocherTout: function(){
        todoListe.cocherDecocherTout();
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
    },
    ajouterTodo: function(){
        let ajoutUtilisateur = document.getElementById('champAjouter');
        todoListe.addTodo(ajoutUtilisateur.value);
        ajoutUtilisateur.value = '';
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
    },
    modifierTodo: function(){
        // Récupérer les éléments HTML
        let modifierTodoPosition = document.getElementById('champModifierTodoPosition');
        let modifierTodoTexte = document.getElementById('champModifierTodoTexte');
        
        // Incrémenter la position pour correspondre à la compréhension humaine
        modifierTodoPosition.value--;
        
        // Appeler la méthode correspondante de la todoliste
        todoListe.changeTodo(modifierTodoPosition.value, modifierTodoTexte.value);
        
        //Vider les champs
        modifierTodoPosition.value = '';
        modifierTodoTexte.value = '';
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
    },
    supprimerTodo: function(){
        // Récupérer l'élément HTML
        let supprimerTodoPosition = document.getElementById('champSupprimerTodoPosition');
        
        // Incrémenter la position pour correspondre à la compréhension humaine
        supprimerTodoPosition.value--;
        
        // Appeler la méthode correspondante de la todoliste
        todoListe.deleteTodo(supprimerTodoPosition.value);
        
        //Vider les champs
        supprimerTodoPosition.value = '';
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
    },
    cocherDecocherTodo: function(){
        // Récupérer l'élément HTML
        let cocherDecocherCompletionTodoPosition = document.getElementById('champCocherDecocherCompletionTodoPosition');
        
        // Incrémenter la position pour correspondre à la compréhension humaine
        cocherDecocherCompletionTodoPosition.value--;
        
        // Appeler la méthode correspondante de la todoliste
        todoListe.toggleCompleted(cocherDecocherCompletionTodoPosition.value);
        
        //Vider les champs
        cocherDecocherCompletionTodoPosition.value = '';
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
    },  
    toutMettreAVrai: function(){
        todoListe.touMettreAVrai();
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
    },
    supprimerTachesCompletees: function(){
        todoListe.supprimerTachesCompletees();
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
    },
    validerPuisSupprimerTodo: function(){
        // Récupérer l'élément HTML
        let validerPuisSupprimerTodoPosition = document.getElementById('champValiderPuisSupprimerTodoPosition');
        
        // Incrémenter la position pour correspondre à la compréhension humaine
        validerPuisSupprimerTodoPosition.value--;
        
        // Appeler la méthode correspondante de la todoliste
        todoListe.validerPuisSupprimer(validerPuisSupprimerTodoPosition.value);
        
        //Vider les champs
        validerPuisSupprimerTodoPosition.value = '';
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
    },
    rechercherTodo: function(){
        // Récupérer l'élément HTML
        let rechercherTodo = document.getElementById('champRechercherTodo');
        
        //Vider les champs
        rechercherTodo.value = '';
        
        // Afficher la liste dans son état actuel
        vueDocumentHTML.afficherTodos();
        
        // Appeler la méthode correspondante de la todoliste
        let position = todoListe.rechercherParTexte(rechercherTodo.value);
        let resultat = document.getElementById('resultatRecherche');
        resultat.textContent = "La todo a été trouvée à la position " + position;
    }
}

// Objet Vue pour y insérer les éléments Todos
let vueDocumentHTML = {
    afficherTodos: function(){
        // Trouver la liste ol
        let listeOlTodos = document.querySelector('ol');
        
        // Vider la liste
        listeOlTodos.innerHTML = '';

        // Afficher chaque  élément de la liste de Todos
        for(let i = 0; i < todoListe.todos.length; i++){
            // Créer l'élément li
            let todoLi = document.createElement('li');
            
            // Mettre le texte et l'état de la todo dans le li
            let texteTodo = "";
            if(todoListe.todos[i].completed){
                todoLi.textContent = todoListe.todos[i].texte + ' (x)' ;
            } else {
                todoLi.textContent = todoListe.todos[i].texte + ' ( )' ;
            }
            
            // ajouter la li dans la liste OL
            listeOlTodos.appendChild(todoLi);
        }
        
        //Vider le résultat de la recherche du dernier bouton, au cas où il ne serait pas vide
        document.getElementById('resultatRecherche').textContent = "";
    }
}