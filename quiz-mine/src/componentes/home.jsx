import React from 'react'
import './Home.css'
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
const Home = ({ onStartQuiz }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">QuizCraft</h1>
        <p className="home-subtitle">Teste seus conhecimentos no mundo Minecraft!</p>
        <div className="home-description">
          <p>Este quiz contém perguntas sobre:</p>
          <ul>
            <li>Minerais e mineração</li>
            <li>Criação de itens e poções</li>
            <li>Mobs e criaturas</li>
            <li>Biomas e estruturas</li>
          </ul>
        </div>
        <button className="start-button" onClick={onStartQuiz}>
          Iniciar Aventura
        </button>
      </div>
    </div>
  )
}

export default Home