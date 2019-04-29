# Future Implementation Plans

## Team Composition Requirements:

The team should have at least one member who is already comfortable using np. The more experience with javascript and react the team has, the better. The team probably doesn’t need to be bigger than 4 or 5 members. Future work will largely involve simplifying the current solution and potentially supporting new features from sponsors.

## SECTION 1: Testing

In future implementations, testing component functionalities is desired. For example:

- Clicking Button -> register onClick() function was called. 
- Selecting Checkbox -> register onChange() function was called, and if possible test if checkbox value equals what is expected. 

Testing currently ensures that components are rendered. 

Future testing implementations should also ensure full test coverage of all components. Current test coverage includes the following:

Tempest:
- Button component
- Card component
- Checkbox component
- Text component

Template:
Components:
- About component
- Landing component
- Navigation component

Store:
- Counter


### TO CREATE TESTS:

Implementation of basic React component tests can be found currently in the Tempest directory of the project. An example being Button.test.tsx.

React component tests that handle router enabled components require an additional import than the previously mentioned - the react-router-dom’s BrowserRouter. An example of this type of component test can be found in the Template directory of the project, specifically the Navigation.test.tsx class.  . 

If the test covers a js object, or any class that does not implement React or any of the software’s higher level wrappers, a javascript unit test can be implemented. An example of this implementation in our software currently can be seen in Counter.test.ts. 

## SECTION 2: Documentation

Create fleshed-out user guides for each component in the tempest package. Add an example for how to use each component for users. 


## SECTION 3: Redux

Replace old react-redux paradigm with hooks. At the time of us creating the library, traditional react-redux was really our only responsible option, but it leaves something to be desired. The react-redux connect function is difficult to grok for Javascript beginners and overkill for this use case. However, at the time we were designing create-bizzell-app, it didn’t really have any real competition. It just released a hook API which, paired with something robodux, should make the negative impacts of redux and typescript on the problem much smaller.

As bonus points, all uses of JS classes should be replaced with React functional components. This will further simplify the tooling for JS beginners.

## SECTION 4: Store Boilerplate Reduction

4.1: Redux boilerplate in Typescript is a pain. It requires lots of steps and pieces. The store should be made to use something like robodux to automate the process in a more readable way. 

## SECTION 5: Component Lib

5.1: Consider replacing the current tempest lib with an open source component library. Having an in house solution is cool and it was what we used to learn React, but in the grand scheme of things it may be better to use an open source solution.

## SECTION 6: Miscellaneous 

6.1: Create a 404 page. There is a spot in the router to add a 404 page that displays for bad URLs. Probably a good little starter task.


----
### List of things to document here:

- 404 Page
- Kill react-redux and all class keywords with a stable hooks api
- Add Some sort of state slice generator
- Component-by-Component docs for tempest w/ examples
- Npm + Lerna guides

