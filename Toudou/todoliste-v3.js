let todoListe = {
    todos : [],
    nombreItems : 0,
    displayTodos: function(){
        console.log('Ma todos: ', this.todos);
        console.log('Nombre items: ', this.nombreItems);
    },
    addTodo: function(nouvelleTodo) {
        if(nouvelleTodo != null && nouvelleTodo != ""){
            this.todos.push(nouvelleTodo);
            this.nombreItems++;
        } else {
            console.log("Todo vide !")
        }
        this.displayTodos();
    },
    changeTodo: function(position, nouvelleValeur) {
        if(position < this.todos.length){
            this.todos[position] = nouvelleValeur;
        } else {
            console.log("La todo à modifier n'existe pas!")
        }
        this.displayTodos();
    },
    deleteTodo: function(position){
        if(position < this.todos.length){
            this.todos.splice(position, 1);
            this.nombreItems--;
        }else {
            console.log("La todo à supprimer n'existe pas!")
        }
        this.displayTodos();
    }
}