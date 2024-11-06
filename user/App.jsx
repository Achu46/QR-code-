import './App.css';
//import UserDetails from './formSamples/UserDetails';
//import Cart from './formSamples/Cart';
import Qrcode from './user/Qrcode';
import './user/Qrcode.css';
// import FunctionSample from './Components/FunctionSample';
// import UserCard from './user/UserCard';
//import ArraySample from './Components/ArraySample';
// import Oneofthecomponents from './Components/Oneofthecomponents';
// import Student from './Components/Student';
// import Children from './Components/Children';

function App() {
   
  // function click(){
  //       alert("Hey you came Online!!")
  // }
  // function click(){
  //   alert("button clicked")
  //   }
  // const items=[
  //   {id:1,name:"item 1"},
  //   {id:2,name:"item 2"},
  //   {id:3,name:"item 3"},
  // ]
  return (
    <div>
       {/* <Student name="Achu" age={21} isMarried={true}/>
      <Student name="Rahman" age={25} isMarried={false}/>
      <Student name="Harshad" age={22} isMarried={true}/>
      <Student age={30} isMarried={true}/> */}
      {/* <Children>
        <p>This is sample para 1</p>
        <p>This is sample para 2</p>
      </Children>  */}
      {/* <ArraySample items={items}/> */}
      {/* <Oneofthecomponents color="blue" /> */}
      {/* <FunctionSample click={click} /> */}
      {/* <UserCard mode={0} click={click}/> */}
      <Qrcode />
      {/* <Cart /> */}
      {/* <UserDetails /> */}
    </div>
  );
}

export default App;