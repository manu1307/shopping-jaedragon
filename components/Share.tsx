"use client";
import React from "react";

function Share() {
  return (
    <div
      className="flex justify-center items-center w-full h-12 my-8 text-white bg-gradient-to-t from-[#1428A0] to-[#2940c3] rounded-md"
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(window && window.location.href)
            .then(() =>
              alert("링크가 복사되었습니다. 붙여넣기로 공유해보세요.")
            )
            .catch(() => alert("링크 복사에 실패했습니다."));
        }
      }}
    >
      공유하기
    </div>
  );
}

export default Share;