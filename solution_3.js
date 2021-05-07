function solution(relation) {
  var answer = 0;

  let fTupple = relation[0];
  let colAmount = fTupple.length;
  let ignoreCols = [];

  for (let j = 1; j <= colAmount; j++) {
    let index = 0;
    let m = {};
    for (let tupple of relation) {
      for (let i = 0; i < colAmount; i++) {
        if (ignoreCols.indexOf(i) > -1) continue;

        if (m[i] === undefined) m[i] = new Set();

        let str = tupple[i];
        for (let k = 1; k < j; k++) {
          str += tupple[i + k];
        }

        m[i].add(str);

        if (index === relation.length - 1 && m[i].size === relation.length) {
          answer++;
          ignoreCols.push(i);
        }
      }

      index++;
    }
  }

  return answer;
}