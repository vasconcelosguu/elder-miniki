import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import Weapons from './components/Weapons';
import Bosses from './components/Bosses';
import Classes from './components/Classes';
import Items from './components/Items';

const App = () => {
  const [weapons, setWeapons] = useState([]);
  const [bosses, setBosses] = useState([]);
  const [classes, setClasses] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weaponsResponse = await axios.get('https://eldenring.fanapis.com/api/weapons?limit=2');
        const bossesResponse = await axios.get('https://eldenring.fanapis.com/api/bosses?limit=2');
        const classesResponse = await axios.get('https://eldenring.fanapis.com/api/classes?limit=2');
        const itemsResponse = await axios.get('https://eldenring.fanapis.com/api/items?limit=2');

        setWeapons(weaponsResponse.data.data);
        setBosses(bossesResponse.data.data);
        setClasses(classesResponse.data.data);
        setItems(itemsResponse.data.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <h1>Meu Aplicativo Elden Ring</h1>
        <nav>
          <ul>
            <li>
              <Link to="/weapons">Armas</Link>
            </li>
            <li>
              <Link to="/bosses">Bosses</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/items">Itens</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/weapons">
            <Weapons weapons={weapons} />
          </Route>
          <Route path="/bosses">
            <Bosses bosses={bosses} />
          </Route>
          <Route path="/classes">
            <Classes classes={classes} />
          </Route>
          <Route path="/items">
            <Items items={items} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
