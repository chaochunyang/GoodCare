// import React from "react";
import Header from "../header/Header";
import IndexNav from "../indexnav/IndexNav";
import PathBox from "../pathbox/PathBox";
import Footer from "../footer/Footer";
import BackToTopBtn from "../backtotopbtn/BackToTopBtn";
import React, { useState } from "react";
import "../../asset/css/subsidy.css";
import { Link } from "react-router-dom";

const SubsidyResultV = () => {
  const [activeContent, setActiveContent] = useState("content1");

  const showContent = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <React.Fragment>
      <div id="content2" className="content-block">
        <h3 className="text-center">交通接送服務</h3>
        <div className="container-fluid">
          <table className="table table-striped custom-table ">
            <thead className="thead-dark">
              <tr>
                <th className="text-center col m-line">項目</th>
                <th className="text-center col">資訊</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center m-line ">您的收入狀況為</td>
                <td className="text-center " id="income">
                  一般戶
                </td>
              </tr>
              <tr>
                <td className="text-center m-line ">政府補貼每趟</td>
                <td className="text-center " id="subsidy">
                  補助金額之70%
                </td>
              </tr>
              <tr>
                <td className="text-center m-line">每月補助最高額度 (NTD)</td>
                <td className="text-center " id="level">
                  NTD$ 1680
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SubsidyResultV;
