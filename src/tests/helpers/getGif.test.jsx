import fetch from 'cross-fetch';
import { getGifs } from '../../helpers/getGif.js';



describe('Prueba en api getgIF', () => {
  test('debe retornar un arreglo de gif', () => {
    
    const gifs = await getGifs('Onponch');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title:expect.any(String),
      url:expect.any(String),
    });

  })
  
})
