import React, { Fragment } from 'react'
import {Ul,Li,Wrapp} from './styles'
import {ButtonNavigate} from '../../styles/inputs'
import {UserCard} from '../UserCard'
import { Link } from '@reach/router'
import {BsFillPersonPlusFill} from 'react-icons/bs'
export const UsersList = ({data,handleTryToDelete})=>{
    return(
        <Wrapp>
            <h1>Usuarios</h1>
           
                 <ButtonNavigate to={`/NewUser`}>
                     Nuevo usuario
                     <BsFillPersonPlusFill color="white"/>
                </ButtonNavigate>
           
            <Ul>
                {
                    data.map(c=><Li key={c._id}>
                        <UserCard 
                         data={c}
                         handleTryToDelete={handleTryToDelete}></UserCard>
                        </Li>)
                }
            </Ul>
        </Wrapp>

    )
}