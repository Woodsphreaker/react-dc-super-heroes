import React from 'react'

const HeroInfo = feature => {
  console.log(feature)
  return (
    <>
      {Object.entries(feature).map(([key, value]) => (
        <section key={key}>
          <h2>{key}</h2>
          {/* <HeroInfoList>
            <li>
              Titke
              <span>Value</span>
            </li>
          </HeroInfoList> */}
        </section>
      ))}
    </>
  )
}

export default HeroInfo
