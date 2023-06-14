import { useState } from "react";
const home = () => {
//  let name = 'Anjali';
const [name, setName] = useState('Anjali');
const [age, setAge] = useState(25);
    const handleClick = () => {
       setName('minni');
       setAge(30);
    }
    
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>    
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default home;
//Click Events-07 & Use State-08