const {render} = require("@testing-library/react");
const {default: Gif} = require("../../components/Gif");

describe('Pruebas en <Gif />', () => {
  
    const title = 'Gif loco';
    const url = 'https://undom.com';

    test('Debe hacer match con el snapshot',()=>{

        const { container } = render( <Gif title = {title} url={url}/>);
        expect( container ).toMatchSnapshot();
        
    })


    test('Debe mostrar la imagen con el URL y el ALT indicado',()=>{

        const { container } = render( <Gif title = {title} url={url}/>);
        // screen.debug();
        console.log(screen.getByRole('img').src);
        expect( screen.getByRole('img'));
    })
})
