const fs = require('fs');


fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка при зчитуванні JSON файлу:', err);
    return;
  }

  const jsonData = JSON.parse(data);
  const outputData = [];

 
  jsonData.forEach(item => {
    if (item.parent === 'BS3_BanksLiab') {
      const name = item.txten;
      const value = item.value;
      outputData.push(`${name}:${value}`);
    }
  });


  fs.writeFile('output.txt', outputData.join('\n'), { flag: 'w' }, err => {
    if (err) {
      console.error('Помилка при збереженні результату у файл output.txt:', err);
      return;
    }

    console.log('Дані збережено у файлі output.txt');
  });
});
