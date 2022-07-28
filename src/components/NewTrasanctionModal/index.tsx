import Modal from 'react-modal'
import { Container, TrasactionTypeContainer,RadionBox } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTrasactionModal({isOpen,onRequestClose}:NewTransactionModalProps){

    const [type, setType] = useState('deposit')
    
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            type='button' 
            onClick={onRequestClose}
            className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container>
            <h2>Cadastrar Transação</h2>

            <input type="text" placeholder='Título' />
            <input type="number" placeholder='Valor' />
            <input type="text" placeholder='Categoria' />

            <TrasactionTypeContainer> 
                <RadionBox 
                type='button'
                onClick={() => {setType('deposit');}}
                isActive={type === 'deposit'}
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadionBox>
                <RadionBox 
                type='button'
                onClick={() => {setType('withdraw');}}
                isActive={type === 'withdraw'}
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadionBox>
            </TrasactionTypeContainer>

            <button type="submit">
                Cadatrar
            </button>
            </Container>
            
        </Modal>        

    )
}