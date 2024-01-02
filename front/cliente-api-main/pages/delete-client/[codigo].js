import { useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const DeleteClient = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const [clientId, setClientId] = useState(codigo);
 

  const handleDeleteClient = () => {
  
    axios
      .delete("https://localhost:7194/api/Categorias/" + clientId)
      .then(() => {
        router.push("/home");
      })
      .catch((error) => {
        alert("Erro ao excluir categoria:" + error);
      });
  };

  return (

    <div>
    
      <h1 className={style.h1}>Excluir Categoria</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>ID da categoria a ser excluída:</label>
            </td>
            <td>
              <input
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleDeleteClient}>Excluir Categoria</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteClient;
