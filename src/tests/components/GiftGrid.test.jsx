const {render, screen} = require("@testing-library/react");

const {default: GiftGrid} = require("../../components/GiftGrid");
const {default: useFetchGift} = require("../../hooks/useFetchGift");

jest.mock('../../hooks/useFetchGift')


describe('Pruebas en <GifGrid />', () => {
  
    const category = 'One Punch';
    test('should mostrar el loading', () => {
      
        useFetchGift.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GiftGrid category = {category} />)
        //screen.debug();

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));

    })


    test('Debe mostrar ítems cuando se cargan las imagenes', () => {
      
        render(<GiftGrid category = {category} />)
        //screen.debug();

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));

    })

    test('Debe mostrar ítems cuando se cargan las imagenes', () => {
        
        const gifs = [{
            id:'abc',
            title: 'Uno loco',
            url: 'http.com.ar'
        },
        {
            id:'a32111',
            title: 'Zarpado objeto',
            url: 'http.belomans.com.ar'
        },
        {
            id:'98777',
            title: 'Desde el 9 de dic',
            url: 'http.com.ar.ve'
        }
        ]
        useFetchGift.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GiftGrid category = {category} />);

        expect(screen.getAllByRole('img').length).toBe(3);
    })
    
})
