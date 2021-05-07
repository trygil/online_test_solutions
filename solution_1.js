function solution(record) {
  var answer = [];
  let index = {};

  for (let item of record) {
    let [cmd, uid, nickname] = item.split(" ");
    let changeName = false;
    let str = "";

    switch (cmd.toLowerCase()) {
      case "enter":
        str = `${nickname} came in.`;
        answer.push(str);

        if (index[uid] === undefined)
          index[uid] = {
            nickname: nickname,
            log: []
          };

        index[uid].log.push(answer.length - 1);

        changeName = index[uid].nickname !== nickname;

        break;
      case "leave":
        str = `${index[uid].nickname} has left.`;
        answer.push(str);

        index[uid].log.push(answer.length - 1);
        break;
      case "change":
        changeName = true;
        break;
      default:
        break;
    }

    if (changeName) {
      for (let i of index[uid].log) {
        answer[i] = answer[i].replace(index[uid].nickname, nickname);
      }

      index[uid].nickname = nickname;
    }
  }

  return answer;
}