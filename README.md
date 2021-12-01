# file-search-and-replace
A super simple find and replace all occurrences of a search param in a provided .txt file

Accepts the Parameters: `FILE_PATH`,`SEARCH_PARAM`, `REPLACE_PARAM` (has default values for each param)

**CAUTION:** This program overwirtes the text file provided

run with node from the command line:
```
$ FILE_PATH="../path/to/my/file" SEARCH_PARAM="$" REPLACE_PARAM="MORE $" node index.js
```


Outputs info to command line:
```
output_data: {
  file_overwrite: string,
  replaced_count: number,
  matched_count: number,
  replaced_string: string
}
```

