using System.Text.Json.Serialization;

namespace TaskServer
{
    public class CompletedDto
    {
        [JsonPropertyName("Completed")]
        public bool Completed { get; set; }
    }
}
