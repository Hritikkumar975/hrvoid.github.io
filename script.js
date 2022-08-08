function permission(){
    // con = confirm("you want to show your problem public")
    // if(con==true){

    // }else{
        
    // }
    var chor= document.getElementById('email');
    console.log(chor.value);
    var fs = require('fs');

    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });var fs = require('fs');

    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
}