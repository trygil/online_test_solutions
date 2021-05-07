function solution(N, users) {
  var answer = [];

  let stages = {};

  for (let i = 1; i <= N; i++) stages[i] = { onGoingUser: 0, failRate: 0 };

  let userAmount = users.length;
  users.sort((a, b) => a - b);
  users.push(N + 1);

  let prevStage = 1;
  for (let currentStage of users) {
    if (currentStage !== prevStage) {
      stages[prevStage].failRate = stages[prevStage].onGoingUser / userAmount;
      userAmount -= stages[prevStage].onGoingUser;
      prevStage++;
    }

    if (currentStage > N) break;

    stages[currentStage].onGoingUser++;
  }

  answer = Object.entries(stages)
    .sort(([ka, a], [kb, b]) => b.failRate - a.failRate)
    .map(([k, val]) => k);

  return answer;
}