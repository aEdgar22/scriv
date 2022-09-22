import React from 'react'
import { ModalContainer, Overlay } from './modalStyled'

export const Modal = () => {
  return (
    <>
        <Overlay>
            <ModalContainer>
                <h1>contenido</h1>
            </ModalContainer>
        </Overlay>
    </>
  )
}
