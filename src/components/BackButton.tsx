import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="icon">
      <FaArrowLeft onClick={handleGoBack}>Назад</FaArrowLeft>
    </button>
  );
};

export default BackButton;
