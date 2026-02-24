1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll
Ans:-
1)getElementById("id") → selects one element by id
2)getElementsByClassName("class") → selects elements by class (returns live collection)
3)querySelector("selector") → selects first match using CSS selector
4)querySelectorAll("selector") → selects all matches (static list)
2. How to create & insert a new element?
Ans:-
Steps:
1)Create element:
const div = document.createElement("div");
2)Add text:
div.textContent = "Hello";
3)Insert into page:
document.body.appendChild(div);
3. What is Event Bubbling?
Ans:-
Event starts from the clicked element and moves up to parent elements.
If we click a button inside a div → button event runs first, then div.
4. What is Event Delegation? Why useful?
Ans:-
Event delegation = add one event listener to the parent instead of many children.
Why useful:
Better performance
Less code
Works for new elements added later
5. Difference: preventDefault() vs stopPropagation()?
Ans:-
1)preventDefault() → stops default browser action
example: stop a link from opening
2)stopPropagation() → stops event bubbling to parent
