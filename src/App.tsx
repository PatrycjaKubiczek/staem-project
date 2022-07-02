import { Grid } from '@mui/material';
import './App.css'
import Main from './pages/Main'

function App() {

  return (
      <div className="App">
          <h1>Staem</h1>
          {/* image carousle */}

          <Grid container spacing={2}>
              <input type="text" placeholder="Search" />
              <p>Sort by:</p>
              <select>
                  <option value="">Price</option>
                  <option value="">Newest</option>
                  <option value="">Oldest</option>
                  <option value="">Most Liked</option>
                  <option value="">Most Commented</option>
              </select>
              <h2>New & Trending</h2>

              <h2>Popular</h2>
          </Grid>
          <Main />
      </div>
  );
}

export default App
