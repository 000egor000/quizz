import React from 'react'
import './StartOrEnd.scss'
const StartOrEnd = ({ start, containerAnswer, startFunc }) => {
  return start ? (
    <div className="startAnswer">
      <div>
        <span> Количество верных ответов: </span>
        <span> {containerAnswer} </span>
      </div>

      <button onClick={startFunc}>Начать заново?</button>
    </div>
  ) : (
    <div className="startAnswer">
      <span>Поиграем? </span>
      <button onClick={startFunc}>Конечно!</button>
    </div>
  )
}

export default StartOrEnd
