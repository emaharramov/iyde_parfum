import React from "react";
import { useTranslation } from "react-i18next";
import Category from "./Category";

function Categories() {
  const { t } = useTranslation();
  return (
    <div className=" grid md:grid-cols-2 ">
      <Category size=" w-[120px] md:w-[200px]" name={t("man")} img={"./img/men.png"} color="bg-[#FCE367]" />
      <Category size=" w-[120px] md:w-[250px]"  name={t("woman")} img={"./img/woman.png"} color="bg-[#82BEBE]" />
      <Category size=" w-[120px] md:w-[250px]" name={t("unisex")} img={"./img/unisex.png"} color="bg-[#E6E8E3]" />
      <Category size=" w-[120px] md:w-[250px]" name={t("child")} img={"./img/child.png"} color="bg-[#FDD9E3]" />
    </div>
  );
}

export default Categories;
