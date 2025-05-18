/* SHOPPING LIST TEST
 * Every day, you are sent to buy 5 items.
 * As you find them on the shelves, you add them to your smartphone,
 * along with their price, so you can make sure you have enough money.
 * The program should display the list of items and their prices
 * The program should tell you how much the total cost is.
 * Use stubs to test as you go. There are no global variables, so pay
 * CLOSE attention to the arguments and parameters in main()!!!!!!
 */

/* MAIN
 * 1. Create an array from a string list
 * 2. Create a 2D array from a 1D array to include number of items and price.
 * 3. Calculate the total of the prices of all the items. 
 * 4. Display the list and the total
 */


/* 1. Function makeList(items)
 * Populate an array from a list of items, and call it itemsArray.
 * Use a method that can which can SPLIT the list string into array elements. 
 * Console.log the itemsArray before you return it using TOSTRING 
 * Total lines in my code: 5
 * @param: list of items, separated by commas
 * @return: itemsArray[]
 */


/* 2. Function addPrices(shoppingList)
 * Use a string called prices (which you will SPLIT) to create a 1D priceList array
 * from a 1D array passed as an argument (shoppingList)
 * Create an array called pricesArray where you will store items and prices. 
 * Create an array called itemPrice, leave it empty before the FOR LOOP. 
 * Use a FOR LOOP based on the length of shoppingList[] 
 * Inside the loop, create a sub-array called itemPrice (because you want it empty each time)
 * Push the shoppingList item into that itemPrice subArray
 * Push the pricesArray item with the same index into that itemPrice subArray
 * After you create each subarray, PUSH it to the pricesArray you will return. 
 * You might want to console.log this subArray each time. 
 * Total lines in my code: 12
 * @param: shopArray
 * @return: pricesArray
 */

/* 3. Function calculateTotal(pricesArray)
 * Create a variable called total, set to 0.
 * Create a variable called message, with first line as "Items to buy:" plus a LINE BREAK
 * Use a FOR LOOP to add each new message line with the item name, $, the price and a line break.
 * PARSE the price as a FLOAT, and add it to the total. 
 * After the loop is done, add "Total = " and the total to the message
 * No need to console.log the message - you will be returning and alerting it. 
 * Total lines in my code: 11
 * Return the message. 
 * @param = pricesArray
 * @return = message
 */ 