# Take home test by Maciej Ostrowski for Dekode

<hr>

### Introduction

This test was much more on the fun side than many others, and I had a really good time spending my weekend doing it. I had my fair share of hair-pulling and rewarding moments, as well as an opportunity to put a lot of my knowledge into practice. Most importantly, this test was an opportunity for me to learn a lot of things I might not have thought about if it wasn't for this test-case.

### A few words about React

The test includes three questions regarding React, which are topics that I have thought about many times, and that are relevant in any development process where React is considered.

The three questions go as follows:

1. What are the benefits of using React?
2. Are there any drawbacks of using React?
   a. How could those drawbacks be improved?

The benefits of using React are many. Listing all of the obvious ones would take more time than necessary, so I choose to instead focus on the thing that make me appreciate React more for each line of JSX that i write. There are however drawbacks to any technology out there, which I will also discuss here.

#### Benefits

The thing that has always drawn me towards React is the size of the community around it. The sizeable popularity of the library makes finding learning resources, as well as getting help easy, in addition to all of the other useful libraries made for it.

Another aspect of React that I appreciate a lot is it's modularity. Writing reusable components has it's own list of benefits, but I like this aspect of React the most because of how efficient it is when developing an application. Just by writing two lines of code, I can render all of the elements from an API, without having to think about how this api can grow or shrink in the future.

The last benefit I want to touch upon, in fear of making this too long, is the fast performance, combined with only reloading changes in components, instead of the whole page. Sacrificing some time on initial load for instant responses later is in many cases a good tradeoff to make.

#### Drawbacks & Remedies

The last of the benefits I mentioned, can also be a big drawback when using React. React, being a SPA, can have a much slower initial load compared to traditional websites, as it has to execute all of the JS before hydrating the DOM. This can be improved upon in several different ways, for instance code-splitting and lazy-loading, where the code is split based on whatever fits the application, and chunks are loaded only when they are needed.

Another solution to the slow initial load, as well as another problem I'll discuss soon is to render the application on the server side, and sending the hydrated webpage to the client. This lets us do all of the heavy lifting beforehand, saving previous render-time. The other problem server side rendering solves is the issue of SEO in React, where crawlers might have trouble with indexing the app, if they take snapshots before the code has been executed, resulting in a snapshot only showing an empty div.

Thanks to the beforementioned React ecosystem, there are many libriaries that help achieve server side rendering easily, most notably Next and Gatsby.

The last disadvantage I want to touch upon relates to React's modularity, and some may not see it as a drawback at all. The modularity of React components can in some cases lead to worse readability, where a component, even though it only does one thing, and does it well, might be too small to understand clearly. This is easily solvable with good documentation, as well as communication within the development team.

## The application

### Set up instructions

To run and test the application, start by installing all of the dependencies with <b>npm install</b>.

- Use <b>npm start</b> to test the application in a live browser, hosted on localhost (Port 3000 by default).

- Use <b>npm test</b> to run the tests written for the application.

The application uses the following dependencies:

- Sass

### The philosophy behind it all

There are three main areas I focus on in any given project. Modularity, readability as well as scalability are three concepts that ensure an efficient development process, easy maintenance as well as the least ammount of headache for other people involved in the development process.

#### Modularity

I try to stay as much away from hard-coding as possible. The components are built to be reused anywhere, anytime, hence all of the information being passed as props, rather than being hard-coded in. I pulled all of the information in the design document out into it's own file (src/assets/data/data.static.js), and pass into the components as needed. This is so that these components can be reused anywhere, as needed.

Another way to achieve modularity could have been to write more higher order components, that could act as wrappers for for instance paragraphs.m

#### Readability

My focus on readability in this application has been to write my components as small as possible, while still big enough that each component makes sense. The components are made to be responsible for doing one thing well, and have descriptive comments where it may not be obvious what the next line of code does.

In a bigger application, with more functionality, I would have further separated the logic from the UI, but as this application only needs a couple lines of logic, mostly for conditional rendering, it was not necessary here.

#### Scalability

Scalability is another important factor in any application, no matter how big or small it may get. In this test-case, scalability went hand-in-hand with the two other factors above, where components were built dynamic, as to be ready to receive any given data, as well as readable, so that more people can work on the application, without spending too much time on understanding the codebase.

Again, in another project, with more logic involved, this would have been a bigger focus. Things I would focus more on in a bigger project would be to make more thought out decisions based on both efficiency as well as accomodating for scaling the amount of data and traffic. This could be things as for example code splitting or considering server side rendering for performance, or more thought out choices of data structures and algorithms for eficciency.

### Testing

viktigheten - etter samtale

### Component Overview

The app consists of components that are each responsible for doing one thing well, as well as one larger container-component, the PostContainer, that serves as a canvas, for the other components to be arranged onto. My focus was to make each component independent, so that they can work in any setting.

There are several different ui-components that could have been implemented with the use of other ui libraries, but as I dont't know what your convention on using these are, or if there are any you prefer over others, I tried to implement these on my own as to best of my abilities.

The overview below briefly discusses each component, as well as mentions any given difficulties I had in developing them.

#### Button

#### Card

#### CardContainer

#### Footer

#### Header

#### ImageContainer

#### ProfileCard

#### SiteMap

#### TitleContainer

#### Post Container

### Personal Areas of Improvement

css animations og css generelt
enda bedre planlegging
small commits

### Summary
