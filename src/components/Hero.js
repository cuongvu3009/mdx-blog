import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
// ...GatsbyImageSharpFluid

const Hero = () => {
  const { person } = useStaticQuery(query)

  return (
    <header className="hero">
      <Image
        fluid={person.childImageSharp.fluid}
        className="hero-person"
      ></Image>
    </header>
  )
}

const query = graphql`
  {
    person: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Hero
