import React from 'react'
import styled from 'styled-components'
import Filters from './Filters/Filters'
import GameCard from './GameCard/GameCard'

const Games = () => {


  return (
    <GamesSection>
        <Filters/>
        <GameCard/>
    </GamesSection>
  )
}

export default Games

const GamesSection = styled.section``