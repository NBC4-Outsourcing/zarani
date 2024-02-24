import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectFile, setThumnailImg, setUserInfo } from 'shared/redux/modules/userSlice';
import * as MP from 'components/styles/MyPageStyle';

const MyPage = () => {
  const dispatch = useDispatch();
  const { userId, avatar } = useSelector((store) => store.user.userInfo);
  const { selectImage, thumnailImage } = useSelector((store) => store.user);
  console.log(selectImage);

  const onChangeImage = (e) => {
    if (selectImage === null) return;
    dispatch(setUserInfo({ avata: selectImage }));
    if (!e.target.files) return;
    const imgFile = e.target.files[0];
    if (imgFile) {
      let image = window.URL.createObjectURL(imgFile);
      dispatch(setSelectFile(image));
      dispatch(setThumnailImg(image));
    }
  };
  return (
    <section>
      <form>
        <div>
          <MP.ThumnailImg src={thumnailImage} alt="기본이미지" />
          <label htmlFor="imgfileChoice">이미지 등록</label>
          <input type="file" accept="image/*" id="imgfileChoice" onChange={onChangeImage} />
        </div>
        <div>
          <label htmlFor="nickname"> 닉네임</label>
          <input type="text" id="nickname" />
        </div>
      </form>
    </section>
  );
};

export default MyPage;
