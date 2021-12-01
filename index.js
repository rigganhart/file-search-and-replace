const path = require('path')
const fs = require('fs')

const matcher = (searchParam, inputString, replaceString) => {
  const escapedValues = searchParam.replace(/[\.\^\$\*\+\-\?\(\)\[\]\{\}\|\—\/]/g, '\\$&')
  console.log('escapedValues:: ', escapedValues)
  const regex = new RegExp(escapedValues, 'g')
  const matchedArr = inputString.match(regex)
  if(matchedArr) {
    return {
      replaced_count: matchedArr.length,
      matched_count: matchedArr.length,
      replaced_string: inputString.replace(regex, replaceString)
    } ;
  }
  return {
    replaced_count: 0,
    matched_count: 0,
    replaced_string: inputString
  }
}

const run = () => {
  const {FILE_PATH = './test_file.txt', SEARCH_PARAM = 'I', REPLACE_PARAM= 'we'} = process.env;
  if(!FILE_PATH.match(/^.*\.txt$/)) {
    throw new Error('Must be .txt file extension')
  }
  const fullFilePath = path.resolve(__dirname, FILE_PATH)
  const inputString = fs.readFileSync(fullFilePath, {encoding:'utf8'})
  const output_data = matcher(SEARCH_PARAM, inputString, REPLACE_PARAM);
  fs.writeFileSync(fullFilePath,output_data.replaced_string, {encoding: 'utf8'})
  console.log('output_data:: ', {file_overwrite: fullFilePath, ...output_data})
}

run();