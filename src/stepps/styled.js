import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  /* font */
  font-size: 20px;
`;

export const List = styled.div`
  /* flex */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & + ul {
    margin-top: 100px;
  }

  li {
    margin: 20px;
    list-style: none;
  }

  width: 350px;
  height: 100%;
  min-height: 1050px;
  padding-right: 20px;
  background-color: #f14f16;
`;

export const Info = styled.div`
  /* flex */
  display: flex;
  flex-direction: column;

  background-color: #fff;

  padding-top: 90px;
  padding-left: 120px;

  label {
    padding-bottom: 100px;
  }

  div {
    max-width: 1000px;

    p {
      margin: 0px;
    }

    input {
      height: 50px;
      width: 100%;
      border: 0px;
      border-radius: 5px;
      background-color: #f14f16;
    }

    select {
      height: 50px;
      width: 300px;
      border: 0px;
      border-radius: 5px;
      background-color: #f14f16;
    }

    div {
      input {
        width: 480px;
      }

      button {
        padding: 10px 20px 10px 20px;
      }

      div {
        flex-direction: column;
      }
      padding-top: 20px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
