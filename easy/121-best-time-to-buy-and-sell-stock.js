var maxProfit = function(prices) {
    let bestProfit = 0;
    let cheapest = Infinity;
    for(let i = 0; i < prices.length; i++){
        cheapest = Math.min(cheapest, prices[i]);
        bestProfit = Math.max(bestProfit, prices[i] - cheapest);
    }
    return bestProfit;
};
