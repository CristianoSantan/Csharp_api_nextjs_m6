using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace api_booki.Models
{
    public class Compras
    {
        [Key]
        public int Id { get; set; }
        public string Data_compra {  get; set; }
        public double Total_compra { get; set; }
        public int UsuarioId { get; set; }
        public Usuarios Usuario { get; set; }
        public int LivroId { get; set; }
        public Livros Livro { get; set; }
    }
}
