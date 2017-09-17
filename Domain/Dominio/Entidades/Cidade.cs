using SCBuildIt.Domain.Dominio.ObjetosDeValor;

namespace SCBuildIt.Domain.Dominio.Entidades
{
    public class Cidade
    {
        public Cidade(string nome)
        {
            this.Nome = nome;
        }

        public int Id { get; set; }
        public int Linhas { get; set; } = 50;
        public int Colunas { get; set; } = 68;
        public string Nome { get; set; }
        public Tipo Tipo { get; set; } = Tipo.vazia;
    }
}
