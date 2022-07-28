import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/globals";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTrasactionModal } from "./components/NewTrasanctionModal";

Modal.setAppElement('#root')
export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

  return (
    <>
    <Header onHandleOpenNewTransaction={handleOpenNewTransactionModal}/>
    <Dashboard/>
    <NewTrasactionModal
    
    isOpen={isNewTransactionModalOpen}
    onRequestClose={handleCloseNewTransactionModal}
    />
     <GlobalStyles/>
   
    </>
    
  );
}
