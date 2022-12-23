const {render, screen, fireEvent} = require("@testing-library/react");
const {default: Gif, AddCategorie} = require("../../components/AddCategorie");

describe('Pruebas en AddCategorie', () => {
  test('debe cambiar el valor de la caja de texto', () => {
    
    render( <AddCategorie onNewCategory={()=>{}}/> );

    const input = screen.getByRole('textbox');

    fireEvent.input(input,{ target:{value: 'Saitama'} });

    expect( input.value ).toBe('Saitama');

  });

  test('debe llamar a newCategory si el argumento en la funcion si input tiene un valor', () => {
    
    const inputValue = 'Saitana';
    
    const onAddCategory = jest.fn();

    render( <AddCategorie onNewCategory={ onAddCategory }/> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input,{ target:{value: inputValue} });
    fireEvent.submit(form);

    expect( input.value ).toBe('');

    expect( onAddCategory ).toHaveBeenCalled();
    expect( onAddCategory ).toHaveBeenCalledTimes(1);

  })
  

  test('No debe llamar a onCategory si input es vacío', () => {
    
    const inputValue = '';
    
    const onAddCategory = jest.fn();

    render( <AddCategorie onNewCategory={ onAddCategory }/> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input,{ target:{value: inputValue} });
    fireEvent.submit(form);

    expect( onAddCategory ).toHaveBeenCalledTimes(0);

  })


})
