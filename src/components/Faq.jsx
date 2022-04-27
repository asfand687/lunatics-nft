import React from 'react'

const Faq = ({ index, toggleFAQ, faq }) => {
  return (
    <div
      className={`${faq.open ? "max-h-fit opacity-100 transition-all ease-out" : "max-h-0 opacity-0"}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.title}
      </div>
      <div className="faq-answer">
        {faq.description}
      </div>
    </div>
  )
}

export default Faq