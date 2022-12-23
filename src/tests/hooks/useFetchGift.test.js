import {renderHook, waitFor} from "@testing-library/react";
import useFetchGift from "../../hooks/useFetchGift"

describe('Pruebas en hook useFetchGifs', () => { 

    test('Debe iniciar el estado inicial ', () => {
      
        const { result } = renderHook(()=>useFetchGift('One Punch'))
        const {images, isLoading} = result.current;
        

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('Debe retornar un arreglo de imagenes e isLoading en false', async() => {
      
        const { result } = renderHook(()=>useFetchGift('One Punch'))
        
        
        await waitFor(
            ()=> expect( result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })
    


})