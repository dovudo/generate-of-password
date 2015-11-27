var way;
way = prompt('Way to file', 'D://file.txt');


var fso, f1;
fso = new ActiveXObject("Scripting.FileSystemObject");
f1 = fso.CreateTextFile("testfile.txt", true);