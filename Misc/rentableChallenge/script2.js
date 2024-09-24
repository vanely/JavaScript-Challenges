function parseXMLToJSON(xmlString) {
  const lines = xmlString.trim().split('\n');
  const result = {};
  let currentElement = result;
  const stack = [];

  lines.forEach(line => {
    line = line.trim();
    if (line.startsWith('<') && !line.startsWith('</')) {
      // Opening tag
      const tagName = line.slice(1, -1).split(' ')[0];
      const newElement = {};
      if (Array.isArray(currentElement)) {
        currentElement.push(newElement);
      } else {
        currentElement[tagName] = newElement;
      }
      stack.push(currentElement);
      currentElement = newElement;
    } else if (line.startsWith('</')) {
      // Closing tag
      currentElement = stack.pop();
    } else {
      // Content
      const key = Object.keys(currentElement)[0];
      if (key) {
        if (typeof currentElement[key] === 'object') {
          currentElement[key] = line;
        } else {
          currentElement[key] += ' ' + line;
        }
      } else {
        const parentKey = Object.keys(stack[stack.length - 1])[0];
        if (!Array.isArray(stack[stack.length - 1][parentKey])) {
          stack[stack.length - 1][parentKey] = [];
        }
        stack[stack.length - 1][parentKey].push(line);
      }
    }
  });

  return result;
}

function fetchAndParseXML() {
  return fetch('http://integration.tryrentable.com/')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(xmlData => {
      const jsonResult = parseXMLToJSON(xmlData);
      console.log('Parsed JSON:', JSON.stringify(jsonResult, null, 2));
      return jsonResult;
    })
    .catch(error => {
      console.error('There was a problem with the fetch or parsing operation:', error);
    });
}

// Call the function
fetchAndParseXML();