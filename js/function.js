//this function need typo of work and hours requestd end return cost of work 
function calculateCost (workRequest, hoursRequest) {
    
    if(workRequest === "Beck-End") cost = hoursRequest * 20.50;
    if(workRequest === "Front-End") cost = hoursRequest * 15.30;
    if(workRequest === "Project Analisys") cost = hoursRequest * 33.60;

    return cost;
}


function addCoupon(coupons, coupon, cost) {
    if (coupons.includes(coupon)) {
      cost = cost - (cost / 100 * 25);
    }
    return cost;
  }