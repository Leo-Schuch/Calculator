
import './App.css';
import React, { useState, } from 'react';
import InputMask from "react-input-mask"

function App() {
  const [form, setForm] = useState("")
  const [result, setResult] = useState("")

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  function handleSubmit(event) {
    event.preventDefault()
    if ((!form.altura && !form.peso) || !form.peso || !form.altura) {
      setResult("Os campos em branco são obrigatórios.")
    } else {
      const imc = form.peso / (form.altura * form.altura);
      const imcArredondado=imc.toFixed(2)
      setResult("o seu IMC é " + imcArredondado )
      if
        (imc >= 25 && imc <= 30) {
      setResult("sobrepeso, valor do imc " + imcArredondado)
      }
      if
        (imc >= 30 && imc <= 34.9)
      setResult("obesidade grau 1, valor do imc " + imcArredondado)
      if
        (imc >= 35 && imc <= 39.9)
      setResult("obesidade grau 2, valor do imc " + imcArredondado)
    
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form">
          <div className="container-input">
            <div className="children-container-input">
              <label>Quanto você mede</label>
              <InputMask placeholder='Digite a sua altura'
                mask="9.99"
                onChange={handleChange}
                name="altura" />
            </div>
            <div className="children-container-input">
              <label>Quanto você pesa</label>
              <InputMask
                placeholder='Digite o seu peso'
                onChange={handleChange}
                name="peso" />
            </div>
          </div>
          <div className='container-button'>
            <button type="submit">CALCULAR</button>
            <div>
              <p className="result-button">
                resultado:{result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
