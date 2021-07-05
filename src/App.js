import './App.css';
import { connect } from 'react-redux'
function App(props) {
  console.log(props)
  return (
    <div className="App">
      {props.n}
      <button onClick={props.add1}>+1</button>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    n: state.n
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add1: ()=> dispatch({type: 'add', payload: 1})
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)