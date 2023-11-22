import React from 'react'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Site from '../components/Site'
import Port from '../components/Port'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Footer from '../components/Footer'

const HomeView = () => {
    return (
        <>
            <Skip />
            <Header />
            <Main>
                <Intro />
                <Skill />
                <Site />
                <Port />
            </Main>
            <Contact />
            <Footer />
        </>
    )
}

export default HomeView