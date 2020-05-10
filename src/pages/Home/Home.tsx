import React, { useCallback } from 'react';
import { StyledHomePageContainer } from './Home.styled'
import { Button } from 'antd';
import { useAppContext } from '../../AppContext';

export default function HomePage() {
  const [appContext, setAppContext] = useAppContext()

  const onClick = useCallback(() => {
    setAppContext({
      appText: 'Hello world'
    })
  }, [setAppContext])

  return (
    <StyledHomePageContainer>
      <Button type="primary" onClick={onClick}>{appContext.appText}</Button>
    </StyledHomePageContainer>
  )
}