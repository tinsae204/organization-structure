import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './Pages/Landing';
import CreateAcc from './Pages/CreateAcc';
import Dashboard from './Organization/Dashboard'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00695C'
    }
  },
  typography: {
    fontFamily: 'STIX Two Text',
    fontWeightBold: 700,
    fontWeightMedium:600,
    fontWeightRegular: 500,
    fontWeightLight: 400 
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>

          <Route path="/signup">
            <CreateAcc/>
          </Route>
            <Dashboard/>
          <Route path="/dashboard">

          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
