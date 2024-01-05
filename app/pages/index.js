import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [clients, setClients] = useState([]);

  // useEffect(() => {
  //   // Faça uma chamada GET para a API
  //   axios
  //     .get("http://apibooki.somee.com/api/Usuarios")
  //     .then((response) => {
  //       setClients(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao buscar a lista de Categorias:", error);
  //     });
  // }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={``}>
        <div>
          <h1 className={styles.h1}>Teste</h1>
          <table className="table container tabela">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Senha</th>
              </tr>
            </thead>
            {/* {clients.map((element) => (
                <tbody key={element.id}>
                  <tr className={styles.tabela}>
                    <td>{element.id}</td>
                    <td>{element.nome}</td>
                    <td>{element.email}</td>
                    <td>{element.senha}</td>
                  </tr>
                </tbody>
              ))} */}
          </table>
        </div>
      </main>
    </>
  )
}
