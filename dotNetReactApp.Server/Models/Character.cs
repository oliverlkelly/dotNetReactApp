using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace dotNetReactApp.Server.Models;

public class Character
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Name")]
    public string CharacterName { get; set; } = null!;

    public decimal Experience { get; set; }

    public string Class { get; set; } = null!;

    public decimal Acumen { get; set; }

    public decimal Brawn { get; set; }

    public decimal Conduct { get; set; }
}