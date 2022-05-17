import React from 'react'
import { Navbar, Container, ButtonGroup, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import './Styles/headerTabs.css'

function HeaderTabs({add,remove,list}) {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar expand="lg" variant="light">
                <Container >
                    <ButtonGroup size="lg" className="mb-2 tabBtns">
                        <Button className={`tabBtn ${add}`} onClick={()=>navigate('/')} >Add Product</Button>
                        <Button className={`tabBtn ${remove}`} onClick={()=>navigate('/removeProduct')}>Remove Product</Button>
                        <Button className={`tabBtn ${list}`} onClick={()=>navigate('/listProducts')} >List Products</Button>
                    </ButtonGroup>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderTabs
