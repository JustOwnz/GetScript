var cookieName = "UniversalBack";

var WorldSpeed
var UnitSpeed

const domain = document.domain;

var tomorrowTranslated = "tomorrow";
var atTranslated = "at";
var prevUnit = "noble";
var explor = "spy";
var attackTranslated = "Attack";


var baseUnitSpeed = {
    "Noble": 35,
    "B\351lier": 30,
    "\311p\351e": 22,
    "Hache": 18,
    "Lourd": 11,
    "L\351ger": 10,
    "\311claireur": 9,
}
var baseUnitSpeed = {
    "noble": 35,
    "ram": 30,
    "sword": 22,
    "axe": 18,
    "hcav": 11,
    "lcav": 10,
    "spy": 9,
}
if (domain.includes("tribalwars.com.pt")) {
    tomorrowTranslated = "amanhÃ£";
    atTranslated = "Ã s";
    prevUnit = "Nobre";
    explor = "Batedor";
    attackTranslated = "Ataque";
    baseUnitSpeed = {
        "Nobre": 35,
        "ArÃ­ete": 30,
        "Espada": 22,
        "Machado": 18,
        "Cavalaria Pesada": 11,
        "CavL": 10,
        "Batedor": 9
    }
} else if (domain.includes("tribals.it") || domain.includes("tribalwars.com.br")) {
    tomorrowTranslated = "amanhÃ£";
    atTranslated = "Ã s";
    prevUnit = "Nobre";
    explor = "Explorador";
    attackTranslated = "Ataque";
    baseUnitSpeed = {
        "Nobre": 35,
        "ArÃ­ete": 30,
        "Espada": 22,
        "Machado": 18,
        "Cavalaria Pesada": 11,
        "CavL": 10,
        "Explorador": 9
    }
}

function getTimeLeftInSecond(row) {
    var TimeString = $(row).find('td')[6].innerText;
    var split = TimeString.split(':');
    return parseInt(split[2]) + 60 * parseInt(split[1]) + 3600 * parseInt(split[0]);
}

function getSender(row) {
    return $(row).find('td')[3].innerText;
}

function getDistance(row) {
    var coordAtt = getAttacker(row).split("|");
    var coordDef = getDefender(row).split("|");
    var exactDistance = Math.sqrt(Math.pow(parseInt(coordAtt[0]) - parseInt(coordDef[0]), 2) + Math.pow(parseInt(coordAtt[1]) - parseInt(coordDef[1]), 2));
    return exactDistance;
}

function getDefender(row){
    var a = $(row).find('td')[1].innerText;
    tab = a.split(')');
    return tab[tab.length-2].split('(')[1];
}

function getAttacker(row) {
    var a = $(row).find('td')[2].innerText;
    tab = a.split(')');
    return tab[tab.length - 2].split('(')[1];
}

function getTravelTimeInSecond(distance, unit) {
    return Math.round(distance * (60 * baseUnitSpeed[unit] / WorldSpeed / UnitSpeed));
}

function getBackTime(row) {
    var impact = conversionImpacttoDate(row);
    var travel = getTravelTimeInSecond(getDistance(row), findAttackSpeed(row));
    var launchDate = new Date(impact.getFullYear(), impact.getMonth(), impact.getDate(), impact.getHours(), impact.getMinutes(), parseInt(impact.getSeconds()) + travel);
    var dateStringSplit = launchDate.toString().split(" ");
    return dateStringSplit[1] + ". " + dateStringSplit[2] + ", " + dateStringSplit[4];
}

function findAttackSpeed(row) {
    var TimeLeft = getTimeLeftInSecond(row);
    var distance = getDistance(row);
    var previousUnit = prevUnit;

    for (var unit in baseUnitSpeed) {
        if (getTravelTimeInSecond(distance, unit) < TimeLeft) return previousUnit;
        previousUnit = unit;
    }
    return explor;
}


function getImpactTime(row) {
    return $(row).find('td')[5].innerText;
}

function hasNumbers(t) {
    return /\d/.test(t);
}

function conversionImpacttoDate(row) {
    var impact = getImpactTime(row);
    console.log(impact + " oi");
    var tab = impact.split(" ");
    var dateActuelle = new Date();
    console.log(tab);
    var last = tab[tab.length - 1];
    var index = tab.length - 1;
    if (!hasNumbers(last)) {
        index = index - 1;
    }

    switch (tab[0]) {
        case tomorrowTranslated:
            return new Date(dateActuelle.getFullYear(), dateActuelle.getMonth(), parseInt(dateActuelle.getDate()) + 1, tab[index].split(":")[0], tab[index].split(":")[1], tab[index].split(":")[2]);
        case atTranslated:
            return new Date(tab[1].split(".")[2], parseInt(tab[1].split(".")[1]) - 1, tab[1].split(".")[0], tab[3].split(":")[0], tab[3].split(":")[1], tab[3].split(":")[2]);
        default:
            return new Date(dateActuelle.getFullYear(), dateActuelle.getMonth(), parseInt(dateActuelle.getDate()), tab[index].split(":")[0], tab[index].split(":")[1], tab[index].split(":")[2]);

    }
    throw new Error("oops, error in data conversion")
}

function findAttackLaunch(row) {
    var impact = conversionImpacttoDate(row);
    var travel = getTravelTimeInSecond(getDistance(row), findAttackSpeed(row));
    var launchDate = new Date(impact.getFullYear(), impact.getMonth(), impact.getDate(), impact.getHours(), impact.getMinutes(), parseInt(impact.getSeconds()) - travel)
    var dateStringSplit = launchDate.toString().split(" ")
    return dateStringSplit[1] + ". " + dateStringSplit[2] + ", " + dateStringSplit[4]
}

function getFinalString(row) {
    return findAttackSpeed(row) + " " + getBackTime(row)
}

function editAttackName($row) {
    var $button = $row.find('.rename-icon');
    $button.click();
}

function renameAttackName($row, name) {
    var $input = $row.find('.quickedit-edit input[type="text"]');
    $input.val(name);
}

function submitAttackName($row) {
    var $button = $row.find('.quickedit-edit input[type="button"]');
    $button.click();
}


function RenameAttack() {
    var i = 0;
    $('tr.nowrap').each(function() {
        if ($.trim($(this).find('td')[0].innerText).includes(attackTranslated)) {
            setTimeout(delayed, i * 222, $(this));
            i++;
        }else{
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
    });
}

function delayed(param) {
    editAttackName(param);
    renameAttackName(param, getFinalString(param));
    submitAttackName(param);
}

function main() {
    $.ajax({
        type: 'GET',
        url: '/interface.php?func=get_config',
        dataType: 'xml',
        success: function(xml) {
            UnitSpeed = $(xml).find('unit_speed').text();
            WorldSpeed = $(xml).find('speed').text();

            RenameAttack();
        },
        error: function() {
            UI.ErrorMessage('An error occurred while processing XML file.');
        }
    });
}

main()
