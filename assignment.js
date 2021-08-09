// /////////////////////////////////////////////////////////////////
///////////////////////////////// 1 == Seer To Mon ///////////////////////////////////////////
function seerToMon(seer) {
  // 1 seer = 1/40 mon
  let mon = seer / 40;
  return mon;
}
let totalMon = seerToMon(10);
console.log(totalMon);
// Ans:0.25
// /////////////////////////////////////////////////////////////////
// ///////////////////////////////// 2 == Total Sales ///////////////////////////////////////////
function totalSales(tshirtQuantity, pantQuantity, shoeQuantity) {
  let perTshirtPrice = 100;
  let perPantPrice = 200;
  let perShoePrice = 500;
  ////
  let perTshirtPriceWithQuantity = perTshirtPrice * tshirtQuantity;
  let perPantPriceWithQuantity = perPantPrice * pantQuantity;
  let perShoePriceWithQuantity = perShoePrice * shoeQuantity;
  ///
  let totalSalesPrice =
    perTshirtPriceWithQuantity +
    perPantPriceWithQuantity +
    perShoePriceWithQuantity;
  return totalSalesPrice;
}
let total = totalSales(3, 4, 2);
console.log(total);
// Ans:2100
/////////////////////////////////////////////////////////////////
///////////////////////////////// 3 == Delivery Cost ///////////////////////////////////////////
function deliveryCost(howMuchTshirt) {
  let perTshirtCostLess100 = 100;
  let perTshirtCost101to200 = 80;
  let perTshirtCostup201 = 50;
  ///
  if (howMuchTshirt < 0) {
    return "Please give a valid number greater than 0";
  }
  if (howMuchTshirt <= 100) {
    let firstHundred = howMuchTshirt * perTshirtCostLess100;
    return firstHundred;
  } else if (howMuchTshirt > 100 && howMuchTshirt <= 200) {
    firstHundred = perTshirtCostLess100 * 100;
    let restTshirt = howMuchTshirt - 100;
    let secondHundred = restTshirt * perTshirtCost101to200;
    let firstSecondHundred = firstHundred + secondHundred;
    return firstSecondHundred;
  } else if (howMuchTshirt > 200) {
    firstHundred = perTshirtCostLess100 * 100;
    secondHundred = perTshirtCost101to200 * 100;
    restTshirtt = howMuchTshirt - 200;
    let thirdHundred = restTshirtt * perTshirtCostup201;
    let totalHundrer = firstHundred + secondHundred + thirdHundred;
    return totalHundrer;
  } else if (typeof howMuchTshirt != "number") {
    return "Please give a valid number";
  }
}
let totalShirt = deliveryCost(-10);
console.log(totalShirt);
// Ans:Please give a valid number greater than 0
/////////////////////////////////////////////////////////////////
///////////////////////////////// 4 == Perfect Friend ///////////////////////////////////////////
let pFriends = ["maaz", "muaz", "arif", "jinan", "sumaiya", "sahera"];
function perfectFriend(pFriends) {
  for (let i = 0; i < pFriends.length; i++) {
    let pFriendsName = pFriends[i];
    if (pFriendsName.length == 5) {
      return pFriendsName;
    }
  }
}
let friend = perfectFriend(pFriends);
console.log(friend);
// Ans: jinan
/////////////////////////////////////////////////////////////////
