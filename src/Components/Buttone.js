import { Button } from 'native-base';
import React from 'react'

function Buttone({bg,children,color,onPress}){
    return (
        <Button  
        w="full"
        h={55}
        mt={50}
        rounded="full"
        bg={bg}
        _text={{
            color:color,
            fontWeight:"bold"
        }}
        _pressed={{bg:bg}}
        onPress={onPress}
        >
            {children} 
            
        </Button>
    );
}
 export default Buttone;