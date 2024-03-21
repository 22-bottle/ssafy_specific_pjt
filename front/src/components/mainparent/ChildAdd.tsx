import React from 'react'

const Childadd: React.FC = () => {
  const styleObj = {
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
  }
  // 초대코드 저장 변수
  const registCode = '52qpt2'
  // 코드 클립보드 저장 함수
  const handleCopyCode = () => {
    navigator.clipboard.writeText(registCode).then(
      () => {
        alert('코드가 클립보드에 복사되었습니다.')
      },
      (err) => {
        console.error('클립보드에 복사를 실패했습니다: ', err)
      }
    )
  }
  return (
    <div className="no-child-container" style={styleObj}>
      <div className="header" style={styleObj}>
        <div className="logo">toss</div>
        {/* Other header elements */}
      </div>

      <div className="no-child-content" style={styleObj}>
        <h2>아이 등록 코드</h2>
        <div className="no-child-illustration" style={styleObj}>
          {/* Illustration or image */}
          {/* <img src="/path-to-your-illustration.png" alt="No Child image" /> */}
        </div>
        <div className="no-child-info" style={styleObj}>
          <p>아이 등록을 위한 코드를 만들었어요</p>
          <p>아이 계정에서 코드를 입력하세요</p>
        </div>
        <div className="registration-code" style={styleObj}>
          <input type="text" value={registCode} readOnly />
        </div>
        <div className="action-buttons">
          <button onClick={handleCopyCode}>내 코드 복사하기</button>
          <button>카카오톡 공유하기</button>
        </div>
      </div>

      <div className="footer">{/* Footer content */}</div>
    </div>
  )
}

export default Childadd
