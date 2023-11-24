import phoneOne from "../../assets/img/phone-01.jpg"
import phoneTwo from "../../assets/img/phone-02.jpg"
import phoneThree from "../../assets/img/phone-03.jpg"

import styles from "./advantages.module.scss"

const Vantagens = () => {
  return (
    <div className={styles.advantages}>
      <h1>Vantagens</h1>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <img src={phoneOne} alt="Integração simplificada" />
          <div className={styles.inner}>
            <h1>01</h1>
            <h3>Integração</h3>
            <p>Oferecemos integração simplificada com dispositivos wearables, gadgets de medição ambiental e HealthKit da Apple, garantindo uma coleta contínua e harmoniosa de dados para uma experiência de usuário sem interrupções.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={phoneTwo} alt="Personalização holística" />
          <div className={styles.inner}>
            <h1>02</h1>
            <h3>Personalização holística</h3>
            <p>Oferecemos uma visão completa e personalizada da saúde, integrando dados físicos, ambientais e emocionais para recomendações precisas e adaptadas a cada usuário.</p>
          </div>
        </div>
  
        <div className={styles.box}>
          <img src={phoneThree} alt="Facilidade e Agilidade no Cuidado" />
          <div className={styles.inner}>
            <h1>03</h1>
            <h3>Facilidade e Agilidade no Cuidado</h3>
            <p>Com a capacidade de agendar consultas médicas diretamente pela plataforma, proporcionamos rapidez no acesso aos cuidados de saúde necessários, simplificando o processo para os usuários.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vantagens