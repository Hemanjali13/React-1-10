import Navbar from  './navbar';
import Home from './Home';
import Outputtinglist from './outputtinglist';
//Dynamic values in Template-5
function App() {
  const title ='Welcome to the new blog';
  const likes =50;
  const link= 'https://www.google.com';
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Outputtinglist />
     <div className="content">
      <h1>{ title }</h1>
      <p>Liked { likes } times</p>
      <p> { 10 }</p>
      <p> { 'hello, hema' }</p>
      <p>[1,2,3,4,5]</p>
      <p>{Math.random() * 10}</p>
      <a href={link}>Google Site</a>
     </div>
      </div>
  );
}
export default App;
