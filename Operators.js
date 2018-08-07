function main() {

    var meal_cost = parseFloat(readLine());
    var tip_percent = parseInt(readLine());
    var tax_percent = parseInt(readLine());

    tip_percent = meal_cost * (tip_percent / 100) ;
    tax_percent = meal_cost * (tax_percent/100);

    let totalCost = meal_cost  + tip_percent + tax_percent;

    console.log("The total meal cost is " + Math.round(totalCost) + " dollars.");
}
