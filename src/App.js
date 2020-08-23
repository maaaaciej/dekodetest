import React from "react";

import Header from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";
import PostContainer from "./pages/PostContainer/postcontainer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <PostContainer />
      <Footer />
    </div>
  );
}

export default App;
