const fs = require('fs');

try {
  const contenidoStr = fs.readFileSync('package.json', 'utf-8');
  const contenidoObj = JSON.parse(contenidoStr);
  const size = Buffer.from(contenidoStr).length;

  const info = {
      contenidoStr,
      contenidoObj,
      size,
    }
    
  const bonito = JSON.stringify(info, null, '\t')
  const feo = JSON.stringify(info)
    console.log(bonito)
    console.log("=========================")
    console.log(feo)
  fs.writeFileSync('textis/ms.txt',bonito, 'utf-8')

} catch (error) {
  console.error('Error al leer el archivo:', error);
}

