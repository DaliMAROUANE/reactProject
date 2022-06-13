import image1 from "./imageInSrc.jpg.jpg"
import './App.css';

function App() {
  return (
    <>
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Le tir d'appuis Handball</h1>
      <br />
      return <img src={image1} alt ='myImage' />
      <br />
      <img src="/imageInPublic.jpg.jpeg" />
    </div>
    <video width={320} height={240} controls="">
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </>
  );
}

export default App;
