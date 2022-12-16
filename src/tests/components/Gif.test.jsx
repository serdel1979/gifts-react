import { screen, configure } from '@testing-library/react'
const {render} = require("@testing-library/react");
const {default: Gif} = require("../../components/Gif");

describe('Pruebas en <Gif />', () => {
  
    const title = 'Gif loco';
    const url = 'https://undom.com/';

    test('Debe hacer match con el snapshot',()=>{

        const { container } = render( <Gif title = {title} url={url}/>);
        expect( container ).toMatchSnapshot();
        
    })


    test('Debe mostrar la imagen con el URL y el ALT indicado',()=>{

        const { container } = render( <Gif title = {title} url={url}/>);
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })

    test('Debe mostrar el título',()=>{

        const { container } = render( <Gif title = {title} url={url}/>);
        
        expect(screen.getByText(title)).toBeTruthy
    })
})
