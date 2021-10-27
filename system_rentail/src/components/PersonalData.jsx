// import React, { Component, useState, useEffect } from "react";

// import "../styles/personaldata.sass";
// import axios from 'axios';
// import { ButtonEdit } from "./Buttons";

// class PersonalData extends Component {
//   constructor(props) { // so we can obtain the values
//     super(props);
//     this.state = {
//       nameP: "",
//       lastnameP: "",
//       emailP: "",
//       usernameP: "",
//       passwordP: "",
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   //  export  function PersonalData(props) {
//   //   state = {
//   //     nameP: '',
//   //     lastnameP:  '',
//   //     emailP:  '',
//   //     usernameP:  '',
//   //     passwordP:  ''
//   //   };

//   //   onSubmit = e => { // so we can type
//   //       e.preventDefault();
//   //       console.log(this.state);
//   //   }

//   //   onChange = e => this.setState ({ [e.target.name] : e.target.value}); // so we get to change the state without doing it 1 by 1 ...

//   handleInputChange(e) { // so we can actually type and change the state without having to do it manually
//     const target = e.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     const { nameP, lastnameP, emailP, usernameP, passwordP } = this.state; // kinda like the constructors we used to use on c#
//     return (
//       <div className="container-p">
         
//         <div className="form-p"><h2>Editar Perfil</h2></div>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-gp">
//             <label hname="nameP">Nombre</label>
//             <input
//               type="text"
//               name="nameP"
//               className="slabel"
//               placeholder="Name"
//               ref="nameP"
//               value={this.state.nameP}
//               onChange={this.handleInputChange}
//             />
//           </div>

//           <div className="form-gp">
//             <label lname="lastnameP">Apellido</label>
//             <input
//               type="text"
//               name="lastnameP"
//               className="slabel"
//               placeholder="Apellido"
//               ref="lastnameP"
//               value={this.state.lastnameP}
//               onChange={this.handleInputChange}
//             />
//           </div>

//           <div className="form-gp">
//             <label email="emailP">Correo</label>
//             <input
//               type="email"
//               name="emailP"
//               className="slabel"
//               placeholder="Correo"
//               ref="emailP"
//               value={this.state.emailP}
//               onChange={this.handleInputChange}
//             />
//           </div>

//           <div className="form-gp">
//             <label uname="usernameP">Username</label>
//             <input
//               type="text"
//               name="usernameP"
//               className="slabel"
//               placeholder="Username"
//               ref="usernameP"
//               value={this.state.usernameP}
//               onChange={this.handleInputChange}
//             />
//           </div>

//           <div className="form-gp">
//             <label pword="passwordP">Password</label>
//             <input
//               type="password"
//               name="passwordP"
//               className="slabel"
//               placeholder="Password"
//               ref="passwordP"
//               value={this.state.passwordP}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <ButtonEdit type="submit" />
//         </form>
//       </div>
//     );
//   }
// }
// export default PersonalData; // because its a class


import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import '../css/App.css';

const URL = "https://income-system.herokuapp.com/rental-requests";

export default function PersonalData(props) {
  const [user, setUser] = React.useState([]);
  // const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const getData = async (url) => {

      try{

        const response = await fetch(URL);
        const data = await response.json();
        setUser(data);

      } catch(error) {
        console.error(error);
      }
    };

    getData();
  }, []);
  const handleClickDelete = (e, title) => {
    const t = [...todos];
    const index = t.findIndex(e => e.title === title);
    if (-1 < index) t.splice(index, 1);

    setTodos(t);
  }

  const handleClickToggleDone = (e, title) => {
    const t = [...todos];
    const index = t.findIndex(e => e.title === title)
    if (-1 < index) t[index].done = !t[index].done;

    setTodos(t);
  }

  const addTask = (title) => {
    const exists = todos.find(e => title === e.title);

    if (exists) {
      alert(`La tarea "${title}" ya existe!`);
      return
    }

    setTodos(todos.concat([{ title, done: false }]));
  }

  const filtered = todos.filter(e => !e.done || e.done === show);

 
    const { nameP, lastnameP, emailP, usernameP, passwordP } = this.state; // kinda like the constructors we used to use on c#
    return (
      <div className="container-p">
         
        <div className="form-p"><h2>Editar Perfil</h2></div>
        <form onSubmit={this.onSubmit}>
          <div className="form-gp">
            <label hname="nameP">Nombre</label>
            <input
              type="text"
              name="nameP"
              className="slabel"
              placeholder="Name"
              ref="nameP"
              value={this.state.nameP}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-gp">
            <label lname="lastnameP">Apellido</label>
            <input
              type="text"
              name="lastnameP"
              className="slabel"
              placeholder="Apellido"
              ref="lastnameP"
              value={this.state.lastnameP}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-gp">
            <label email="emailP">Correo</label>
            <input
              type="email"
              name="emailP"
              className="slabel"
              placeholder="Correo"
              ref="emailP"
              value={this.state.emailP}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-gp">
            <label uname="usernameP">Username</label>
            <input
              type="text"
              name="usernameP"
              className="slabel"
              placeholder="Username"
              ref="usernameP"
              value={this.state.usernameP}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-gp">
            <label pword="passwordP">Password</label>
            <input
              type="password"
              name="passwordP"
              className="slabel"
              placeholder="Password"
              ref="passwordP"
              value={this.state.passwordP}
              onChange={this.handleInputChange}
            />
          </div>
          <ButtonEdit type="submit" />
        </form>
      </div>
    );
  }
export default PersonalData; 