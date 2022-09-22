import logo from './logo.svg';
import './App.css';

const Header = () =>{
  return <h2>Hello World</h2>
}


const Field = () => {
  const holder = "Enter here"
  const styledField ={
    width: "300px"
  };
  return <input placeholder={holder} type={"text"} style={styledField}/>
}

const Btn = () =>{
  const text = "Log in"

  const logged = false;
  return <button>{logged ? "Enter" : text}</button>
}
function App() {
  return (
    <div className='App'>
      <Header/>
      <Field></Field>
      <Btn />
    </div>
  );
}

export default App;
