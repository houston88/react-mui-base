import styled from 'styled-components';

// drawer has a width of 256px (lets add 16px padding)
const Container = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 64px;
  bottom: 0px;
  left: ${(props) => props.withDrawer ? '256px' : '0px'};
  right: 0;
  padding: 8px;
  background-color: ${(props) => props.themeName === 'DARK' ? '#424242' : '#fafafa'}
  transition: 450ms left cubic-bezier(0.23, 1, 0.32, 1) 0ms
`;

export default Container;
