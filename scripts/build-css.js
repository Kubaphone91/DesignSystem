#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../src/styles/tokens.css');
const dest = path.resolve(__dirname, '../dist/styles.css');

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);

console.log('  dist/styles.css');
