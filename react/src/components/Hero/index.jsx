import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"

import heroImg from "../../assets/img/20945398.png"
import styles from "./hero.module.scss"

const cx = clsx.bind(styles)

const Hero = () => {
  return (
    <div className={cx(styles.hero)}>
      <div className={cx(styles.box, styles.box1)}>
        <img src={heroImg} alt="Transformando Saúde e Bem-Estar com Tecnologia de Ponta" />
      </div>
  
      <div className={cx(styles.box, styles.box2)}>
        <div className={cx(styles.left)}>
          <h1>Transformando Saúde e Bem-Estar com Tecnologia de Ponta</h1>
        </div>

        <div className={cx(styles.right)}>
          <div className={cx(styles.featured)}>
            <p>Revolucione sua saúde com dados inteligentes, IA avançada e monitoramento ambiental para um bem-estar personalizado e transformador.</p>
          </div>
          <button className={cx("btn btn-primary")}>Mais informações <FontAwesomeIcon icon={faPlus} /></button>
        </div>
      </div>
  
      <div className={cx(styles.box, styles.box3)}>
        <div className={cx(styles.inner)}>
          <h2>O que somos?</h2>
          <p>Uma plataforma inovadora de saúde e bem-estar que integra dados provenientes de dispositivos wearables, gadgets de medição ambiental e tecnologia de inteligência artificial. Essa integração permite um acompanhamento abrangente da saúde física, mental e ambiental dos usuários.</p>
        </div>

        <div className={cx(styles.divider)}></div>

        <div className={cx(styles.inner)}>
          <h2>O que faremos?</h2>
          <p>Nossa proposta é revolucionar a forma como as pessoas cuidam de sua saúde e bem-estar. Faremos isso integrando dados de saúde pessoal, ambiente e tecnologia avançada para oferecer uma visão holística e personalizada do bem-estar. Revolucionaremos a abordagem convencional de cuidados de saúde, fornecendo insights baseados em IA, orientação proativa e um ambiente colaborativo.</p>
        </div>

        <div className={cx(styles.divider)}></div>

        <div className={cx(styles.inner)}>
          <h2>Como funciona</h2>
          <p>A plataforma funcionará de maneira integrada, coletando dados de saúde pessoal por meio de dispositivos wearable e gadgets de medição ambiental. Esses dispositivos registrarão informações como batimentos cardíacos, níveis de oxigênio no sangue, atividade física, qualidade do ar e poluição sonora.</p>
          <p>Esses dados serão processados por algoritmos de inteligência artificial, que analisarão padrões, correlações e tendências. Com base nessa análise, a plataforma oferecerá insights personalizados aos usuários, fornecendo recomendações específicas para melhorar sua saúde e bem-estar.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero