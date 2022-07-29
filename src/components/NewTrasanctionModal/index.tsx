import Modal from 'react-modal'
import { Container, TrasactionTypeContainer,RadionBox } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTrasactionModal({isOpen,onRequestClose}:NewTransactionModalProps){


function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    const data ={
        title,
        value,
        type,
        category
    }        

    api.post('transactions', data)
}

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    
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
            <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input 
            type="text" 
            placeholder='Título'
            value={title}
            onChange={event => setTitle(event.target.value)}
            
            />
            <input 
            type="number"
            placeholder='Valor'
            value={value}
            onChange={event => setValue(Number(event.target.value))}
            />

            <TrasactionTypeContainer> 
                <RadionBox 
                type='button'
                onClick={() => {setType('deposit');}}
                isActive={type === 'deposit'}
                activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadionBox>
                <RadionBox 
                type='button'
                onClick={() => {setType('withdraw');}}
                isActive={type === 'withdraw'}
                activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadionBox>
            </TrasactionTypeContainer>

            <input 
            type="text" 
            placeholder='Categoria'
            value={category}
            onChange={event => setCategory(event.target.value)}
            />           

            <button type="submit">
                Cadatrar
            </button>
            </Container>
            
        </Modal>        

    )
}