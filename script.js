function numericals(s){
    let result = '';
    let obj= {};
    for(let i = 0; i < s.length; i++){
    let count = s[i];
    if(!obj[count]) {
    obj[count] = 1
    } else {
        obj[count] += 1  
    }
      result += obj[count]
  }
  return result
  }