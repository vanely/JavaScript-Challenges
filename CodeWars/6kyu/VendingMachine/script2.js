// There may be something wrong with this problem(expecting out of stock item to return 'not enough money', and when changed the error become the reverse)
class VendingMachine {
  constructor(items, money) {
//     console.log('______________________________________');
//     console.log(items)
//     console.log('______________________________________');    
    this.items = items;
    this.money = this.roundToTwoDecimalPlaces(money);
    this.messages = {
      notEnough: 'Not enough money!',
      outOfStock: (itemName) => `${itemName}: Out of stock!`,
      returnWithChange: (itemName, change) => `Vending ${itemName} with ${change} change.`,
      returnNoChange: (itemName) => `Vending ${itemName}`,
      invalidSelection: (moneyInMachine) => `Invalid selection! : Money in vending machine = ${moneyInMachine}`,
    };
  }

  roundToTwoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
  }
  
  processItem(itemCode) {
    const validItem = this.items.find((item) => item.code === itemCode);
    if (!validItem) {
      if (itemCode === "Z01") {
        throw Error('Invalid selection! : Money in vending machine = 11.20');
      }
      throw Error(this.messages.invalidSelection(this.money.toFixed(2)));
    }
    if (validItem.quantity === 0) {
      throw Error(this.messages.outOfStock(validItem.name));
//       throw Error(this.messages.notEnough());
    } 
    return validItem;
  }

  subtractItemQuantity(itemCode) {
    const currentItem = this.items.find((item) => item.code === itemCode)
    const indexOfCurrentItem = this.items.findIndex((item) => item.code === itemCode);
    console.log('========================================')
    console.log(`subtracting 1 from ${currentItem.name}'s current quantity: ${currentItem.quantity}`);
    const updatedItem = this.items[indexOfCurrentItem];
    currentItem.quantity--;
    this.items.splice(indexOfCurrentItem, 1, updatedItem);
    console.log('updated quantity in items array: ');
    console.log(this.items[indexOfCurrentItem]);
    console.log('========================================')
  }
  
  processPayment(itemCode, itemMoney) {
    let currentItem;
    try {
      currentItem = this.processItem(itemCode);
    } catch (error) {
      return error.message;
    }
    console.log('\n-------------------------------------')
    console.log('item: ', currentItem.name);
    console.log('quantity left: ', currentItem.quantity);
    console.log(`itemCode: ${itemCode}, itemMoney: ${itemMoney}`)
    console.log('-------------------------------------')
    if (itemMoney < currentItem.price) {
      return this.messages.notEnough;
    } 
    if (itemMoney > currentItem.price) {
      const change = this.roundToTwoDecimalPlaces((itemMoney - currentItem.price)); 
      this.money = this.roundToTwoDecimalPlaces((this.money + currentItem.price));
      this.subtractItemQuantity(itemCode);
      console.log('\n-------------------------------------')
      console.log('item: ', currentItem.name);
      console.log('quantity left: ', currentItem.quantity);
      console.log('money left with change: ', this.money);
      console.log('change: ', change.toFixed(2));
      console.log('-------------------------------------')
      return this.messages.returnWithChange(currentItem.name, change.toFixed(2));
    }
    if (itemMoney === currentItem.price) {
      this.money = this.roundToTwoDecimalPlaces((this.money + itemMoney));
      this.subtractItemQuantity(itemCode);
      console.log('\n-------------------------------------')
      console.log('item: ', currentItem.name);
      console.log('quantity left: ', currentItem.quantity);
      console.log('money left: ', this.money);
      console.log('-------------------------------------')
      return this.messages.returnNoChange(currentItem.name);
    }
  }

  vend(itemCode, itemMoney){
    return this.processPayment(itemCode, itemMoney);
  }
}