function playGame(){
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId){
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


  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

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

  function displayResult (argComputerMove, argPlayerMove) {
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
