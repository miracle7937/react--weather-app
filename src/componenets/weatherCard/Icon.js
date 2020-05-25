import React from 'react';
import styled from '@emotion/styled'








 const Icon = ({condition}) => {
     const IMG = styled.img`
width:40%;
`
var icon=''
switch (condition) {
    case 'Clear':
        icon = "./img/sunny.png";
        break;
         case 'Cloud':
        icon="./img/cloud.png";
        break;

    default:
         icon = "./img/sunny.png";

        break;
}

     return ( 
          <IMG className='icon' src={icon} alt="weather icon"/>
      );
 }
  
 export default Icon;