import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderPros{
    onHandleOpenNewTransaction: () => void;
}

export function Header({onHandleOpenNewTransaction}:HeaderPros){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type='button' onClick={onHandleOpenNewTransaction}>
                Nova Transação
                </button>
            </Content>
                        
        </Container>    
    )
    
    
}