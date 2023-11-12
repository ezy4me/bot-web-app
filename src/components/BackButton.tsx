import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="icon" onClick={handleGoBack}>
      <FaArrowLeft>Назад</FaArrowLeft>
    </button>
  );
};

export default BackButton;
