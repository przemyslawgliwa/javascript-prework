{
  const playGame = function(playerInput){


  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);

  const getMoveName = function(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }

    if(argMoveId == 2){
      return 'papier';
    }

    if(argMoveId == 3){
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
  computerMove ='papier'
}

if (randomNumber == 3){
  computerMove = 'nożyce'
}
*/
  printMessage('ruch komputera to: ' + argComputerMove);


  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  const argPlayerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
  playerMove = 'papier';
}

if(playerInput == '3'){
  playerMove = 'nożyce';
}
*/
  printMessage('Twój ruch to: ' + argPlayerMove);

  const displayResult = function(argComputerMove, argPlayerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      return 'Ty wygrywasz!';
    }
    if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      return 'Ty przegrywasz!';
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      return 'Ty przegrywasz!';
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      return 'Ty wygrywasz!';
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      return 'Ty przegrywasz!';
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      return 'Ty wygrywasz!';
    }
    if (argComputerMove == argPlayerMove){
      return 'remis';
    }
    if (argPlayerMove == 'nieznany ruch'){
      return 'błędny ruch';
    }
  }
  printMessage('wynik: ' + displayResult(argComputerMove, argPlayerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);});
}
