# Day3-GUVI

> ### Task 1:
>
> ---
>
> **Write code to compare to JSON Objects.**  
> [Source Code](comparingTwoJSON.js)  
> Explanation:
>
> First we declare the two JSON Objects to be compared as object1 and object2 respectively.  
> Now we send the two JSON Objects as parameters to the function _compareJSON_ which returns a boolean value.  
> To simplify the comparison process, first we get the keys of the two JSON Objects and sort them.  
> We run the objects through a series of checks to verify whether the two JSON Objects are identical or not.
>
> - Check 1: Validating whether the two JSON Objects have equal length of keys.
> - Check 2: Validating whether the two JSON Objects have the same identical keys.
> - Check 3: Validating whether the two JSON Objects have the same values.
>
> Finally, if all the validation criterias are met, the function will return a _true_ value else a _false_ value is returned.

---

> ### Task 2
>
> ---
>
> **To display all country flags from https://restcountries.com/v3.1/all** > [Source Code Directory](./country%20flags/)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> Now, in our JavaScript code, first we declare the api url as a **const** variable.
> Let's get into the Code flow:
>
> - An object is created for the _XMLHttpRequest_ class to make an API request.
> - An event listener is made for the page using the addEventListener method for the XMLHttpRequest object to fetch the response on page load.
> - Using the _open()_ method of the _XMLHttpRequest_ object we send a **GET** request to the API URL.
> - The request is sent by using the _send()_ method of the _XMLHttpRequest_ object.
>   Inside the listener, the response data is iterated using a for loop and the required flag data is printed to the console of the browser.

---

> ### Task 3
>
> ---
>
> **To display all country details from https://restcountries.com/v3.1/all** > [Source Code Directory](./country%20details/)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> Now, in our JavaScript code, first we declare the api url as a **const** variable.
> Let's get into the Code flow:
>
> - An object is created for the _XMLHttpRequest_ class to make an API request.
> - An event listener is made for the page using the addEventListener method for the XMLHttpRequest object to fetch the response on page load.
> - Using the _open()_ method of the _XMLHttpRequest_ object we send a **GET** request to the API URL.
> - The request is sent by using the _send()_ method of the _XMLHttpRequest_ object.
>   Inside the listener, the response data is iterated using a for loop and the required details like name, region, sub-region and population is printed to the console of the browser.
>
> ---
