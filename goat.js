var renderGoat = function (speak) {
    var goat = [
    "\\ ",
    "  \\             / /",
    "    \\        (\\/_//`)",
    "      \\      /   '/",
    "        \\   0  0   \\ ",
    "           /        \\ ",
    "          /    __/   \\ ",
    "         /,  _/ \\     \\_",
    "         `-./ )  |     ~^~^~^~^~^~^~^~\\~.",
    "           ( (   /                     \\_}",
    "            )   |               /      |",
    "                ;     |         \\      /",
    "                 \\/ ,/           \\    |",
    "                 / /~~|~|~~~~~~|~|\\   |",
    "                / /   | |      | | `\\ \\ ",
    "               / /    | |      | |   \\ \\ ",
    "              / (     | |      | |    \\ \\ ",
    "             /,_)    /__)     /__)   /,_/ "
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
    goat.map(function (line) { console.log(spacer + line) });
}

if (require.main === module) {    
    if (process.argv.length > 2) {        
        var m = " " + process.argv.slice(2).join(" ") + " ";
    }
    renderGoat(m);
}

module.exports = renderGoat;
