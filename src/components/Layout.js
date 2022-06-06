import * as React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import "./layoutStyles.css"
import { Content, Footer } from "../styles/components"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <Content>
        <main>{children}</main>
        <Footer>
          By Sofia Inchausti |
          <a href='https://www.platzy.com'>Platzi course</a>
        </Footer>
        </Content> 
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
