'use strict'

function Player(name,marker) {
    this.name = name
    this.marker = marker
    this.SayName = function(){
        console.log(name);
    }
    
}
const player1 = new Player('steve','X')
const player2 =new Player('Mark', 'O')
