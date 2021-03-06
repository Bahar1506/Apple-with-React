import Nav from './Component/Nav';
import Alert from './Component/Alert';
import Section_1 from './Component/Section_1';
import Section_2 from './Component/Section_2';
import Section_3 from "./Component/Section_3";
import Section_4 from "./Component/Section_4";
import Section_5 from "./Component/Section_5";
import Section_6 from "./Component/Section_6";
import Footer from "./Component/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css"></link>
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	  	<script src="js/bootstrap.js"></script> */}
      <Nav />
      <Alert />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Footer />
    </div>
  );
}

export default App;
