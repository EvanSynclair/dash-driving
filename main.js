var gameCanvas = document.getElementById('game-canvas'),
    context = gameCanvas.getContext('2d'),
    player = new Image(),
    bg = new Image(),
    goal = new Image(),
    width = 600,
    height = 400,
    playerX = 120,
    playerY = 320,
    step = 10,
    arrows = ['ArrowUp', 'ArrowDown','ArrowLeft','ArrowRight'],
    enemies = []

// Set the source of the images, relative to this file
bg.src = 'bg.png'
player.src = 'car.png'
goal.src = 'goal.png'

// Add event listener, this will run 'moveCharacter' when a button is pressed
document.addEventListener('keypress',moveCharacter)

update(0)

function update (timeStamp) {
  // Clear the canvas
  context.clearRect(0, 0, width, height)
  // Request the next animation frame, to continue game running
  window.requestAnimationFrame(update)

  // Add the background image
  context.drawImage(bg, 0, 0)

  // Add our player
  context.drawImage(player, playerX, playerY)

  // Add our goal
  context.drawImage(goal, 350, 10)
}

function moveCharacter (event) {
  var key = event.key
  if(arrows.includes(key)) {
    // If the arrow keys are pressed we want to stop the page from scrolling
    event.preventDefault()
  }

  // We could print the location of our player to the console using this line
  //console.log('x: ' + playerX + ':' + ' y: ' + playerY)
  switch (key) {
    case 'ArrowUp':
      if(playerY < 10)
        break
      playerY = playerY - step
      break
    case 'ArrowDown':
      if(playerY > 360)
        break
      playerY = playerY + step
      break
    case 'ArrowLeft':
      if(playerX < 110)
        break
      playerX = playerX - step
      break
    case 'ArrowRight':
      if(playerX > 450)
        break
      playerX = playerX + step
      break
  }
}
/*
  Canvas is an immediate drawing surface, this means it draws the image and
  forgets about it.
 */
