const fs = require('fs').promises;

async function readJSONFile(filePath) {
  try {
    // read the file
    const fileContent = await fs.readFile(filePath, 'utf8');

    // parse JSON
    const jsonObject = JSON.parse(fileContent);

    return jsonObject;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`File not found: ${filePath}\n${error}`);
    } else if (error instanceof SyntaxError) {
      console.error(`Invalid JSON in file: ${filePath}\n${error}`);
    } else {
      console.error(`An error occurred while reading the file: ${error.message}`);
    }
    throw error;
  }
}

function flattenJSON(obj) {
  function processElement(element) {
    if (typeof element !== 'object' || element === null) {
      return element;
    }

    if (Array.isArray(element)) {
      return element.map(processElement);
    }

    if (element.type === 'element') {
      const result = {};
      if (element.elements) {
        if (element.elements.length === 1 && element.elements[0].type === 'text') {
          return element.elements[0].text;
        } else {
          element.elements.forEach(child => {
            if (child.name) {
              result[child.name] = processElement(child);
            } else if (child.type === 'element') {
              Object.assign(result, processElement(child));
            }
          });
        }
      }
      return Object.keys(result).length ? result : null;
    }

    const result = {};
    for (const key in element) {
      result[key] = processElement(element[key]);
    }
    return result;
  }

  return processElement(obj);
}

//-------------------------------------------------

function flattenJSON2(obj) {
  function processElement(element, nameCounters = {}) {
    if (typeof element !== 'object' || element === null) {
      return element;
    }

    if (Array.isArray(element)) {
      return element.map(el => processElement(el, nameCounters));
    }

    if (element.type === 'element') {
      const result = {};
      if (element.elements) {
        if (element.elements.length === 1 && element.elements[0].type === 'text') {
          return element.elements[0].text;
        } else {
          element.elements.forEach(child => {
            if (child.name) {
              let key = child.name;
              if (key in nameCounters) {
                nameCounters[key]++;
                key = `${key}${nameCounters[key]}`;
              } else {
                nameCounters[key] = 0;
              }
              result[key] = processElement(child, { ...nameCounters });
            } else if (child.type === 'element') {
              Object.assign(result, processElement(child, nameCounters));
            }
          });
        }
      }
      return Object.keys(result).length ? result : null;
    }

    const result = {};
    for (const key in element) {
      result[key] = processElement(element[key], nameCounters);
    }
    return result;
  }

  return processElement(obj);
}
//--------------------------------------------------------


function flattenJSON3(obj) {
  function processElement(element, nameCounters = {}) {
    if (typeof element !== 'object' || element === null) {
      return element;
    }

    if (Array.isArray(element)) {
      return element.map(el => processElement(el, { ...nameCounters }));
    }

    if (element.type === 'element') {
      const result = {};
      if (element.elements) {
        if (element.elements.length === 1 && element.elements[0].type === 'text') {
          return element.elements[0].text;
        } else {
          element.elements.forEach(child => {
            if (child.name) {
              let key = child.name;
              if (key in nameCounters) {
                nameCounters[key]++;
                key = `${key}${nameCounters[key]}`;
              } else {
                nameCounters[key] = 0;
              }
              result[key] = processElement(child, { ...nameCounters });
            } else if (child.type === 'element') {
              Object.assign(result, processElement(child, nameCounters));
            }
          });
        }
      } else if (element.attributes) {
        return element.attributes;
      }
      return Object.keys(result).length ? result : null;
    }

    const result = {};
    for (const key in element) {
      result[key] = processElement(element[key], nameCounters);
    }
    return result;
  }

  return processElement(obj);
}


//---------------------------------------------------------
// import json, and flatten json
async function main() {
  try {
    const jsonObject = await readJSONFile('tenantData.json');
    // flatten json
    const flattenedJSON = flattenJSON2(jsonObject);
    console.log(`flattened JSON:\n${JSON.stringify(flattenedJSON, null, 2)}`);
    // console.log(`imported json:\n${JSON.stringify(jsonObject, null, 2)}`);
  } catch (error) {
    console.error('Failed to read JSON file:', error);
  }
}

main()
