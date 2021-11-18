import React from 'react'
import PropTypes from 'prop-types'
import { PasswordField } from '../npm'

export default {
  title: 'Katarina/Fields/Password',
  component: PasswordField,
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
    onPasswordChange: {
      name: 'On password change',
      description: 'Gets the value from the input like an argument',
      table: {
        type: {
          summary: 'Function'
        }
      },
      control: { disable: true },
    }
  },
}

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
  onPasswordChange: password => password,
}

const Template = (args) => <PasswordField {...args} />;

export const Default = Template.bind({});

// Default.storyName = 'Password Field'
Default.args = {
  passwordLabel: 'Password',
  password: 'Password',
  showPassword: false,
  // onPasswordChange: () => {},
};
