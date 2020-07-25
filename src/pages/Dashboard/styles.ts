import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
  position: sticky;
  top: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: none;

    svg {
      height: 20px;
      width: 20px;
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  > img {
    height: 86px;
    width: 86px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    > span {
      color: #f4ede8;
      font-size: 16px;
    }

    > strong {
      color: #ff9000;
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    display: flex;
    align-items: center;
    color: #ff9000;
    font-weight: 500px;
  }

  span {
    display: flex;
    align-items: center;
  }
  span + span::before {
    content: '';
    width: 1px;
    height: 12px;
    background: #ff9000;
    margin: 0 8px;
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    margin-top: 24px;
    position: relative;

    &::before {
      content: '';
      height: 80%;
      width: 2px;
      background: #ff9000;
      top: 10%;
      left: 0;
      position: absolute;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      font-size: 24px;
      margin-left: 12px;
      color: #f4ede8;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.div`
  margin-top: 48px;

  > strong {
    display: block;
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }

  & + div {
    margin-top: 16px;
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 15px;
    background: #3e3b47;
    border-radius: 10px;
    padding: 10px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    strong {
      color: #f4ede8;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500px;
      margin-left: 8px;
    }
  }
`;

export const Calendar = styled.aside`
  width: 500px;
  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
