import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Icon } from '../Icon/Icon';
import { color, typography, spacing } from '../shared/styles';

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${spacing.borderRadius.small}px;
  border: 1px solid ${color.mediumdark}; 
  padding: ${(props) =>
    props.size === SIZES.SMALL ? '8px 16px' : '13px 20px'};
  width: max-content;

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      background-color: ${color.light};
      &:hover {
        transform: none;
      }
    `}
`;

const InputElement = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  flex-grow: 1;
  margin: 0 0.5em;
  font-size: ${(props) =>
    props.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2}px;
  line-height: 22px;
  color: ${color.secondary};


  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}
`;

const Prepend = styled.div`
  margin-right: 0.5em;
`;

const Append = styled.div`
  margin-left: 0.5em;
`;

const Input = forwardRef(function Input(
  {
    isDisabled,
    icon,
    type = 'text',
    placeholder,
    value,
    onChange,
    prepend,
    append,
    ...props
  },
  ref) 
  {
  return (
    <InputWrapper disabled={isDisabled} {...props}>
      {prepend && <Prepend>{prepend}</Prepend>}
      {icon && <Icon icon={icon} />}
      <InputElement
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        placeholder={placeholder}
        {...props}
      />
      {append && <Append>{append}</Append>}
    </InputWrapper>
  )
});

const StyledInput = styled.input`
  border-radius: ${spacing.borderRadius.small}px;
  border: 1px solid ${color.mediumdark}; 
  font-size: ${(props) =>
    props.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2}px;
  line-height: 22px;
  padding: ${(props) =>
    props.size === SIZES.SMALL ? '8px 16px' : '13px 20px'};
  -webkit-appearance: none;
  color: ${color.secondary};
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  &:focus {
    outline: 0;
  }

  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  } 

  -moz-appearance: textfield;

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}
`;

// const Input = forwardRef(function Input(
//   {
//     isDisabled,
//     type,
//     placeholder,
//     ...props
//   },
//   ref
// ) {
//   return (
//     <StyledInput
//       ref={ref}
//       disabled={isDisabled}
//       type={type}
//       placeholder={placeholder}
//       {...props}
//     />
//   );
// });

Input.propTypes = {
  isDisabled: PropTypes.bool,
  icon: PropTypes.node,
  prepend: PropTypes.string,
  append: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES))
};

Input.defaultProps = {
  isDisabled: false,
  placeholder: 'Placeholder',
  type: 'text',
  size: SIZES.MEDIUM,
  icon: null
};

export { Input };