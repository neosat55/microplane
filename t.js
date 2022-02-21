const currDir = process.env.MICROPLANE_REPO;
const fs = require('fs');
const path = require('path');
const filePath = (file) => path.join(__dirname, 'mp', currDir, 'plan', 'planned', file);
const pkg = process.env.PKG;
const ver = process.env.VER;

fs.readFile(filePath('package.json'), (err, data) => {
  if (err) {
    throw new Error(err)
  }

  const json = JSON.parse(data.toString('utf-8'));


  json.devDependencies[pkg] = ver;

  fs.writeFile(filePath('package.json'), JSON.stringify(json, null, 2), { encoding: 'utf-8' }, (err) => {
    if (err) {
      throw new Error(err);
    }
  })
});

