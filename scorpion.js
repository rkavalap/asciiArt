var renderScorpion = function (speak) {
    var scorpion = [
"     /|  |\\            /|  |\\ ",
"     /|  |\\            /|  |\\ ",
"    / |  | \\          / |  | \\ ",
"    | |  | |          | |  | | ",
"    \\  \\/  /  __  __  \\  \\/  / ",
"     \\    /  / /  \\ \\  \\    / ",
"      \\  /   \\ \\__/ /   \\  / ",
"      \\  /   /      \\   \\  / ",
"     _ \\ \\__/ O    O \\__/ / _",
"     \\\\ \\___          ___/ // ",
"      \\\\___/  ______  \\___//  _ ",
"   \\\\  ----(          )----  // ",
"    \\\\_____( ________ )_____// ",
"     ~-----(          )-----~  _ ",
"      _____( ________ )_____  \\ ",
"     /,----(          )----  _// ",
"    //     (  ______  )     /  \\ ",
"    ~       \\        /      \\  / ",
"             \\  __  /       / / ",
"              \\    /       / / ", 
"               \\   \\      / / ",
"                \\   ~----~ / ",
"                 \\________/  "
    ];

    var spacer = "";
    var message = [' ', '<', ' '];

    for (var c in speak) {
        message[0] += '-';
        message[1] += speak[c];
        message[2] += '-';
        spacer += ' ';
    }

    message[0] += ' ';
    message[1] += '>';
    message[2] += ' ';

    message.map(function (line) { console.log(line) });
    scorpion.map(function (line) { console.log(spacer + line) });
}

if (require.main === module) {    
    if (process.argv.length > 2) {        
        var m = " " + process.argv.slice(2).join(" ") + " ";
    }
    renderScorpion(m);    
}

module.exports = renderScorpion;
