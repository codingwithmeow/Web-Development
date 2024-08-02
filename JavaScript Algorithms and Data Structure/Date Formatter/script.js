const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case 'yyyy-mm-dd':
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
            break;

        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break

        default:
            currentDateParagraph.textContent = formattedDate;

    }
});

/*
 A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.
 
 const currentDate = new Date();
 console.log(currentDate);

 The split() method is used to divide a string into substrings based on a specified separator. It then returns these substrings as elements of an array.

 Here is an example of taking the words "Hello World" and returning an array of one element:

 Example Code
  const greeting = "Hello World";
  greeting.split(); // ["Hello World"]

  The split method takes in a parameter known as a separator. The separator is used to tell the computer where each split should occur.

  Here is an example of using an empty string as a separator:

  Example Code
    // returns ["h", "e", "l", "l", "o"]
    "hello".split(""); 
    Other examples of separators can include a space " ", or a hyphen "-". If you don't provide a separator, the method will return an array with the original string as the only element.
To reverse an array of elements, you can use the reverse method. This method reverses the order of the elements in the array in place. The first element becomes the last, and the last element becomes the first.

Here is an example of using the reverse method:

Example Code
// returns [5, 4, 3, 2, 1]
[1, 2, 3, 4, 5].reverse(); 

In the previous project, you learned how to work with the join method. This method takes an array of elements and joins them into a string. Similar to the split method, the join method also takes an optional separator. If you don't provide a separator, the default separator is a comma.

Here is an example of using the join method:

Example Code
// returns "1-2-3-4-5"
[1, 2, 3, 4, 5].join("-");


*/