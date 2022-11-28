namespace Parcial2.Models
{
    public class Pokemon
    {
        public string? name { get; set; }
        public string? url { get; set; }
    }

    public class DreamWorld
    {
        public string front_default { get; set; }
        public object front_female { get; set; }
    }

    public class Type2
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class PokemonList
    {
        public List<Pokemon>? results;
    }
}
