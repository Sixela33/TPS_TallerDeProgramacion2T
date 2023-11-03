const fs = require('fs').promises;

fs.readFile('package.json', 'utf-8')
  .then((contenidoStr) => {

    const contenidoObj = JSON.parse(contenidoStr);
    const size = Buffer.from(contenidoStr).length;

    const info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    const infoStr = JSON.stringify(info, null, '\t');

    return fs.writeFile('textis/maptc.txt', infoStr, 'utf-8');
  })
  .then(() => {
    console.log('info.txt se ha creado exitosamente.');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

console.log("aguante peron")