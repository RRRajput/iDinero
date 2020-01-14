What is iDinero all about? It allows you to keep track of all loans and debts between you and your friends. if you go out with your friends and you share a tab, with iDinero, it’s going to be easy to split it up between your friends and know who has paid the tab and who owes you the remaining money. 

The website is completely designed using Vue js. The framework allows us to flexibly treat each independent site as a component with its own css and html file. We also incorporated router links to give a better user experience and to navigate between all components.

The website is appropriately designed for an easy use. When a user logs in, the main page is displayed indicating the total amount of money you owe and you owned by others. The main navigation bar allows you either see your friends or your groups. For each user you have a set of other sites to pay or ask payment from your friends. The website is very friendly and we hope everyone can use it.

We tried to include all the components we discussed in the last lecture. We added a google maps, an optimized search engine and a chart to dynamically visualize the same data in a graph. 

Regarding to the workload Rehan Rajput was the one who motivated us to use Vue js. He showed an interest to solve the problem concerning to track all debts. In general he was responsible for all the dense work with javascript implementation and to sketch the basic structure of the website. Moreover, we realized that during the implementation, it was not possible to do the simplified debt resolution as mentioned during the first presentation because it required complicated data structures and computations that were not possible to do with javascript. So, we work with the assumption that the data would be sent to a back end server which would then provide the relevant solution.

For storage, we used vue variables. Since, this is a single page application, the stored variables could be accessed at every stage with ease. However, when the amount of data increases - with possibly more users - the data would be stored in the server - which has not been implemented here.

When we tried to make the website visually attractive for visitors, we found the layout of objects, the combination of colors and so on is a topic which requires too much time to investigate. That’s why we decided to work with existing frameworks.

We found that Vue js does not integrate very well with others css frameworks or at least we did not have the level of expertise to accomplish it very quickly. So in that sense, Camilo Romero and Daniel Homs tried to integrate first Bootstrap but they found out there was a version for Vue js specifically and after to get many errors they decided to incorporated Bluma which works very well with Vue js. The main page and all the styles in text, buttons, input texts and so on was restructured using Bulma.

The semantics were added using the vue-meta library. The majority of the semantics were borrowed from the web applications similar to our own (e.g. TriCount).

Developers:
-Daniel Homs
-Camilo Romero
-Rehan Razzaque Rajput
