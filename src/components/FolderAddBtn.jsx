import "./FolderAddBtn.css";
// 폴더추가 버튼 누르면 폴더에 폴더추가 모달 뜨게하기

function FolderAddBtn({ onClick }) {
  function handleFolderAdd() {
    onClick([true, "1"]);
  }

  return (
    <>
      <button className="folder-add-btn" onClick={handleFolderAdd}>
        폴더 추가 +
      </button>
    </>
  );
}

export default FolderAddBtn;
