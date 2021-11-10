import React from 'react'
import PropTypes from 'prop-types'
import { PasswordField } from '../npm'

export const PasswordFieldStory = ({password, showPassword, ...props}) => <PasswordField {...props} />

PasswordFieldStory.propTypes = {
  password: PropTypes.string,
  showPassword: PropTypes.bool
}

PasswordFieldStory.defaultProps = {
  password: 'Passwordie',
  showPassword: true
}
