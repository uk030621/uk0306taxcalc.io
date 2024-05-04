// This JavaScript code adds an event listener to the "calculateButton" element, which is a button on the web page. 
// The event listener listens for a click event on the button. When the button is clicked, the function specified inside the addEventListener method is executed.
document.getElementById("calculateButton").addEventListener("click", function() {
    calculateTax(); // Call function to calculate the tax and national insurance
    showTable(); // Call function to show tables
    showResultsHeading(); // Call function to show the heading
    showEffectiveTax();
    getPensioner();
    getMarriage();
    getSelfEmploy();
    getScotland();
  });
  
  document.getElementById("myCheckbox").addEventListener("click", function() {
    getPensioner();
  });

  document.getElementById("myCheckbox2").addEventListener("click", function() {
    getSelfEmploy();
  });

  document.getElementById("myCheckbox3").addEventListener("click", function() {
    getMarriage();
  });

  document.getElementById("myCheckbox4").addEventListener("click", function() {
    getScotland();
  });


  // script.js
function updateDateTime() {
  var datetimeElement = document.getElementById('datetime');
  var now = new Date();
  var dateTimeString = now.toLocaleString(); // Adjust format as needed
  datetimeElement.innerHTML = 'Current Date and Time: ' + dateTimeString;
}

window.onload = function() {
  updateDateTime(); // Initial update
  setInterval(updateDateTime, 1000); // Update every second
};


// This function is responsible for displaying the table where the tax breakdown will be shown. 
// It sets the CSS property display to block for the table element, making it visible on the web page. 
// Without this call, the table would remain hidden until the button is clicked.

const incomeInput = document.getElementById('income');
const resultTable1 = document.getElementById('resultTable1');
const closeButton = document.getElementById('closeButton');

function showTable() {
  if (incomeInput.value.trim() !== '') {
    resultTable1.style.display = "block";
    closeButton.style.display = "block";
  } else {
    resultTable1.style.display = "none";
    closeButton.style.display = "none";
  }
}

function showTable2() {
  document.getElementById("resultTable2").style.display = "block"; // Set display property to "block" to show the table
}

function showEffectiveTax() {
  if (incomeInput.value.trim() !== '')
  document.getElementById("effectiveTax").style.display = "block"; // Set display property to "block" to show the table
}

function showEffectiveTax2() {
  document.getElementById("scotEffectiveTax").style.display = "block"; // Set display property to "block" to show the table
}

// This function is responsible for showing the heading "UK Results Table:". Similar to showTable(), it sets the CSS property display 
// to block for the heading element, making it visible on the web page.
function showResultsHeading() {
  if (incomeInput.value.trim() !== '')
  document.getElementById("resultsHeading").style.display = "block"; // Set display property to "block" to show the heading
}
// This function is responsible for showing the heading "Scotland Results Table:". Similar to showTable(), it sets the CSS property display 
// to block for the heading element, making it visible on the web page.
function showResultsHeading2() {
  document.getElementById("resultsHeading2").style.display = "block"; // Set display property to "block" to show the heading
}

document.getElementById("income").addEventListener("input", function() {
  var checkboxWrapper = document.getElementById("checkboxWrapper");

  if (this.value !== "") {
      checkboxWrapper.style.display = "block"; // Show the checkbox wrapper
  } else {
      checkboxWrapper.style.display = "none"; // Hide the checkbox wrapper
  }
});

document.getElementById("income").addEventListener("input", function() {
  var checkboxWrapper = document.querySelector(".checkboxLabel");

  if (this.value !== "") {
      checkboxWrapper.style.display = "block"; // Show the checkbox wrapper
  } else {
      checkboxWrapper.style.display = "none"; // Hide the checkbox wrapper
  }
});

//const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', function() {
    // Close the current window
    window.close();
});

// This function formats the results (comma and decimal points)
function formatNumberWithDecimalPlacesAndCommas(number, decimalPlaces) {
  // Convert the input to a number if it's a string
  number = parseFloat(number);

  // Check if the input is a valid number
  if (isNaN(number)) {
    return number; // Return original value if not a valid number
  }

  // Use toFixed to format number with desired decimal places
  var formattedNumber = number.toFixed(decimalPlaces);

  // Add commas for thousands
  formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Return the formatted number
  return formattedNumber;
}
  
// Function to load JSON file
function loadConfig(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', 'config.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
}

var globalVariablePensioner=0;
var globalVariableMarriage=0;
var globalVariableSelfemploy=0;
var globalVariableScotland=0;

function getPensioner() {
    
  // Get the checkbox element
    const checkbox = document.getElementById('myCheckbox');

    // Check if the event listener is already attached
    if (!checkbox.hasListener) {
        // Add event listener to the checkbox
        checkbox.addEventListener('change', function() {
            // Check if the checkbox is checked
            if (this.checked) {
                globalVariablePensioner = 1;
                // Checkbox is checked
                // Call a function or execute code specific to when the checkbox is checked
            } else {
                globalVariablePensioner = 0;
                // Checkbox is unchecked
                // Call a function or execute code specific to when the checkbox is unchecked
            }
            //console.log(globalVariablePensioner); // Now this will log the value outside the function
            calculateTax();
        });

        // Set a flag to indicate that the event listener is attached
        checkbox.hasListener = true;
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getSelfEmploy() {
    
  // Get the checkbox element
    const checkbox2 = document.getElementById('myCheckbox2');

    // Check if the event listener is already attached
    if (!checkbox2.hasListener) {
        // Add event listener to the checkbox
        checkbox2.addEventListener('change', function() {
            // Check if the checkbox is checked
            if (this.checked) {
              globalVariableSelfemploy = 1;
                // Checkbox is checked
                // Call a function or execute code specific to when the checkbox is checked
            } else {
              globalVariableSelfemploy = 0;
                // Checkbox is unchecked
                // Call a function or execute code specific to when the checkbox is unchecked
            }
            //console.log(globalVariableSelfemploy); // Now this will log the value outside the function
            calculateTax();
        });

        // Set a flag to indicate that the event listener is attached
        checkbox2.hasListener = true;
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getMarriage() {
    
    // Get the checkbox element
      const checkbox3 = document.getElementById('myCheckbox3');
  
      // Check if the event listener is already attached
      if (!checkbox3.hasListener) {
          // Add event listener to the checkbox
          checkbox3.addEventListener('change', function() {
              // Check if the checkbox is checked
              if (this.checked) {
                globalVariableMarriage = 1;
                  // Checkbox is checked
                  // Call a function or execute code specific to when the checkbox is checked
              } else {
                globalVariableMarriage = 0;
                  // Checkbox is unchecked
                  // Call a function or execute code specific to when the checkbox is unchecked
              }
              //console.log(globalVariableMarriage); // Now this will log the value outside the function
              calculateTax();
          });
  
          // Set a flag to indicate that the event listener is attached
          checkbox3.hasListener = true;
      }
  }
  
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getScotland() {
    
  // Get the checkbox element
    const checkbox4 = document.getElementById('myCheckbox4');

    // Check if the event listener is already attached
    if (!checkbox4.hasListener) {
        // Add event listener to the checkbox
        checkbox4.addEventListener('change', function() {
            // Check if the checkbox is checked
            if (this.checked) {
              globalVariableScotland = 1;
                // Checkbox is checked
                // Call a function or execute code specific to when the checkbox is checked
            } else {
              globalVariableScotland = 0;
                // Checkbox is unchecked
                // Call a function or execute code specific to when the checkbox is unchecked
            }
            // Call function
            calculateTax();
        });

        // Set a flag to indicate that the event listener is attached
        checkbox4.hasListener = true;
    }
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Function to round to specified significant figures
function roundToSF(num, sigFigs) {
  if (num === 0) return 0;
  const multiplier = Math.pow(10, sigFigs - Math.floor(Math.log10(Math.abs(num))) - 1);
  return Math.round(num * multiplier) / multiplier;
}


document.getElementById("myCheckbox4").addEventListener("change", function() {
  var resultsHeading2 = document.getElementById("resultsHeading2");
  var resultTable2 = document.getElementById("resultTable2");
  var scotEffectTax = document.getElementById("scotEffectiveTax");
  
  if (this.checked) {
      resultsHeading2.style.display = "block";
      resultTable2.style.display = "table";
      scotEffectTax.style.display = "block";
  } else {
      resultsHeading2.style.display = "none";
      resultTable2.style.display = "none";
      scotEffectTax.style.display = "none";
  }
});


// Function to calculate tax and national insurance.
function calculateTax() {
  // Load config file
  loadConfig(function (config) {
    // Retrieve Tax Factors from config file
    var personalAllowance = config.personalAllowance;
    var basicLimit = config.basicLimit;
    var basicRate = config.basicRate;
    var higherRate = config.higherRate;
    var highestRate = config.highestRate;
    var highestLimit = config.highestLimit;
    var NIClass1StandardRate = config.NIClass1StandardRate;
    var NIClass1HighRate = config.NIClass1HighRate;
    var TaperLimit = config.TaperLimit;
    var class2FlatRate = config.class2FlatRate;
    var class4Standard = config.class4Standard;
    var class4Higher = config.class4Higher;
   
    var NI1 = config.NI1;
    var NI2 = config.NI2;

    var scotTaper = config.scotTaper;
    
    var SRb = config.SRb;
    var SRe = config.SRe;
    var RATE1 = config.RATE1;

    var SBRb = config.SBRb;
    var SBRe = config.SBRe;
    var RATE2 = config.RATE2;

    var IRb = config.IRb;
    var IRe = config.IRe;
    var RATE3 = config.RATE3;

    var HRb = config.HRb;
    var HRe = config.HRe;
    var RATE4 = config.RATE4;

    var ARb = config.ARb;
    var ARe = config.ARe;
    var RATE5 = config.RATE5;

    var topRate = config.topRATE;
    var RATE6 = config.RATE6;


    var income = parseFloat(document.getElementById("income").value);
    var tax, stax, ni, marriageAllowance, ma
    var rateBasic, adjustedPersonalAllowance, calculation, taxableIncome;


    //--------------------------------------------------------------------------------------------------------------------------------------------
    // Increase tax payer personal allowance by 10% when spouse / partner income is less than personal allowance & tax payer rate does exceed 20%. 
    marriageAllowance = personalAllowance * 1.10
    ma = roundToSF(marriageAllowance, 4).toFixed(0)
    // Format and round the result
    let formattedResult = "Personal Allowance (inc Marriage Allowance = £" + roundToSF(marriageAllowance, 4).toFixed(0) + ")";
    console.log(formattedResult);
    //--------------------------------------------------------------------------------------------------------------------------------------------
    // Call function 
    getPensioner()
    
    
    // In the UK, if your salary is greater than £100,000, you will start to lose your tax-free personal allowance. 
    // For every £2 you earn above £100,000, your personal allowance decreases by £1 until it reaches zero. 
    // This is commonly known as the "tapering" of the personal allowance. As a result, your effective tax rate increases in that income bracket.

    // Example for salary £120,000 For every £2 you earn above £100,000, your personal allowance decreases by £1.
    // So, £20,000 / £2 = £10,000.
    calculation = (income - TaperLimit)/2
    
    // Therefore, your personal allowance reduces by £10,000.If the standard personal allowance is £12,570 (for the tax year 2023/24), 
    // then it would be reduced to £2,570 (£12,570 - £10,000).
    adjustedPersonalAllowance = (personalAllowance-calculation)

    // £50,270 minus £12,570 = £37,700
    rateBasic = (basicLimit-personalAllowance)
    
    // This condition assigns a zero amount to the adjusted personal allowance if it is negative else it keeps the adjustment (£2,570 for example)
    if (adjustedPersonalAllowance < 0) {adjustedPersonalAllowance = 0;} 
    else {adjustedPersonalAllowance = adjustedPersonalAllowance}

    // This is the total taxable income (for example £120,000 - £2,570 = £117,430)
    taxableIncome = income - adjustedPersonalAllowance
    

    if (globalVariableScotland===1) {showResultsHeading2();}
    if (globalVariableScotland===1) {showTable2();}
    if (globalVariableScotland===1) {showEffectiveTax2();}
    
    var maAnnualSaving = (ma-personalAllowance) * RATE2

    var flagMA = 0
    var maKickIn = (personalAllowance + maAnnualSaving/0.19)

    console.log("Marriage Allowance Tax Surpassed =", maKickIn)

    var A = personalAllowance
    
    var B = (SRe-SRb)+1
    var Brate = RATE1
    
    var C = (SBRe-SBRb)+1
    var Crate = RATE2

    
    var D = (IRe-IRb)+1
    var Drate = RATE3
     
    var E = (HRe-HRb)+1
    var Erate = RATE4

    var F = (ARe-ARb)+1
    var Frate = RATE5

    var Trate = RATE6

    var starter = A + B
    var basic = A + B + C
    var intermediate = A + B + C + D
    var higher = A + B + C + D + E
    var advanced = A + B + C + D + E + F
    
    console.log("starter =", starter)
    console.log("basic =", basic)
    console.log("intermediate =", intermediate)
    console.log("higher =", higher)
    console.log("advanced =", advanced)
    
    if (globalVariableScotland===1 && globalVariableMarriage && income > maKickIn && income <= IRe) {flagMA = -252}
    else {flagMA = 0}

    console.log("FLAG MA = ", flagMA)

    // tax only
    if (globalVariableScotland === 1 && income <= A) {stax = 0;} // verified
    else if (globalVariableScotland === 1 && (income <= (starter))) {stax = (income - A) * Brate;} // verified
    else if (globalVariableScotland===1 && income >= (starter) && income <= (basic)) {stax = (B * Brate) + ((income-(starter)) * Crate);} // verified
    else if (globalVariableScotland===1 && income >= (basic) && income <= (intermediate)) {stax = (B * Brate) + (C * Crate) + ((income - (basic)) * Drate);} // verified
    else if (globalVariableScotland===1 && income >= (intermediate) && income <= (higher)) {stax = (B * Brate) + (C * Crate) + (D * Drate) + ((income - (intermediate)) * Erate);} // verified
    else if (globalVariableScotland===1 && income >= (higher) && income <= scotTaper) {stax = (B * Brate) + (C * Crate) + (D * Drate) + (E * Erate) + (income-(higher)) * Frate;} // verified
    else if (globalVariableScotland===1 && income > scotTaper && income <= topRate) {stax = (B * Brate) +(C * Crate) +( D * Drate) + (E * Erate) + (income - (higher))*Frate + ((income-scotTaper) * 0.5 * Frate)} // verified
    else {stax = (B * Brate) + (C * Crate) +( D * Drate) + (E * Erate) + (F * Frate) + ((income - (advanced)) * Trate) + ((topRate-scotTaper) * 0.5 * Trate)} // verified

    // Initialize scottish tax variables
    var stax19 = 0;
    var stax20 = 0;
    var stax21 = 0;
    var stax42 = 0;
    var stax45 = 0;
    var stax48 = 0;

    // granular tax
    if (globalVariableScotland === 1 && income <= A) {tax = 0;} // verified
    else if (globalVariableScotland === 1 && (income <= (starter))) {stax19 = (income - A) * Brate;} // verified
    else if (globalVariableScotland===1 && income >= (starter) && income <= (basic)) {stax19 = (B * Brate); stax20 = ((income-(starter)) * Crate);} // verified
    else if (globalVariableScotland===1 && income >= (basic) && income <= (intermediate)) {stax19 = (B * Brate); stax20 = (C * Crate);  stax21 = ((income - (basic)) * Drate);} // verified
    else if (globalVariableScotland===1 && income >= (intermediate) && income <= (higher)) {stax19 = (B * Brate); stax20 = (C * Crate); stax21 = (D * Drate); stax42 = ((income - (intermediate)) * Erate);} // verified
    else if (globalVariableScotland===1 && income >= (higher) && income <= scotTaper) {stax19 = (B * Brate); stax20 = (C * Crate); stax21 = (D * Drate); stax42 = (E * Erate); stax45 = (income-(higher)) * Frate;} // verified
    else if (globalVariableScotland===1 && income >= scotTaper && income <= topRate) {stax19 = (B * Brate); stax20 = (C * Crate); stax21 = ( D * Drate); stax42 = (E * Erate); stax45 = ((income - (higher))*Frate + ((income-scotTaper) * 0.5 * Frate))} // verified
    else {stax19 = (B * Brate); stax20 = (C * Crate); stax21 = ( D * Drate); stax42 = (E * Erate); stax45 = (F * Frate); stax48 = (((income - (advanced)) * Trate) + ((topRate-scotTaper) * 0.5 * Trate))} // verified

    var scotTotalTax = stax19 + stax20 + stax21 + stax42 + stax45 + stax48

    // Initialize tax variables
    var taxAt0Percent = 0;
    var taxAt20Percent = 0;
    var taxAt40Percent = 0;
    var taxAt45Percent = 0;

    // This condition includes check for Marriage Allowance
    if (globalVariableMarriage===1 && (income <= ma)) {tax = 0;}
    else if (globalVariableMarriage===1 && income <=basicLimit) {tax = (income - ma) * basicRate;}
    else if (income <= personalAllowance) {tax = 0;} 
    else if (income <= basicLimit) {tax = (income - personalAllowance) * basicRate;}
    else if (income < TaperLimit) {tax = (basicLimit - personalAllowance) * basicRate + (income - basicLimit) * higherRate;}
    else if (income > highestLimit) {tax = (rateBasic * basicRate) + ((highestLimit - rateBasic) * higherRate) + ((income - highestLimit) * highestRate);}
    else {tax = (rateBasic * basicRate) + ((taxableIncome - rateBasic) * higherRate);}

    
    // This condition includes check if a Pensioner and/or self employed.
    if (globalVariablePensioner === 1) {ni = 0;}
    else if (globalVariableSelfemploy === 1 && income <= NI1) {ni = 0;}
    else if (globalVariableSelfemploy === 1 && income > NI1 && income <= NI2) {ni = (52 * class2FlatRate) + ((income - NI1) * class4Standard);}
    else if (globalVariableSelfemploy === 1 && income > NI2) {ni = (52 * class2FlatRate) + ((NI2 - NI1) * class4Standard) + ((income - NI2) * class4Higher);}
    else if (income <= NI1) {ni = 0;} 
    else if (income <= NI2) {ni = (income - NI1) * NIClass1StandardRate;}
    else {ni = (NI2 - NI1) * NIClass1StandardRate + (income - NI2) * NIClass1HighRate;}
    
    console.log("IF income <= NI12 = ", "income = ",income, "minus NI1 = ", NI1, "multiplied by NIClass1HighRate = ", NIClass1HighRate, "ni = ",(income - NI1) * NIClass1StandardRate)
    console.log("ni else = ", (NI2 - NI1) * NIClass1StandardRate + (income - NI2) * NIClass1HighRate)
    
    // Calculate tax amount for each tax rate
    // Tax at 0% rate (e.g., personal allowance)
    if (globalVariableMarriage===1 && income <= ma) {taxAt0Percent = 0}
    else if (globalVariableMarriage===1 && income <= basicLimit) {taxAt0Percent=0; taxAt20Percent = (income-ma) * basicRate;}
    else if (income <= personalAllowance) {taxAt0Percent = 0;} 
    else if (income <= basicLimit) {taxAt0Percent = 0; taxAt20Percent = (income - personalAllowance) * basicRate;}
    else if (income < TaperLimit) {taxAt0Percent = 0; taxAt20Percent = (basicLimit - personalAllowance) * basicRate; taxAt40Percent = (income - basicLimit) * higherRate;}
    else if (income > highestLimit) {taxAt0Percent = 0; taxAt20Percent = (rateBasic * basicRate); taxAt40Percent = ((highestLimit - rateBasic) * higherRate); taxAt45Percent = ((income - highestLimit) * highestRate);}
    else {taxAt0Percent =0; taxAt20Percent = (rateBasic * basicRate); taxAt40Percent = ((taxableIncome - rateBasic) * higherRate);}
    
    // Calculate total tax
    var totalTax = taxAt0Percent + taxAt20Percent + taxAt40Percent + taxAt45Percent;

    //##################################################################################################################
    
    //UK & Scotland NATIONAL INSURANCE
    //var formattedTax = formatNumberWithDecimalPlacesAndCommas(tax, 0); // Specify the number of decimal places here
    var formattedNI = formatNumberWithDecimalPlacesAndCommas(ni, 0); // Specify the number of decimal places here
    var formattedNImonth = formatNumberWithDecimalPlacesAndCommas(ni/12, 0); // Specify the number of decimal places here

    //document.getElementById("result1").innerText = " Tax = £" + formattedTax;
    document.getElementById("result2").innerText = "£" + formattedNI;
    document.getElementById("scotresult2").innerText = "£" + formattedNI;

    document.getElementById("result2m").innerText = "£" + formattedNImonth;
    document.getElementById("scotresult2m").innerText = "£" + formattedNImonth;

    //##################################################################################################################
    
    // UK TAXATION
    
    // UK TOTAL DEDUCTIONS
    var totalTax = tax + ni;
    var formattedTotalTax = formatNumberWithDecimalPlacesAndCommas(totalTax, 0); // Specify the number of decimal places here
    var formattedTotalTaxmonth = formatNumberWithDecimalPlacesAndCommas(totalTax/12, 0); // Specify the number of decimal places here

    document.getElementById("totalDeductionAnnual").innerText = "£" + formattedTotalTax;
    document.getElementById("totalDeductionMonth").innerText = "£" + formattedTotalTaxmonth;

    // UK EFFECTIVE TAX
    var effectiveTax = (totalTax/income)*100
    var formattedEffectiveTax = formatNumberWithDecimalPlacesAndCommas(effectiveTax, 1); // Specify the number of decimal places here

    document.getElementById("effectiveTax").innerText = "Effective Tax Rate = " + formattedEffectiveTax + "%";

    // UK NET INCOME
    var netIncome = (income - (totalTax))
    var formattedNetIncome = formatNumberWithDecimalPlacesAndCommas(netIncome, 0)
    var formattedNetIncomemonth = formatNumberWithDecimalPlacesAndCommas(netIncome/12, 0)

    document.getElementById("netincome").innerText = "£" + formattedNetIncome;
    document.getElementById("netincomem").innerText = "£" + formattedNetIncomemonth;

    // UK TAX
    var formattedSumTax = formatNumberWithDecimalPlacesAndCommas(tax, 0)
    var formattedSumTaxmonth = formatNumberWithDecimalPlacesAndCommas(tax/12, 0)

    document.getElementById("taxtot").innerText = "£" + formattedSumTax;
    document.getElementById("taxtotm").innerText = "£" + formattedSumTaxmonth;


    // UK TAXATION SPLITS

    // Format Annual tax amounts
    //var formattedTaxAt0Percent = formatNumberWithDecimalPlacesAndCommas(taxAt0Percent, 0);
    var formattedTaxAt20Percent = formatNumberWithDecimalPlacesAndCommas(taxAt20Percent, 0);
    var formattedTaxAt40Percent = formatNumberWithDecimalPlacesAndCommas(taxAt40Percent, 0);
    var formattedTaxAt45Percent = formatNumberWithDecimalPlacesAndCommas(taxAt45Percent, 0);
    
    // Row 1 of table
    // Display Annual tax breakdown
    //document.getElementById("tax1").innerText = " Tax at 0% rate = £" + formattedTaxAt0Percent;
    document.getElementById("tax2").innerText = "£" + formattedTaxAt20Percent;
    document.getElementById("tax3").innerText = "£" + formattedTaxAt40Percent;
    document.getElementById("tax4").innerText = "£" + formattedTaxAt45Percent;


    // Format Monthly tax amounts
    //var formattedTaxAt0Percent = formatNumberWithDecimalPlacesAndCommas(taxAt0Percent, 0);
    var formattedTaxAt20Percentmonth = formatNumberWithDecimalPlacesAndCommas(taxAt20Percent/12, 0);
    var formattedTaxAt40Percentmonth = formatNumberWithDecimalPlacesAndCommas(taxAt40Percent/12, 0);
    var formattedTaxAt45Percentmonth = formatNumberWithDecimalPlacesAndCommas(taxAt45Percent/12, 0);
    
    // Row 2 of table
    // Display Monthly tax breakdown
    //document.getElementById("tax1").innerText = " Tax at 0% rate = £" + formattedTaxAt0Percent;
    document.getElementById("tax2m").innerText = "£" + formattedTaxAt20Percentmonth;
    document.getElementById("tax3m").innerText = "£" + formattedTaxAt40Percentmonth;
    document.getElementById("tax4m").innerText = "£" + formattedTaxAt45Percentmonth;


    //------------------------------------------------------------------------------------------------------------------------------------------
    
    
    // SCOTTISH TAXATION

    // SCOTTISH DEDUCTIONS
    var scotTotalTax = stax + ni + flagMA;
    var formattedscotTotalTax = formatNumberWithDecimalPlacesAndCommas(scotTotalTax, 0); // Specify the number of decimal places here
    var formattedscotTotalTaxmonth = formatNumberWithDecimalPlacesAndCommas(scotTotalTax/12, 0); // Specify the number of decimal places here 
    
    document.getElementById("stotalDeductionAnnual").innerText = "£" + formattedscotTotalTax;
    document.getElementById("stotalDeductionMonth").innerText = "£" + formattedscotTotalTaxmonth;

    // SCOTTISH EFFECTIVE TAX
    var scoteffectiveTax = (scotTotalTax/income)*100
    var scotformattedEffectiveTax = formatNumberWithDecimalPlacesAndCommas(scoteffectiveTax, 1); // Specify the number of decimal places here

    document.getElementById("scotEffectiveTax").innerText = "Effective Tax Rate = " + scotformattedEffectiveTax + "%";


    // SCOTTISH NET INCOME
    var scotnetIncome = (income - (scotTotalTax))
    var formattedScotNetIncome = formatNumberWithDecimalPlacesAndCommas(scotnetIncome, 0)
    var formattedScotNetIncomemonth = formatNumberWithDecimalPlacesAndCommas(scotnetIncome/12, 0)
    
    document.getElementById("scotnetincome").innerText = "£" + formattedScotNetIncome;
    document.getElementById("scotnetincomem").innerText = "£" + formattedScotNetIncomemonth;


    var formattedScotMarriageAllowance = formatNumberWithDecimalPlacesAndCommas(flagMA, 0)
    var formattedScotMarriageAllowancemonth = formatNumberWithDecimalPlacesAndCommas(flagMA/12, 0)
    
    document.getElementById("scotaxma").innerText = "£" + formattedScotMarriageAllowance;
    document.getElementById("scotaxmam").innerText = "£" + formattedScotMarriageAllowancemonth;

    // SCOTTISH TAX
    
    // UK TAX
    var scotformattedSumTax = formatNumberWithDecimalPlacesAndCommas(stax+flagMA, 0)
    var scotformattedSumTaxmonth = formatNumberWithDecimalPlacesAndCommas(stax+(flagMA/12), 0)

    document.getElementById("scotaxtot").innerText = "£" + scotformattedSumTax;
    document.getElementById("scotaxtotm").innerText = "£" + scotformattedSumTaxmonth;


    // SCOTTISH TAXATION SPLITS

    // Format Annual tax amounts
    //var formattedTaxAt0Percent = formatNumberWithDecimalPlacesAndCommas(taxAt0Percent, 0);
    var sformattedTaxAt19Percent = formatNumberWithDecimalPlacesAndCommas(stax19, 0);
    var sformattedTaxAt20Percent = formatNumberWithDecimalPlacesAndCommas(stax20, 0);
    var sformattedTaxAt21Percent = formatNumberWithDecimalPlacesAndCommas(stax21, 0);
    var sformattedTaxAt42Percent = formatNumberWithDecimalPlacesAndCommas(stax42, 0);
    var sformattedTaxAt45Percent = formatNumberWithDecimalPlacesAndCommas(stax45, 0);
    var sformattedTaxAt48Percent = formatNumberWithDecimalPlacesAndCommas(stax48, 0);
    
    document.getElementById("scotax1").innerText = "£" + sformattedTaxAt19Percent;
    document.getElementById("scotax2").innerText = "£" + sformattedTaxAt20Percent;
    document.getElementById("scotax3").innerText = "£" + sformattedTaxAt21Percent;
    document.getElementById("scotax4").innerText = "£" + sformattedTaxAt42Percent;
    document.getElementById("scotax5").innerText = "£" + sformattedTaxAt45Percent;
    document.getElementById("scotax6").innerText = "£" + sformattedTaxAt48Percent;


    // Format Monthly tax amounts
    //var formattedTaxAt0Percent = formatNumberWithDecimalPlacesAndCommas(taxAt0Percent, 0);
    var sformattedTaxAt19Percentmonth = formatNumberWithDecimalPlacesAndCommas(stax19/12, 0);
    var sformattedTaxAt20Percentmonth = formatNumberWithDecimalPlacesAndCommas(stax20/12, 0);
    var sformattedTaxAt21Percentmonth = formatNumberWithDecimalPlacesAndCommas(stax21/12, 0);
    var sformattedTaxAt42Percentmonth = formatNumberWithDecimalPlacesAndCommas(stax42/12, 0);
    var sformattedTaxAt45Percentmonth = formatNumberWithDecimalPlacesAndCommas(stax45/12, 0);
    var sformattedTaxAt48Percentmonth = formatNumberWithDecimalPlacesAndCommas(stax48/12, 0);

    document.getElementById("scotax1m").innerText = "£" + sformattedTaxAt19Percentmonth;
    document.getElementById("scotax2m").innerText = "£" + sformattedTaxAt20Percentmonth;
    document.getElementById("scotax3m").innerText = "£" + sformattedTaxAt21Percentmonth;
    document.getElementById("scotax4m").innerText = "£" + sformattedTaxAt42Percentmonth;
    document.getElementById("scotax5m").innerText = "£" + sformattedTaxAt45Percentmonth;
    document.getElementById("scotax6m").innerText = "£" + sformattedTaxAt48Percentmonth; 
     
  });
}
