export const countOccurance = (arr, limit) => {
  const occurance = arr.reduce((sum, id) => 
    ({
      ...sum,
      [id]: sum[id] ? sum[id] + 1 : 1
    }), {})

  return Object.keys(occurance).filter(x => occurance[x] >= limit);
}

/*** stole this online BEGIN*/
RegExp.prototype.execAllGen = function*(input) {
  for (let match; (match = this.exec(input)) !== null;)
    yield match;
}; 

RegExp.prototype.execAll = function(input) {
  return [...this.execAllGen(input)]}
/*** stole this online END*/

export const getAdditionalEmailsFromMessage = (message) => {
  const myRe = /([@a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
  const arr = myRe.execAll(message).map(x => x[0].substring(1))
  return arr
}

export const turnIntoArray = (toBeArrafied) => 
  typeof toBeArrafied === Array ? toBeArrafied : [toBeArrafied]
