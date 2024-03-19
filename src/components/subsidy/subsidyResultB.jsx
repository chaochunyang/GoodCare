// import React from "react";
import Header from "../header/Header";
import IndexNav from "../indexnav/IndexNav";
import PathBox from "../pathbox/PathBox";
import Footer from "../footer/Footer";
import BackToTopBtn from "../backtotopbtn/BackToTopBtn";
import React, { useState } from "react";
import "../../asset/css/subsidy.css";
import { Link } from "react-router-dom";

const SubsidyResultB = () => {
  const [activeContent, setActiveContent] = useState("content1");

  const showContent = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <React.Fragment>
      <div id="content3" className="content-block">
        <h3 className="text-center">喘息服務</h3>
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
                <td className="text-center m-line ">政府補貼</td>
                <td className="text-center " id="subsidy">
                  84% 的照顧項目支出
                </td>
              </tr>
              {/* 失能等級  */}
              <div className="container-fluid">
                <table className="table table-striped custom-table">
                  <thead className="thead-dark">
                    <tr>
                      <th className="text-center col m-line">失能等級</th>
                      <th className="text-center col">每月補助最高金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center m-line">第2級</td>
                      <td className="text-center" id="income">
                        NTD$ 10,020
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center m-line">第3級</td>
                      <td className="text-center" id="subsidy">
                        NTD$ 15,460
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center m-line">第4級</td>
                      <td className="text-center" id="level">
                        NTD$ 18,580
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center m-line">第5級</td>
                      <td className="text-center" id="price">
                        NTD$ 24,100
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center m-line">第6級</td>
                      <td className="text-center" id="price">
                        NTD$ 28,070
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center m-line">第7級</td>
                      <td className="text-center" id="price">
                        NTD$ 32,090
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center m-line">第8級</td>
                      <td className="text-center" id="price">
                        NTD$ 36,180
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end of失能等级 */}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SubsidyResultB;
