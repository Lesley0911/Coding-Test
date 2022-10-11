import i18next from "i18next";
import { Trans, useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import '../i18n/i18n';

const Welcome = ()=> {
  const {loginId} = useParams();
  const {t} = useTranslation();
    return (
        <div>
          <h1>{t(`Welcome`)+loginId}</h1>
        </div>
    );
  }
  
  export default Welcome;
  