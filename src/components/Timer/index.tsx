import React, { useState, useEffect } from 'react';
import { Vibration } from 'react-native'

import {
  Container,
  Header,
  Time,
  Status,
  Field,
} from './styles'

import { ActionButton } from '../../components/ActionButton'

interface Props {
  sessionDisplay: number;
  timeBreak: number;
  session: number;
  updateTimer: () => void;
  toggleInterval: (isSession: number) => void;
  resetSession: () => void;
}

export function Timer({
  sessionDisplay,
  timeBreak,
  updateTimer,
  toggleInterval,
  resetSession,
  session,
}: Props) {
  const [isSession, setIsSession] = useState(true);
  const [intervalId, setIntervalId] = useState(0);
  const [isPLaying, setIsPLaying] = useState(false)

  const playTimer = () => {

    let interval: any = setInterval(updateTimer, 1000);
    setIntervalId(interval);
    setIsPLaying(true);
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    setIsPLaying(false);
  };

  const resetTimer = () => {
    pauseTimer();
    resetSession();
    setIsPLaying(false);
    setIsSession(true);
  };

  useEffect(() => {
    if (sessionDisplay === 0 && isSession === true) {
      setIsSession(false);
      toggleInterval(timeBreak);
      Vibration.vibrate()
    }
    if (sessionDisplay === 0 && isSession === false) {
      setIsSession(true);
      toggleInterval(session);
      Vibration.vibrate([400, 400, 400])
    }
  }, [sessionDisplay, isSession])

  return (
    <Container>
      <Header>
        <Time>{sessionDisplay.toString().padStart(2, "0")}</Time>
        <Status>{isSession ? 'Foco!' : 'Relaxar!'}</Status>
      </Header>
      <Field>
        <ActionButton
          name={'play'}
          onPress={playTimer}
          isPLaying={isPLaying}
        />
        <ActionButton
          name={'pause'}
          onPress={pauseTimer}
          isPLaying={isPLaying}
        />
        <ActionButton
          name={'refresh-ccw'}
          onPress={resetTimer}
          isPLaying={isPLaying}
        />
      </Field>
    </Container>

  )
}