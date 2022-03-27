import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            
            <div  className="row row-cols-1 row-cols-md-2 g-4 container my-5 mx-auto">
                <div clasName="col  ps-2">
                    <h3>How react works</h3>
                    <p>React firstly creates a virtural dom of an existing dom and compares the defferances of them  and only changes the defferances. you have to give a unique key for each element.So that you don't get any errors. A unique key is used for finding the changes.By using react you don't have to load the page multiple times for a specefiq page.</p>
                </div>
                <div className="col">
                    <h3>how useState works</h3>
                    <p>useState is like a Hook or like a connection that allows you to state variables in function components. for using it you have to add 2 values one for variable or you can say its a parameter and second one goes for a function. we have to add the parameter value using the function. if we see that something on the website will change than we have to use useState</p>
                </div>
            </div>
        </div>
    );
};

                   
export default Question;