
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var tmpArr = new Array();
    if (matrix !== undefined)
      if (matrix.length !== 0){
        for (var i = 0; i < matrix.length; i++){
          for(var j = 0; j < matrix[i].length; j++){
            if ( (i % 2) !== 0)
            tmpArr.push(matrix[i][matrix[i].length -1 -j]);
          else
            tmpArr.push(matrix[i][j]);
          }
        }
      }
    return tmpArr;
  }
