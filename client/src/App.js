import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import { from } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

/*const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
*/

function App() {
  return (

    
      

      <div className="App">
           
            <Header />
            <div className='container'>


              
            </div>

            <Footer />
        </div>
        
    
   
  );
}

export default App;
