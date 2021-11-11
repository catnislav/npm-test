import React from 'react'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import PasswordFieldStyle from './PasswordFieldStyle'

// import EyeEnabledIcon from '../../images/logo-a-eye-enabled.svg'
// import EyeDisabledIcon from '../../images/logo-a-eye-disabled.svg'

const PasswordField = ({onArchiveTask, 
  passwordLabel = '', 
  password = '', 
  showPassword = false, 
  onPasswordChange = () => {},
  getPassword = () => {},
}) => {
  const s = PasswordFieldStyle;

  // console.log(`onArchiveTask`, onArchiveTask)

  // const theme = createTheme();

  // console.log(`eyeEnabledIcon`, eyeEnabledIcon)

  const [values, setValues] = React.useState({
    passwordLabel,
    password,
    showPassword
  });

  const handleChange = (prop) => (event) => {
    console.log('changed')
    setValues({ ...values, [prop]: event.target.value });
    // setValues(prev => ({ ...prev, password: event.target.value }));
    onPasswordChange(event.target.value)
  };
  
  const handleClickShowPassword = () => {
    console.log('clicked')
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  
  React.useEffect(() => setValues({ ...values, passwordLabel, password, showPassword }), [passwordLabel, password, showPassword]);
  
  return (
    <React.Fragment>
      {/* <ThemeProvider theme={theme}> */}
        <FormControl sx={s.formControl} variant="outlined">
          <InputLabel sx={s.inputLabel} htmlFor="outlined-adornment-password">{values.passwordLabel}</InputLabel>
          <OutlinedInput
            sx={s.outlinedInput}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment sx={s.inputAdornment} position="end">
                <IconButton
                  sx={s.iconButton}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOffIcon sx={s.visibilityIcon} /> : <VisibilityIcon sx={s.visibilityIcon} />}

                  {/* {values.showPassword ? <EyeEnabledIcon fill='rgba(0, 56, 93, 0.5)' style={s.visibilityIcon} /> : <EyeDisabledIcon style={s.visibilityIcon} />} */}
                  
                  {/* {values.showPassword
                  ? <Box component="svg" sx={s.visibilityIcon}><use href={eyeEnabledIcon}></use></Box>
                  : <Box component="svg" sx={s.visibilityIcon}><use href={eyeDisabledIcon}></use></Box>} */}

                  {/* {values.showPassword
                  ? <Box component="img" href={eyeEnabledIcon} sx={s.visibilityIcon} />
                  : <Box component="img" href={eyeDisabledIcon} sx={s.visibilityIcon} />} */}
                </IconButton>
              </InputAdornment>
            }
            // label="Password"
            sx={s.outlinedInput}
          />
        </FormControl>
      {/* </ThemeProvider> */}
      <button onClick={() => getPassword(values.password)}>Get password</button>
    </React.Fragment>
  )
}

export default PasswordField