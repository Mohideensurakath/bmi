function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");
  
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight)) {
      resultDiv.innerHTML = "Please enter valid height and weight.";
      return;
    } else if ((height <=0)|| (weight<=0)) {
      resultDiv.innerHTML = "Please enter valid height and weight.";
      return;
    } 
  
    var bmi = weight / ((height / 100) ** 2);
    var category = "";
  
    if (bmi < 18.5) {
      category = "Underweight,  Focus on a balanced diet that includes enough calories, protein, and nutrients to support healthy weight gain.";
      
    } else if (bmi < 25) {
      category = "Normal weight,  Continue to eat a well-balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats.";
    } else if (bmi < 30) {
      category = "Overweight,  Set realistic and achievable weight loss goals, and consider seeking support from a healthcare provider or a registered dietitian.";
    } else {
      category = "Obese,  Consult a healthcare professional for personalized guidance on weight management, as obesity can increase the risk of various health conditions.";
    }

   
  
    resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
    if(category =" underweight"){
      
    }
  }
 
