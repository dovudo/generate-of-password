var u, dir, way, beginNumber, endNumber;
alert('Работает только в IE т.к в других браузерах нет поддержки изменений файла');
u = prompt('Ведите некасаемое число (по типу 533...)','533');
beginNumber = prompt('Введите с какого числа начать генерацию (не считая Н.Ч)');
endNumber = prompt('Ведите на каком числе закончить (не считая Н.Ч)');
way = prompt('Путь к файлу', 'D://file.txt');


//создание файла в который будет записываться генерация
var fso, f1;
	fso = new ActiveXObject("Scripting.FileSystemObject");
	f1 = fso.CreateTextFile(way, true); //создание и название имени файла
	

for(var i = beginNumber; i < endNumber; i++) { //генерируем чилса
	dir = u + i;
	console.log(dir);
	f1.WriteLine(dir);
	}



	
	
	

