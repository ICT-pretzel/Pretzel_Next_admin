import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Login_Container = styled.div`
  background-color: #252525;
  width: 450px;
  height: 450px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Login_Title = styled.p`
  color: #ffffff;
  font: 800 30px 'Pretendard-Regular';
  text-align: center;
  margin-bottom: 20px;
`

export const Id = styled.input`
  font: 16px 'Pretendard-Regular';
  width: 300px;
  height: 60px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 10px;
`

const PwdContainer = styled.div`
position: relative;
`;

export const Pwd = styled.input`
  font: 16px 'Pretendard-Regular';
  width: 300px;
  height: 60px;
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;
  box-sizing: border-box;
  padding: 10px;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  right: 10px; /* 조정이 필요할 수 있음 */
  top: 20px;
`;

export const Login_Button = styled.button`
  border: none;
  font: 600 20px 'Pretendard-Regular';
  color: #ffffff;
  background-color: #f29a2e;
  width: 300px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    background-color: #ad6e21;
    color: #868686;
  }
`

export const PasswordInput = ({ placeholder, onChange, showPassword, togglePasswordVisibility, value, onKeyDown }) => (
  <PwdContainer>
    <Pwd
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onKeyDown={onKeyDown}
    />
    <Icon
      src={showPassword ? "/images/icons/eyeOn.png" : "/images/icons/eyeOff.png"}
      onClick={togglePasswordVisibility}
    />
  </PwdContainer>
);