# tenfold-code-challenge
Tenfold Code Challenge

## Instructions:
Write a solution in Node.JS:

How your implementation works:

Your function will take two arguments, (prevArray, currArray), flattens the objects inside of prevArray and currArray to 1 level of

depth, and returns an HTML Table of the values.  The HTML table you return has a column header which is a superset of all keys in

all the objects in the currArray.  Any values that have changed from the prevArray to the currArray (ie field value changed or is a

new key altogether) should be bolded. In the case that the value has been removed altogether from the prevArray to the currArravy,

you will write out the key in bold DELETED.

## Rules:
1. The arrays are arbitrarily deep (see common questions for explanation of arbitrarily deep).
2. The currArray could have more or potentially even be in a different index order.  You cannot depend solely on array index for comparison.  However, you can assume that each object in the arrays will have an "_id" parameter.  Unless the currArray has no object with the matching "_id" parameter (for example if the whole row has changed).
3. Do not create global scope.  We have a test runner that will iterate on your function and run many fixtures through it.  If you create global scope for 1 individual diff between prevArray to currArray you could cause other tests to fail.

## Common Questions:
1. Can I use outside packages to solve (e.g. NPM, Bower)?  Yes.  You can use any packages you want to solve the solution.
2. Can I use google or outside resources (e.g. StackOverflow, GitHub)?  Yes.  Act as you would in your day job.
3. What does arbitrarily deep mean? The prevArray or currArray can have objects inside of objects at different levels of depth. You will not know how many levels of depth the objects could have, meaning your code must handle any kind of object.  Your solution  must account for this.  Do not assume the examples below are the only fixtures we will use to test your code.
