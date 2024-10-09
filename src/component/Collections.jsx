import React from "react";
import { useTranslation } from "react-i18next";
import CollectionCard from "./CollectionCard";

function Collections() {
  const { t } = useTranslation();
  return (
    <div className=" bg-bg_grey py-8">
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <h2 className="font-fairy text-center text-3xl md:text-4xl font-semibold mt-8 mb-2 uppercase">{t("home_collection_h2")}</h2>
          <p className="font-montserrat py-3 text-center text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-7 lg:leading-8 text-[rgb(18, 18, 18)]">
            {t("home_collection_p")}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4">
        <CollectionCard id={9}  color="bg-[#EEEDF0]" img="./../public/img/ottoman.png" name="Khan" />
        <CollectionCard id={10}  color="bg-[#F3EAE1]" img="./../public/img/iyderoya.png" name="Yeddi Gözəl" />
        <CollectionCard id={11}  color="bg-[#EFF4F6]" img="./../public/img/iydeleylamajnun.png" name="Xəmsə" />
        <CollectionCard id={12}  color="bg-[#E4DDEA]" img="./../public/img/iydeqarabag.png" name="Qarabağ" />
        <CollectionCard id={13}  color="bg-[#F8F4DF]" img="./../public/img/iydesport.png" name="Sport" />
        <CollectionCard id={14}  color="bg-[#E0E0E2]" img="./../public/img/iydebaku.png" name="Baku" />
        <CollectionCard id={15}  color="bg-[#F1E5E5]" img="./../public/img/57_baldini-blaack.png" name="Baldini" />
        <CollectionCard id={16}  color="bg-[#C3FBD8]" img="./../public/img/iydemorningstar.png" name="Day & Night" />
      </div>
    </div>
  );
}

export default Collections;
