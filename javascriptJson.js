let data;
let expenditureArray = [];
let percentageArray = [];
let colorArray = [];

function drawChart(){
    data = document.getElementById('json-data').value;
    percentageArray = createPercentageArray();
    colorArray = createColorArray();
    populateArray(data);//convert json data into array of objects
    drawPie();

function populateArray(jsonData){
    let expenseArray = JSON.parse(jsonData);
    for(i=0; i < expenseArray.expenditure.length; i++){
        let expense = expenseArray.expenditure[i];
        
    }

}
}