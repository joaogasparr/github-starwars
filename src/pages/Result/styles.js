import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1152px;
  max-height: 800px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 25px;

  strong {
    width: 280px;
    height: 50px;

    margin-right: 70px;

    font-size: 40px;
  }

  input {
    width: 650px;
    height: 50px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Profile = styled.aside`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;

  margin-top: 20px;
  margin-left: 25px;

  img {
    width: 280px;
    height: 280px;

    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.4);
  }

  strong {
    width: 280px;
    height: 40px;

    font-family: Raleway;
    font-size: 35px;
    font-weight: 300;
    color: #000000;

    margin-top: 12px;
  }

  span {
    width: 280px;
    height: 25px;

    font-family: Raleway;
    font-size: 20px;
    font-weight: 300;
    color: #5c5c5c;

    margin-top: 7px;
  }
`;

export const ProfileList = styled.ul`
  margin-top: 33px;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;

    width: 240px;
    height: 22px;

    font-family: Raleway;
    font-size: 20px;
    font-weight: 300;
    color: #5c5c5c;

    & + li {
      margin-top: 14px;
    }

    img {
      width: 24px;
      height: 24px;

      margin-right: 7px;
    }
  }
`;

export const Repository = styled.div`
  margin: 10px 0 0 72px;
`;

export const RepoList = styled.ul`
  li {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 40.8px;

    font-family: Raleway;
    font-size: 35px;

    color: #ac53f2;

    & + li {
      margin-top: 89px;
    }

    small {
      width: 100%;
      height: 100%;

      font-family: Raleway;
      font-size: 20px;
      font-weight: 300;

      color: #000000;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: center;

      img {
        width: 25.5px;
        height: 24.5px;

        margin-top: 11px;
      }

      > span {
        width: 255.3px;
        height: 22.4px;

        margin-top: 11px;

        font-family: Raleway;
        font-size: 20px;
        font-weight: 300;

        color: #5c5c5c;
      }
    }
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-width: 850px;
  max-height: 800px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  margin-top: 124px;

  strong {
    width: 315px;
    height: 41px;

    font-family: Raleway;
    font-size: 40px;
    font-weight: normal;

    color: #ac53f2;
  }
`;
