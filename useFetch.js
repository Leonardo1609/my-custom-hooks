import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {
    
    // Si se intenta hacer un setState de un componente o una función de un componente que no está montado dará un error
    const isMounted = useRef( true );
    const [state, setstate] = useState({ data: null, loading: true, error: null });
    
    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    },[]);
    
    useEffect( () => {
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                // setTimeout(()=> {
                    if( isMounted.current ){
                        setstate({
                            loading: false,
                            error: null,
                            data
                        });
                    } 
                    // else{
                    //     console.log('setstate not called');
                        
                    // }
                // }, 4000 );
            })
            .catch( () => {
                setstate({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar esta info'
                })
            });
        return () => setstate({ data: null, loading: true, error: null }); 
    }, [ url ]);

    return state;
}
