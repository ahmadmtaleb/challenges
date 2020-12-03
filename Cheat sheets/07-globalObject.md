# Global Object 
The **global object** is a regular JavaScript object that serves a very important purpose: the properties of this object are the globally defined identifiers that are available to a JavaScript program. 
When the JavaScript interpreter starts (or whenever a web browser loads a new page), it creates a new global object and gives it an initial set of properties that define: 
- Global constants like undefined, Infinity, and NaN
- Global functions like isNaN(), parseInt(), and eval()
- Constructor functions like Date(), RegExp(), String(), Object(), and Array()
- Global objects like Math and JSON 

- in Node, the global object has a property named **global** whose value is the global object itself 
- in web browsers, the **Window Object** serves as the global object for all JavaScript code contained in the browser window it represents
- This global Window object has a self-referential **window** property that can be used to refer to the **global object**
- The Window object defines the core global properties, but it also defines quite a few other globals that are specific to web browsers and client-side JavaScript.
- ES2020 finally defines **globalThis** as the standard way to refer to the global object in any context.



**What is a web worker??**
