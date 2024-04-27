using dotNetReactApp.Server.Models;
using dotNetReactApp.Server.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace dotNetReactApp.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CharactersController : ControllerBase
{
    private readonly CharactersService _charactersService;

    public CharactersController(CharactersService charactersService) =>
        _charactersService = charactersService;

    [HttpGet]
    public async Task<List<Character>> Get() =>
        await _charactersService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Character>> Get(string id)
    {
        var character = await _charactersService.GetAsync(id);

        if (character is null)
        {
            return NotFound();
        }

        return character;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Character newCharacter)
    {
        await _charactersService.CreateAsync(newCharacter);

        return CreatedAtAction(nameof(Get), new { id = newCharacter.Id }, newCharacter);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Character updatedCharacter)
    {
        var character = await _charactersService.GetAsync(id);

        if (character is null)
        {
            return NotFound();
        }

        updatedCharacter.Id = character.Id;

        await _charactersService.UpdateAsync(id, updatedCharacter);
        return NoContent();
    }
    
    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var book = await _charactersService.GetAsync(id);

        if (book is null)
        {
            return NotFound();
        }

        await _charactersService.RemoveAsync(id);

        return NoContent();
    }
    
}