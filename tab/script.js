// alert("For Better Experience Open Desktop");

//DARK MODE JS
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("light-mode");
    const button = document.getElementById("modeToggle");
    button.addEventListener("click", toggleMode);
});

function toggleMode() {
    const body = document.body;
    const button = document.getElementById("modeToggle");

    // Toggle between light and dark mode
    if (body.classList.contains("light-mode")) {
        body.classList.replace("light-mode", "dark-mode");
    } else {
        body.classList.replace("dark-mode", "light-mode");
    }
}
// --------------------------------------------------




// TAB SELECTION STYLE CSS-JS
const tabs=document.querySelectorAll('.tab_btn');
const all_content=document.querySelectorAll('.content');
tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{ 
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        var line=document.querySelector('.line');
        line.style.width=e.target.offsetWidth+"px";
        line.style.left=e.target.offsetLeft+"px";
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active')
    })  
       
})

/**-------------------------------------------
  --------------------length-----------------
---------------------------------------------*/

const fromLen = document.getElementById("fromLen");
const toLen = document.getElementById("toLen");
fromLen.addEventListener("input", function() {
const fromLenS=document.getElementById("fromLenS").value;
const toLenS=document.getElementById("toLenS").value;
console.log(fromLen.value,toLen.value,fromLenS,toLenS);
const conversionFactors = {
    millimetre: 0.001,        // in meters
    centimetre: 0.01,
    metre: 1,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    lightyear: 9.461e+15
};
const value = parseFloat(fromLen.value);
if (isNaN(value)) {
    toLen.textContent = "Convert Unit...";
    return;
}
const from = fromLenS;
const to = toLenS;
const valueInMeters = value * conversionFactors[from];
const convertedValue = valueInMeters / conversionFactors[to];
const displayValue = convertedValue > 1e+6 || convertedValue < 1e-4 ? convertedValue.toExponential(5) : convertedValue.toFixed(5);
toLen.textContent = displayValue + " " + getUnitSymbol(to);

function getUnitSymbol(unit) {
    const symbols = {
        millimetre: "mm",
        centimetre: "cm",
        metre: "m",
        inch: "in",
        foot: "ft",
        yard: "yd",
        lightyear: "ly"
    };
    return symbols[unit] || "";
}
});

/**-------------------------------------------
  --------------------Weight-----------------
---------------------------------------------*/

const fromWeight = document.getElementById("fromWeight");
const toWeight = document.getElementById("toWeight");
fromWeight.addEventListener("input", function() {
const fromWeightS=document.getElementById("fromWeightS").value;
const toWeightS=document.getElementById("toWeightS").value;   
const conversionFactors = {
    milligram: 0.001,       // in grams
    gram: 1,
    kilogram: 1000,
    ounce: 28.3495,
    pound: 453.592,
    tonne: 1e+6
};
const value = parseFloat(fromWeight.value);
            if (isNaN(value)) {
                displayWeight.textContent = "Convert Unit...";
                return;
            }
const from = fromWeightS;
const to = toWeightS;
const valueInGrams = value * (conversionFactors[from] || 0);
const convertedValue = valueInGrams / (conversionFactors[to] || 1);
const displayValue = convertedValue > 1e+6 || convertedValue < 1e-4  ? convertedValue.toExponential(5) : convertedValue.toFixed(5);
toWeight.textContent = displayValue + " " + getUnitSymbol(to);

function getUnitSymbol(unit) {
    const symbols = {
        milligram: "mg",
        gram: "g",
        kilogram: "kg",
        ounce: "oz",
        pound: "lb",
        tonne: "t"
    };
    return symbols[unit] || "";
}
});  

/**-------------------------------------------
  ----------------Temperature-----------------
---------------------------------------------*/
function getUnitSymbol(unit) {
    const symbols = {
        celsius: "°C",
        fahrenheit: "°F",
        kelvin: "K"
    };
    return symbols[unit] || "";
}

const fromTemp = document.getElementById("fromTemp");
const toTemp = document.getElementById("toTemp");
fromTemp.addEventListener("input", function() {
const fromTempS=document.getElementById("fromTempS").value;
const toTempS=document.getElementById("toTempS").value;
const value = parseFloat(fromTemp.value);
if (isNaN(value)) {
    toTemp.textContent = "Convert Unit...";
    return;
}

const from = fromTempS;
const to = toTempS;
let convertedValue;

// Convert the temperature based on the selected units
if (from == "celsius") {
    if (to == "fahrenheit") {
        convertedValue = (value * 9/5) + 32;
    } else if (to == "kelvin") {
        convertedValue = value + 273.15;
    } else {
        convertedValue = value;
    }
} else if (from == "fahrenheit") {
    if (to == "celsius") {
        convertedValue = (value - 32) * 5/9;
    } else if (to == "kelvin") {
        convertedValue = (value - 32) * 5/9 + 273.15;
    } else {
        convertedValue = value;
    }
} else if (from == "kelvin") {
    if (to == "celsius") {
        convertedValue = value - 273.15;
    } else if (to == "fahrenheit") {
        convertedValue = (value - 273.15) * 9/5 + 32;
    } else {
        convertedValue = value;
    }
}

// Display the converted value with the appropriate unit symbol
toTemp.textContent = convertedValue.toFixed(2) + " " + getUnitSymbol(to);


});

/**-------------------------------------------
  --------------------Data--------------------
---------------------------------------------*/
const fromData = document.getElementById("fromData");
const toData = document.getElementById("toData");
fromData.addEventListener("input", function() {
const fromDataS = document.getElementById("fromDataS");
const toDataS = document.getElementById("toDataS");
const conversionFactors = {
    bit: 1 / 8,               // 1 bit = 1/8 byte
    byte: 1,                  // base unit in bytes
    kilobyte: 1024,           // in bytes
    megabyte: 1024 ** 2,      // in bytes
    gigabyte: 1024 ** 3,      // in bytes
    terabyte: 1024 ** 4,      // in bytes
    petabyte: 1024 ** 5       // in bytes
    
};
const value = parseFloat(fromData.value);
if (isNaN(value)) {
    toData.textContent = "Convert Unit....";
    return;
}

const from = fromDataS.value;
const to = toDataS.value;
const valueInBytes = value * (conversionFactors[from] || 0);
const convertedValue = valueInBytes / (conversionFactors[to] || 1);
const displayValue = convertedValue > 1e+6 || convertedValue < 1e-4 ? convertedValue.toExponential(5) : convertedValue.toFixed(5);
console.log(from,to,valueInBytes,convertedValue,displayValue);
toData.textContent = displayValue + " " + getUnitSymbol(to);
function getUnitSymbol(unit) {
    const symbols = {
        bit: "b",
        byte: "B",
        kilobyte: "KB",
        megabyte: "MB",
        gigabyte: "GB",
        terabyte: "TB",
        petabyte: "PB"
    };
    return symbols[unit] || "";
}
});

/**-------------------------------------------
  --------------------Volume------------------
---------------------------------------------*/
const fromVolume = document.getElementById("fromVolume");
const toVolume = document.getElementById("toVolume");
fromVolume.addEventListener("input", function() {
const fromVolumeS = document.getElementById("fromVolumeS");
const toVolumeS = document.getElementById("toVolumeS");
const conversionFactors = {
    cubicMeter: 1,               // base unit
    liter: 0.001,                // 1 liter = 0.001 m³
    milliliter: 1e-6,            // 1 mL = 1e-6 m³
    cubicCentimeter: 1e-6,       // 1 cm³ = 1e-6 m³
    cubicInch: 1.6387e-5,        // 1 in³ = 0.000016387 m³
    cubicFoot: 0.0283168,        // 1 ft³ = 0.0283168 m³
    cubicYard: 0.764555,         // 1 yd³ = 0.764555 m³
    gallon: 0.00378541           // 1 gallon = 0.00378541 m³ (US gallon)
};
const value = parseFloat(fromVolume.value);
if (isNaN(value)) {
    toVolume.textContent = "Convert Unit....";
    return;
}
const from = fromVolumeS.value;
const to = toVolumeS.value;
const valueInCubicMeters = value * conversionFactors[from];
const convertedValue = valueInCubicMeters / conversionFactors[to];
// console.log(fromVolume,toVolume,from,to);
toVolume.textContent = convertedValue.toFixed(5) + " " + getUnitSymbol(to);
function getUnitSymbol(unit) {
    const symbols = {
        cubicMeter: "m³",
        liter: "L",
        milliliter: "mL",
        cubicCentimeter: "cm³",
        cubicInch: "in³",
        cubicFoot: "ft³",
        cubicYard: "yd³",
        gallon: "gal"
    };
    return symbols[unit] || "";
}        
});

/**-------------------------------------------
  --------------------Area--------------------
---------------------------------------------*/
const fromArea = document.getElementById("fromArea");
const toArea = document.getElementById("toArea");
fromArea.addEventListener("input", function() {
const fromAreaS = document.getElementById("fromAreaS");
const toAreaS = document.getElementById("toAreaS");
const conversionFactors = {
    squareMeter: 1,                    // base unit
    squareKilometer: 1e6,              // 1 km² = 1,000,000 m²
    squareMile: 2.59e6,                // 1 mi² = 2,590,000 m²
    squareYard: 0.836127,              // 1 yd² = 0.836127 m²
    squareFoot: 0.092903,              // 1 ft² = 0.092903 m²
    squareInch: 0.00064516,            // 1 in² = 0.00064516 m²
    hectare: 10000,                    // 1 ha = 10,000 m²
    acre: 4046.86                      // 1 ac = 4046.86 m²
};
const value = parseFloat(fromArea.value);
if (isNaN(value)) {
    toArea.textContent = "Convert Unit....";
    return;
}
const from = fromAreaS.value;
const to = toAreaS.value;
const valueInSquareMeters = value * conversionFactors[from];
const convertedValue = valueInSquareMeters / conversionFactors[to];
toArea.textContent = convertedValue.toFixed(5) + " " + getUnitSymbol(to);
function getUnitSymbol(unit) {
    const symbols = {
        squareMeter: "m²",
        squareKilometer: "km²",
        squareMile: "mi²",
        squareYard: "yd²",
        squareFoot: "ft²",
        squareInch: "in²",
        hectare: "ha",
        acre: "ac"
    };
    return symbols[unit] || "";
}                    
       
});