namespace dotNetReactApp.Server.Models;

public class CharacterStoreDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string CharacterCollectionName { get; set; } = null!;
}