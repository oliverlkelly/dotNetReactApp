using dotNetReactApp.Server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace dotNetReactApp.Server.Services;

public class CharactersService
{
    private readonly IMongoCollection<Character> _charactersCollection;

    public CharactersService(
        IOptions<CharacterStoreDatabaseSettings> characterStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            characterStoreDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = new MongoClient().GetDatabase(
            characterStoreDatabaseSettings.Value.DatabaseName);

        _charactersCollection = mongoDatabase.GetCollection<Character>(
            characterStoreDatabaseSettings.Value.CharacterCollectionName);
    }

    public async Task<List<Character>> GetAsync() =>
        await _charactersCollection.Find(_ => true).ToListAsync();

    public async Task<Character?> GetAsync(string id) =>
        await _charactersCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Character newCharacter) =>
        await _charactersCollection.InsertOneAsync(newCharacter);

    public async Task UpdateAsync(string id, Character updatedCharacter) =>
        await _charactersCollection.ReplaceOneAsync(x => x.Id == id, updatedCharacter);

    public async Task RemoveAsync(string id) =>
        await _charactersCollection.DeleteOneAsync(x => x.Id == id);
}