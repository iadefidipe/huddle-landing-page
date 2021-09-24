import { Container } from './Styles/Container.styled'
import {StyledHeader, Nav, Logo} from './Styles/Header.styled'
import logo from '../images/logo.svg'
import { Button } from './Styles/Button.styled'

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src={logo} />
                    <Button> Try It Free </Button>

                </Nav>
            </Container>
          
        </StyledHeader>
    )
}
