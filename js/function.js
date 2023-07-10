//This function need typo of work and hours requestd end return cost of work 
function calculateCost(workRequest, hoursRequest) {

    if (workRequest === "Beck-End 20.50€/h") cost = hoursRequest * 20.50;
    if (workRequest === "Front-End 15.30€/h") cost = hoursRequest * 15.30;
    if (workRequest === "Project Analisys 33.60€/h") cost = hoursRequest * 33.60;

    return parseInt(cost);
}


//This function checks if the entered code is valid, if it has been used, and if it is invalid. It calculates the cost if the code is valid and unused.
function applyDiscountCode(couponsArray, usedCoupon, input, cost, discountCodeContainer) {
    
    //Check if the discount code field is empty
    if (input === "") {
        return cost;
    }

    //Check if the code is valid
    if (couponsArray.includes(input)) {
        
        //Check if the code has been used.
        if (usedCoupon.includes(input)) {
            discountCodeContainer.classList.add("bg-danger");
            return cost;
        } else {
            //Calculate the cost with the discount applied
            usedCoupon.push(input); 
            discountCodeContainer.classList.add("bg-success");
            cost = cost - (cost / 100 * 25);
            return cost;
        }
    } else {
        //Discount code is invalid
        discountCodeContainer.classList.add("bg-danger");
        return cost;
    }
}
