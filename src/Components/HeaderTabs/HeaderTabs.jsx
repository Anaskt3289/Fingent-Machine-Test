import React from 'react'
import { Navbar, Container, ButtonGroup, Button } from 'react-bootstrap';
import './Styles/headerTabs.css'

function HeaderTabs() {
    return (
        <div>
            <Navbar expand="lg" variant="light">
                <Container >
                    <ButtonGroup size="lg" className="mb-2 tabBtns">
                        <Button className='tabBtn active'>Add Product</Button>
                        <Button className='tabBtn'>Remove Product</Button>
                        <Button className='tabBtn'>List Product</Button>
                    </ButtonGroup>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderTabs
