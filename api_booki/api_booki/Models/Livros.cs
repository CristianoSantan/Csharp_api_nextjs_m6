using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace api_booki.Models
{
    public class Livros
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Autor {  get; set; }
        public string Editora { get; set; }
        public double Preco { get; set; }
        [JsonIgnore]
        public List<Compras> Compras { get; set; }
    }
}
