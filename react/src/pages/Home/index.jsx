import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Advantages from "../../components/Advantages"

import styles from "./home.module.scss"

const HomePage = () => {
  return (
    <>
      <Header />

      <main className={styles.content}>
        <Hero />
        <Advantages />
      </main>

      <Footer />
    </>
  )
}

export default HomePage