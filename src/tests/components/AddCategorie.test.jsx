const {render} = require("@testing-library/react");
const {default: Gif, AddCategorie} = require("../../components/AddCategorie");

describe('Pruebas en AddCategorie', () => {
  test('debe cambiar el valor de la caja de texto', () => {
    
    render( <AddCategorie onNewCategory={()=>{}}/> );


  })
  
})
