const fs = require('fs');

function leerPackageJSON(callback) {
  fs.readFile('package.json', 'utf-8', (error, contenidoStr) => {
    if (error) {
      callback(error);
      return;
    }

    try {
      const contenidoObj = JSON.parse(contenidoStr);
      const size = Buffer.from(contenidoStr).length;

      const info = {
        contenidoStr,
        contenidoObj,
        size,
      };

      const infoStr = JSON.stringify(info, null, '\t');

      fs.writeFile('textis/mac.txt', infoStr, 'utf-8', (error) => {
        if (error) {
          callback(error);
          return;
        }
        callback(null, 'info.txt se ha creado exitosamente.');
      });
    } catch (parseError) {
      callback(parseError);
    }
  });
}

leerPackageJSON((error, resultado) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log(resultado);
    }
  });