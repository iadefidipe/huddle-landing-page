import { Container } from './Styles/Container.styled'
import {StyledHeader, Nav, Logo,Image} from './Styles/Header.styled'
import logo from '../images/logo.svg'
import { Button } from './Styles/Button.styled'
import { Flex } from './Styles/Flex.styled'
import heroImage from '../images/illustration-mockups.svg'
export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src={logo} />
                    <Button> Try It Free </Button>

                </Nav>

                <Flex>
                    <div>
                        <h1> Build The Community Your Fans Will Love</h1>
                        <p> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                        </p>
                        <Button bg ={'hsl(322, 100%, 66%)'}  color='#fff' > Get Started For Free</Button>
                    </div>
                    

                    <Image src={heroImage} />
                </Flex>
            </Container>
          
        </StyledHeader>
    )
}
