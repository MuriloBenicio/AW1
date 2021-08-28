function loop(robot) {
  let robo = robot.info().x
  let landmarks = [360, 500, 560, 760]

  robot.action = { type: 'move', amount: 40 }
  if (
    (landmarks[0] < robo && robo < landmarks[1]) ||
    (landmarks[2] < robo && robo < landmarks[3])
  ) {
    robot.action = { type: 'jump', amount: 10 }
  }
}
