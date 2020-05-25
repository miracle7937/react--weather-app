import React from 'react';
import styled from '@emotion/styled'


const Container = styled.div`
    text-align: center;`


   
     
 const Location = ({city, country}) => {

     return ( 
         <Container className='location'>
                <h1 className='city'>{city}</h1>
     <h3 className='country'>{country}</h3>
          </Container>
      );
 }
  
 export default Location;