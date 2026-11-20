import { useState } from 'react'
import Header from './components/Header'

export default function Blog() {
  const [isOn, setIsOn] = useState(true)
  const [isTugging, setIsTugging] = useState(false)
  const [dust] = useState(() =>
    Array.from({ length: 20 }, () => ({
      left: `${15 + Math.random() * 70}%`,
      top: `${25 + Math.random() * 60}%`,
      animationDelay: `${-Math.random() * 6}s`,
    })),
  )

  function toggleLamp() {
    setIsOn((on) => !on)
    setIsTugging(true)
    window.setTimeout(() => setIsTugging(false), 400)
  }

  return (
    <>
      <Header />
      <main className={`blog-page${isOn ? ' on' : ''}`}>
        <div className="light"></div>

        <div className="lamp">
          <div className="cord"></div>
          <div className="socket"></div>

          <button
            type="button"
            className="bulb"
            aria-label={isOn ? 'Turn lamp off' : 'Turn lamp on'}
            aria-pressed={isOn}
            onClick={toggleLamp}
          >
            <div className="beam"></div>
            <div className="filament"></div>
          </button>

          <button
            type="button"
            className={`pull${isTugging ? ' tug' : ''}`}
            aria-label="Toggle lamp"
            onClick={toggleLamp}
          >
            <span className="string"></span>
            <span className="bead"></span>
          </button>
        </div>

        {dust.map((particle, index) => (
          <i className="dust" style={particle} key={index}></i>
        ))}
      </main>
    </>
  )
}
