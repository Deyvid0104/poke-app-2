import Image from 'next/image'
import React from 'react'
import styles from '@/styles/gen.module.css';

function Cargando() {
  return (
    <>
    <div className={styles.cargando}> 
      <Image src="/charmander_cargando.gif" alt="cargando" width={500} height={500} />;
      <h1 className={styles.titulo}>Cargando...</h1>
    </div>
    </>
  )
}

export default Cargando