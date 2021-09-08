import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';

import reportWebVitals from './reportWebVitals';
function react() {
  let questions = (
    <div>
      <h2 class="bg-light text-dark text-center">Assignment 2</h2>
     <strong class="alert alert-primary">What is react ?</strong>

<p class="alert alert-success">Answer : React is a free open source JavaScript library created by Facebook. React is mostely used in development
    of single page or mobile applications </p>

    <strong class="alert alert-primary">spa vs mpa</strong>
    <p class="alert alert-success">SPA : stands for single page application . SP Applications are faster because The page doesn’t reload entirely
        whenever the user requests a new piece of data.  .SPA s falls behind in SCO optimization compaired to MPAs 
    MPA : stands for multipage application nar emore staple applications but they are slower then SP Applications because it must reload the page from scratch when ever u want to go to another page or get new data
    MPA’s, front-end and back-end are more interdependent. All coding is usually  under one project.MPA s gets higher ranking on google seo </p>
    
    <strong class="alert alert-primary">React vs Angular</strong>
    <p class="alert alert-success">angular is a complete framework for development of dynamic and complete web apps with backend
        where as react is a javascript library use to build ui designs for a complete webb ap or any other app development in react we have to attack back-end to it
        angular is based on modal view controller where as react is is based on virtual dom. react is baised on javascript and angular is baised on typescript
    </p>
   
    <strong class="alert alert-primary">library vs Framework</strong>
    <p class="alert alert-success">
        library vs Framework are reusable pre written code by someone else that is used to solve common problems
        if u are using an library u are incharege u can call any it any time and use it as u see fit .
        if ur are using a framework , framwork is incharge and u have to follow through every rule and path pre defined in it
        u can build a complete application in a framework  . if u are using  libraries u have to use multiple of them to build a complete application 
        
    </p>
 
    <strong class="alert alert-primary">Dom vs Virtual dom</strong>
    <p class="alert alert-success"> <strong>DOM</strong> is a standard object model and programming interface for HTML it contains all the properties methods andevents of html elements.
        HTML DOM is a standard for how to get, change, add, or delete HTML elements.if u make achange in ur html u have to refresh ur page to 
        see the change.
        
        <strong>virtual DOM</strong>   (VDOM) is a programming concept where an ideal or virtual representation of a UI is kept in memory and synced with the real DOM. it only changes the component
        which is changed or altered without reloading or refreshing whole application
        
    </p>
 
    
    <strong class="alert alert-primary"> Oneway Data Binding vs Two way</strong>
    <p class="alert alert-success"><strong>One-way data binding</strong> will bind the data from the component to the view (DOM) or from view to the component. One-way data binding is unidirectional. You can only bind the data from component to the view or from view to the component.
    <strong>Two way Data Binding</strong>Two-way data binding refers to sharing data between a component class and its template. If you change data in one place, it will automatically reflate at the other end.</p>
    </div>
  );




  ReactDOM.render(questions, document.getElementById('root'));
}
react()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
