const fs = require('fs').promises;

async function leerPackageJSON() {
  try {
    const contenidoStr = await fs.readFile('package.json', 'utf-8');
    const contenidoObj = JSON.parse(contenidoStr);

    const size = Buffer.from(contenidoStr).length;

    const info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    const infoStr = JSON.stringify(info, null, '\t');
    await fs.writeFile('mapaa.txt', infoStr, 'utf-8');

    console.log('info.txt se ha creado exitosamente.');

  } catch (error) {
    console.error('Error:', error);
  }
}

leerPackageJSON();

console.log("aguante peron")