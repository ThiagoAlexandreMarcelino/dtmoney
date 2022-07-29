import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import {App} from './App';
import { Model, Server } from 'miragejs'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

new Server({
  
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: "Desenvolvimento de Website",
          type: 'deposit',
          category: "dev",
          amount: 6000,
          createdAt: new Date('2022-07-29 19:00:00')
        },
        {
          id: 2,
          title: "Aluguel",
          type: 'withdraw',
          category: "casa",
          amount: 1000,
          createdAt: new Date('2022-07-30 12:00:00')
        }
      ]
    })
  },
  
  routes(){
    this.namespace = 'api';
    
    
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody ) 

      return schema.create('transaction', data)
    })
  }
})

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );