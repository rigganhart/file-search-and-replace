const path = require('path')
const fs = require('fs')

/**
 * Requirements:
 * 1. Accept a file as Input
 * 2. accept a string as "search Paramaeter"
 * 3. Accept a string as "replace parameter"
 * 4. Count all occurances of "search Parameter"
 * 5. replace all occurances of "search parameter" with "replacement parameter"
 * 6. save the replaced file
 * 7. output the total number of occurances of search parameter and the total number of replacements
 */

const matcher = (searchParam, inputString, replaceString) => {
  const regex = new RegExp(searchParam, 'g')
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
  const fullFilePath = path.resolve(__dirname, FILE_PATH)
  const inputString = fs.readFileSync(fullFilePath, {encoding:'utf8'})
  const output_data = matcher(SEARCH_PARAM, inputString, REPLACE_PARAM);
  fs.writeFileSync(fullFilePath,output_data.replaced_string, {encoding: 'utf8'})
  console.log('output_data:: ', {file_overwrite: fullFilePath, ...output_data})
}

run();