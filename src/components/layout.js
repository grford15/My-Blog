import React from "react"
import { Link } from "gatsby"
import HeaderImg from './header-img'

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(1)
          }}>
          <HeaderImg />
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
          
            {title}
          </Link>
        </h1>
        </div>
      )
    } else {
      header = (
        
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main
          style={{
            marginBottom: rhythm(1.5)
          }}>
        {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built by me with
          {` `}
          <a href="https://www.gatsbyjs.org"
            style={{
              backgroundImage: 'unset'
            }}>
          Gatsby
          </a>
          {` `}
          See more of my work <a href="https://cranky-morse-72e50d.netlify.com/"
            style={{
              backgroundImage: 'unset'
            }}>
           here
          </a>
        </footer>
      </div>
    )
  }
}


export default Layout
