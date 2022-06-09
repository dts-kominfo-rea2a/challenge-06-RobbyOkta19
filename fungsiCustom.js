// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const result = [];
  fs.readFile(file1, "utf8", (err, dataFile1) => {
    if (err) {
      fnCallback(err, null);
      return;
    } else {
      const objString = JSON.parse(dataFile1);
      result.push(getWord(objString.message));

      fs.readFile(file2, "utf-8", (err, dataFile2)=>{
        if (err) {
          fnCallback(err, null);
          return;
        } else {
          const arrObjString = JSON.parse(dataFile2);
         
          result.push(getWord(arrObjString[0].message));
        }

        fs.readFile(file3, "utf-8", (err, dataFile3)=>{
          if (err) {
            fnCallback(err, null);
            return;
          } else {
            const arrObj = JSON.parse(dataFile3);
          //  console.log(arrObj);
            result.push(getWord(arrObj[0].data.message));
          }

          fnCallback(null, result);
           
        });
      });
    }
  });

};


const getWord = (sentence)=>{
  const arrSentence = sentence.split(" ")
  return arrSentence[1];
}
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
