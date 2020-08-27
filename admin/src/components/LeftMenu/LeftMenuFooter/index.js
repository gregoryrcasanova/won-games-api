import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import messages from './messages.json'
import Wrapper from './Wrapper'

defineMessages(messages)

function LeftMenuFooter () {
  return (
    <Wrapper>
      <div className='poweredBy'>
        <FormattedMessage
          id={messages.poweredBy.id}
          defaultMessage={messages.poweredBy.defaultMessage}
          key='poweredBy'
        />
        <a
          key='website'
          href='https://reactavancado.com.br'
          target='_blank'
          rel='noopener noreferrer'
        >
          React Avançado
        </a>
      </div>
    </Wrapper>
  )
}

export default LeftMenuFooter
