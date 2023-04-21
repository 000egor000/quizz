import './App.scss'
import { data } from './const'
import React, { useEffect, useState } from 'react'
import StartOrEnd from './components/StartOrEnd'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [objectQuestion, setObjectQuestion] = useState({})
  const [containerAnswer, setContainerAnswer] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!!data.length > 0) {
      const findObject = data.find(({ id }) => id === currentQuestion)
      setObjectQuestion(findObject ? findObject : {})
    }
  }, [currentQuestion, data])

  const handleClick = (status) => () => {
    if (currentQuestion <= data.length) {
      setCurrentQuestion(currentQuestion + 1)
      if (status) setContainerAnswer(containerAnswer + 1)
    } else {
      endFunc()
    }
  }
  const startFunc = () => {
    setStart(true)
    setContainerAnswer(0)
    setCurrentQuestion(1)
  }
  const endFunc = () => {
    setStart(false)
  }
  return (
    <div className="App">
      <div className="content">
        {objectQuestion.id ? (
          <React.Fragment>
            <div className="question">
              <span className="numberItem">{`Вопрос ${objectQuestion.id}/${data.length}`}</span>
              <span>{objectQuestion.question}</span>
            </div>
            <ul className="response">
              {objectQuestion.answer.length > 0 &&
                objectQuestion.answer.map(({ title, status }) => (
                  <li key={title} onClick={handleClick(status)}>
                    {title}
                  </li>
                ))}
            </ul>
          </React.Fragment>
        ) : (
          <StartOrEnd
            start={start}
            containerAnswer={containerAnswer}
            startFunc={startFunc}
          />
        )}
      </div>
    </div>
  )
}

export default App
