import React from "react";
import List from "./List";
class App extends React.Component
{
    render(){
        return(
            <div className="row mt-5 mr-0">
            <div className="moviescontainer col-md-11 mx-auto">
              <List />
            </div>
          </div>
        )
    }
}
export default App;