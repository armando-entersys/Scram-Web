#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Leer versión actual
const versionPath = path.join(__dirname, 'public', 'version.json');
let versionData = { version: '1.0.0', timestamp: Date.now() };

if (fs.existsSync(versionPath)) {
  try {
    versionData = JSON.parse(fs.readFileSync(versionPath, 'utf8'));
  } catch (e) {
    console.log('No se pudo leer version.json, creando nuevo...');
  }
}

// Incrementar versión
const versionParts = versionData.version.split('.').map(Number);
versionParts[2]++; // Incrementar patch version

if (versionParts[2] >= 100) {
  versionParts[2] = 0;
  versionParts[1]++; // Incrementar minor version
}

if (versionParts[1] >= 100) {
  versionParts[1] = 0;
  versionParts[0]++; // Incrementar major version
}

const newVersion = versionParts.join('.');

// Actualizar timestamp
const newVersionData = {
  version: newVersion,
  timestamp: Date.now(),
};

// Guardar nueva versión
fs.writeFileSync(versionPath, JSON.stringify(newVersionData, null, 2));

console.log(`✅ Versión actualizada: ${versionData.version} -> ${newVersion}`);
console.log(`📅 Timestamp: ${new Date(newVersionData.timestamp).toISOString()}`);
