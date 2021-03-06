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
 * Returns the CO code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The CO code * @throws {Error} If the format is incorrect
 */
function getCoCode(phoneNum) {
    var coCode;

    try {
        coCode = between(phoneNum, ")", "-");
        coCode = coCode.trim();
        if (coCode.length == 3 && Number(coCode)) {
            return coCode;
        } else {
        throw new Error("Invalid CO Code: " + coCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the CO Code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayCoCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var coCode = getCoCode(phoneNum);
        outputText = "Your CO code is " + coCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
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

/**
 * Returns if phone number is valid: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code * @throws {Error} If the format is incorrect
 */
function validPhone(b) {
    try {
        var phonelength = b.length;
        var ifnumber2 = b.slice(1, 2) + b.slice(2, 3) + b.slice(3, 4) + b.slice(6, 7) + b.slice(7, 8) + b.slice(8, 9) + b.slice(10, 11) + b.slice(11, 12) + b.slice(12, 13) + b.slice(13, 14) + b.slice(14, 15);
        var hyphen = b.charAt(9);
        var par1 = b.charAt(0);
        var par2 = b.charAt(4);
        if (phonelength == 14 && ifnumber2 >= 0 && hyphen == "-" && par1 == "(" && par2 == ")") {
            return true;
        }
        else {
            throw new Error("Invalid phone number: " + b);
        }
    }
    catch (error) {
        throw new Error("Invalid: " + error.message);
    }
}

/**
 * Displays if an inputted phone number is valid or not.
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayValidPhone(inputId, outputId) {
    var outputText = ""
    var phoneNum = document.getElementById(inputId).value;
   try {
        if (validPhone(phoneNum) == true) {
        outputText = "Your phone number is valid.";
        }
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}


/**
 * Returns an line code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The line code * @throws {Error} If the format is incorrect
 */
function getLineCode(phoneNum) {

    var lineCode;
    phoneNum += "*";
    try {
        lineCode = between(phoneNum, "-", "*");
        lineCode = lineCode.trim();
        if (lineCode.length == 4 && Number(lineCode)) {
            return lineCode;
        } else {
            throw new Error("Invalid line code: " + lineCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the line code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayLineCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var lineCode = getLineCode(phoneNum);
        outputText = "Your line code is " + lineCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}

