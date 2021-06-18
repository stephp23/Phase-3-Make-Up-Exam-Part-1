// Phase-3-Make-Up-Exam-Part-1

// Data Structures and Algorithms: 

// 1) You are given a book as input. Write a function that takes all the words in the book as an input and returns the frequency of each word. Consider how you will take in the input, what data structures to use, and edge cases other than the given example. Test your function with 3 different inputs other than the example, and show that it works for the edge cases as well.

// Example:

// Input: “Is your favorite car brand BMW? Mine is Toyota.” 

// Output:
// is->2
// your->1
// favorite->1
// car->1
// brand->1
// BMW->1
// mine->1
// toyota->1

function bookWordCount(book) {
  let book_words_uppercase = book.toUpperCase()
  let book_words_count_results = {};
  let book_words_array = book_words_uppercase.split(' ')

  // check for empty string/book
  if (book_words_uppercase.length === 0) {
    return {};
  }

  for (let i = 0; i < book_words_array.length; i++) {
    let book_words = book_words_array[i];
    if (book_words_count_results[book_words] === undefined) {
      book_words_count_results[book_words] = 1;
    }
    else {
      book_words_count_results[book_words] += 1;
    }
  }

  return book_words_count_results;
  

  // // check for empty string/book
  // if (book_words_uppercase.length === 0) {
  //   return {};
  // }
}

// bookWordCount(“Is your favorite car brand BMW? Mine is Toyota.”)


// 2) You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 

// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n. 

// Remember to consider all edge cases to receive full credit.


function(nums1, m, nums2, n) {
  while (n) {
     if (nums1[m - 1] > nums2[n - 1]) {
       nums1[m + n - 1] = nums1[--m];  
     } else {
       nums1[m + n - 1] = nums2[--n];   
     }
   }
   return nums1;
};

// console.log(nums1)

// SQL Query: 

//3) Write a SQL query to display the order number followed by order date and the purchase amount for each order which will be delivered by the salesman who is holding the ID 5001.

SELECT ord_no, ord_date, purch_amt

FROM orders

WHERE salesman_id = 5001;

// 4) Write a SQL statement to prepare a list with salesman name, customer name and their cities for the salesmen and customer who belongs to the same city.

SELECT salesman.name AS "salesman",
customer.cust_name AS "customer", customer.city AS "city"
FROM salesman,customer 
WHERE salesman.city=customer.city;

// 5) Write a SQL query to show the winners of a 'Physiology' prize in an early year before 1971 together with winners of a 'Peace' prize in a later year on or after 1974.

// **
// I could not find the name of the table given, so I gave it a placeholder name of nobel_prizes


SELECT * FROM nobel_prizes
WHERE(subject = 'Physiology' AND year < 1971) UNION
  (SELECT * FROM nobel_prizes 
    WHERE(subject = 'Peace' AND year >= 1974));





