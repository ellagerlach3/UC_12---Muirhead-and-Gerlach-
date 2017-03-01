/**
* Removes part of string between two sub strings
* @param {string} text The original string
* @param {string} start The starting string
* @param {string} end The ending string
* @return {string} The string in between
* @throws (Error} If start or end not found
*/
function between(string, start, end) {
    var startAt = string.indexOf(start);

    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);

    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }

    return string.slice(startAt, endAt);
}

/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {

    var areaCode;

    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        } else {
            throw new Error("Invalid area code: " + areaCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}

function vaildPhone(b) {
    var phonelength = b.length;
    var ifnumber2 = b.slice(1, 2) + b.slice(2, 3) + b.slice(3, 4) + b.slice(6, 7) + b.slice(7, 8) + b.slice(8, 9) + b.slice(10,11) + b.slice(11, 12) + b.slice(12,13) + b.slice (13,14) + b.slice(14,15);
    var hyphen = b.charAt(9);
    if (phonelength == 14 && ifnumber2 >= 0 && hyphen == "-") {
        return true
    }
    else {
        return false
    }
}

function displayvalidPhone(inputId, outputId) {
    var input = document.getElementById(inputId).value;
    var outputText = "";
    if (validPhone(input) == true) {
        outputText = "The number " + input + " is a valid Phone number.";
    }
    else {
        outputText = "The number " + input + " is not a valid phone number.";
    }
    document.getElementById(outputId).innerHTML = outputText;
}


