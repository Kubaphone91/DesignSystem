import styled from '@emotion/styled';

import { Input } from './Input';
import { Icon } from '../Icon';

export default {
  title: 'Design System/Input',
  component: Input,
};

export const AllInputs = {
  name: 'all inputs',
  render: () => (
    <>
      <Input placeholder='Small input' size='small' />
      <br />
      <Input placeholder='Medium input' />
      <br />
      <Input placeholder='Disabled' isDisabled />
      <br />
      <Input prepend={'$'} placeholder='Price' />
      <br />
      <Input append={'Pts'} placeholder='Points' />
      <br />
      <Input icon={'search'} placeholder='Search' />
    </>
  ),
};