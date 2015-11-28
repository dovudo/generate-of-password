var i, dir;
var u = "533";
for(var i = 11111; i < 33333; i++) { //генерируем чилса
	dir = u + i;
	console.log(dir);
	}


function cread_file(){ //создание файла в который будет записываться генерация
	var fso, f1;
	fso = new ActiveXObject("Scripting.FileSystemObject");
	f1 = fso.CreateTextFile("D:\\533.txt", true); //создание и название имени файла
	f1.WriteLine(dir);	// запись в файл
	alert("Идет генерация можете следить за ней в colsole");
	}