#!/usr/bin/env node
import Table from 'cli-table'
import chalk from 'chalk'
console.log(chalk.white.bgBlue.bold("hello word"));
var table = new Table();
 
table.push(
    { 'name': 'Some value' }
  , { 'Age': 'Another value' },
  { 'Age': 'Another value' },
  { 'Age': 'Another value' }
  
);
 
console.log(table.toString());