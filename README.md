# calculator
calculator project of Odin project.


Genereal idea of how things gonna work.

1. fist we have set 4 basic function that will perform basi math function.

eg. function add(a,b){
    return a+b
}....

2. Then we have to create a function that will perform on of the 4 funciton from above based on the oparator(+,-,*,/). and It will take 3 parameter(oparator,firstOparand,secondOparand)

3. now we have to store these 3(oparator,firstOparand,secondOparand) values in variable.
4. set up three empty variable that will store that value of those 3 parameters as per the need.

5. Now get hold of all the number btn and oparator btn and EqualTo btn.
6. add event listener to them..
7. Now listen each of the number buttons and return their value ad the argument of call back function.
8. Now set up the call back function with a parameter. argument = value of the number btn.

9. now append that number to the dis play. first get hold of the display then append. we have to use += here .


10. listen eacch button of the oparators like the number btn with a call back function where parameter = the value of the btn.

set up the call back function with a parameter.  now that parameter hold the value of the oparator btn.

when we click the oparator buttons we want some functions to perform like

we want to set the first oparand value only when we click any oparator.lets set the firstOparand = the appended number on the display.
            currentoparation = value of the parameter.
        
        also we want to reset the screen so that we can store the value what we gonna enter next in the secondoprand.


11. Listen the equal button and set a call back function that will perform all the calculation for the calculator to work.


