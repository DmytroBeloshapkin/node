const fs = require('node:fs')

// fs.readFile('./text.txt', (err, data)=>{
//     console.log(err, 'error');
//     console.log(data.toString());
// }) // показує файл
//
// fs.appendFile('./text.txt','hello \n',(err)=>{
//     console.log(err);
// }) // додаэ до файлу
//
// fs.writeFile('./text.txt','write file', (err)=>{
//     console.log(err);
// }) // перезаписує інфу у файлі
//
// fs.readFile('./text.txt',(err, data)=>{
//     fs.appendFile('./copy.txt', data, (err)=>{
//         console.log(err);
//     })
// }) // считали дані з одного файлу і дату передали в інший
//
// fs.mkdir('./users', (err)=>{
//     console.log(err);
// })
//
// fs.appendFile('./users/data.json', JSON.stringify({gender: 'female'}),(err)=>{
//     console.log(err);
// }) // додали файл із інфою
//
// fs.truncate('./copy.txt', (err )=>{
//     console.log(err);
// })// видаляє інфу з файлу
//
// fs.unlink('./copy.txt', (err )=>{
//     console.log(err);
// })// видаляє файл
//
// fs.rmdir('./users', {recursive: true},()=>{
//     console.log(err);
// }) // видаляє директорію
//
// fs.rename('./users/data.txt', './users/data.json', (err)=>{
//     console.log(err);
// }) // переіменування файлу або переміщення
//
// fs.copyFile('./users/data.json', './data.json', (err)=>{
//         console.log(err)
// })// копіюємо файл

