import React from 'react'
import PropTypes from 'prop-types'
import { PasswordField } from '../npm'

export default {
  title: 'Katarina/Fields',
  component: PasswordField,
  // parameters: { 
  //   docs: { 
  //     page: null 
  //   } 
  // },
  argTypes: {
    passwordLabel: {
      name: 'Label',
      // description: '',
      // table: {
      //   category: 'Text'
      // }
      table: {
        type: {
          summary: 'String'
        }
      }
    },
    password: {
      name: 'Input value',
      table: {
        type: {
          summary: 'String'
        }
      }
    },
    showPassword: {
      name: 'Show password',
      table: {
        type: {
          summary: 'Boolean'
        }
      }
    },
  },
  // parameters: {
  //   actions: {
  //     handles: ['change .MuiInputBase-input', 'click .MuiButtonBase-root'],
  //   },
  // },
  // parameters: {
  //   actions: {
  //     handleChange: { action: 'handleChange' },
  //     handleClickShowPassword: { action: 'handleClickShowPassword' },
  //   }
  // }
}

const Template = (args) => <PasswordField {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Password Field'
Default.args = {
  passwordLabel: 'Password',
  password: 'Password',
  showPassword: false
};

PasswordField.propTypes = {
  passwordLabel: PropTypes.string,
  password: PropTypes.string,
  showPassword: PropTypes.bool
}

PasswordField.defaultProps = {
  passwordLabel: 'Password',
  password: 'Password',
  showPassword: false
}
