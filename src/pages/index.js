import * as React from "react"
import Layout from '../components/Layout'
import HeroHome from '../components/HeroHome'

import { Link } from 'gatsby'
import Container from "../components/Container"

const IndexPage = () => {
  return (
    <Layout >
		<HeroHome />
		<Container>
		</Container>
		
    </Layout>
  )
}

export default IndexPage
