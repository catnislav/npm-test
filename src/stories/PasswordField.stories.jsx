import React from 'react'
import PropTypes from 'prop-types'
import { PasswordField } from '../npm'
import { action } from '@storybook/addon-actions';

const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

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
    // onClick: { action: 'clicked' },
    // handleClickShowPassword: { action: 'clicked' },
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
  // parameters: {
  //   actions: {
  //     handles: ['change .MuiInputBase-input', 'click .MuiButtonBase-root'],
  //   },
  // },
  parameters: {
    actions: {
      handleChange: { action: 'handleChange' },
      handleClickShowPassword: { action: 'handleClickShowPassword' },
    }
  }
}

const Template = (args) => <PasswordField onArchiveTask onPinTask {...args} />;

export const Default = Template.bind({});

Default.storyName = 'Password Field'
Default.args = {
  passwordLabel: 'Password',
  password: 'Password',
  showPassword: false,
  onPasswordChange: val => console.log("lalallalal", val),
  getPassword: val => console.log("got the password", val),
};

PasswordField.propTypes = {
  passwordLabel: PropTypes.string,
  password: PropTypes.string,
  showPassword: PropTypes.bool,
  onPasswordChange: PropTypes.func,
}

PasswordField.defaultProps = {
  passwordLabel: 'Password',
  password: 'Password',
  showPassword: false,
  onPasswordChange: val => console.log("lalallalal", val),
  getPassword: val => console.log("got the password", val),
}
