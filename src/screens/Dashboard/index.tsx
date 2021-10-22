import React, { useState } from 'react';
import { Modal } from 'react-native'

import {
  Container,
  Header,
  Title,
  Field,
} from './styles'

import { Timer } from '../../components/Timer';
import { SessionButton } from '../../components/SessionButton'
import { BreakButton } from '../../components/BreakButton'
import { TimeSelectSession } from '../TimeSelectSession/';
import { TimeSelectBreak } from '../TimeSelectBreak/';

export function Dashboard() {
  const [openModalSession, setOpenModalSession] = useState(false)
  const [session, setSession] = useState(25)
  const [openModalBreak, setOpenModalBreak] = useState(false)
  const [timeBreak, setTimeBreak] = useState(5)
  const [sessionDisplay, setSessionDisplay] = useState(25)

  const handleOpenModalSession = () => {
    setOpenModalSession(true)
  }

  const handleCloseModalSession = (item: string) => {
    setOpenModalSession(false)
    setSession(Number(item))
    setSessionDisplay(Number(item))
  }

  const handleOpenModalBreak = () => {
    setOpenModalBreak(true)
  }

  const handleCloseModalBreak = (item: string) => {
    setOpenModalBreak(false)
    setTimeBreak(Number(item))
  }

  const updateTimer = () => {
    setSessionDisplay(prevSession => prevSession - 1)
  }

  const toggleInterval = (seconds: number) => {
      setSessionDisplay(seconds);
  }

  const resetTimer = () => {
    setSessionDisplay(25);
    setSession(25);
    setTimeBreak(5);

  }

  return (
    <Container>
      <Header>
        <Title>Pomodoro</Title>
      </Header>
      <Timer
        sessionDisplay={sessionDisplay}
        timeBreak={timeBreak}
        updateTimer={updateTimer}
        toggleInterval={toggleInterval}
        resetSession={resetTimer}
        session={session}
      />
      <Field>
        <SessionButton
          openModal={handleOpenModalSession}
          session={session}
        />
        <BreakButton
          openModal={handleOpenModalBreak}
          TimeBreak={timeBreak}

        />
      </Field>

      <Modal visible={openModalSession}>
        <TimeSelectSession
          closeModal={handleCloseModalSession}
        />


      </Modal>
      <Modal visible={openModalBreak}>
        <TimeSelectBreak
          closeModal={handleCloseModalBreak}
        />

      </Modal>
    </Container >
  )
}