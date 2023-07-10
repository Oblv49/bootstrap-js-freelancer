//this function need typo of work and hours requestd end return cost of work 
function calculateCost(workRequest, hoursRequest) {

    if (workRequest === "Beck-End 20.50€/h") cost = hoursRequest * 20.50;
    if (workRequest === "Front-End 15.30€/h") cost = hoursRequest * 15.30;
    if (workRequest === "Project Analisys 33.60€/h") cost = hoursRequest * 33.60;

    return parseInt(cost);
}


function addCoupon(coupons, coupon, cost) {

    if (coupons.includes(coupon)) {
        
        cost = cost - (cost / 100 * 25);
        
        // Search index of coupon in the array
        const index = coupons.indexOf(coupon);

        if (index !== -1) {
            //Remove coupon code 
            coupons.splice(index, 1);
        }
    }
    
    return cost;

}




