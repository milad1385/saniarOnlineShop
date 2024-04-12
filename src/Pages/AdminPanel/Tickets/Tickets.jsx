import React, { useContext, useEffect, useState } from "react";
import Table from "../../../Components/AdminPanel/Table/Table";
import { AppContext } from "../../../App";
import useAll from "../../../Hooks/AdminPanel/Ticket/useAll";
import Modal from "../../../Components/Modal/Modal";
import TButton from "../../../Components/AdminPanel/TButton/TButton";
import CommentText from "../Commnets/CommentText";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import Loader from "../../../Components/Loader/Loader";
import useActiveToggle from "../../../Hooks/AdminPanel/Ticket/useActiveToggle";
import SuccessModal from "../../../Components/SuccessModal/SuccessModal";

function Tickets() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState();
  const navigate = useNavigate();
  const { data: tickts, isLoading } = useAll();
  const { mutateAsync: toggle, isLoading: toggleLoading } = useActiveToggle();

  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);

  const activeToggleHandler = async (id, status) => {
    const info = {
      id,
      status,
    };

    const res = await toggle(info);

    if (res.status === 200) {
      setIsShowSuccessModal(true);
    }
  };
  if (isLoading) return <Loader />;
  return (
    <>
      <div className="container">
        <div className="pb-6">
          <Table title={"لیست"} main={"تیکت ها"}>
            <table className="user-table mt-7">
              <thead className="">
                <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                  <td>شماره</td>
                  <td>کاربر</td>
                  <td>عنوان</td>
                  <td>تاریخ</td>
                  <td>نوع تیکت</td>
                  <td>وضعیت</td>
                  <td>مشاهده</td>
                  <td>پاسخ</td>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {tickts?.map((ticket, index) => (
                  <tr
                    key={ticket._id}
                    className="child:p-4 text-center font-DanaMedium"
                  >
                    <td
                      className={`${
                        ticket.isOpen ? "bg-green-600" : "bg-red-600"
                      } text-white`}
                    >
                      {index + 1}
                    </td>
                    <td>{ticket.creator.name}</td>
                    <td>{ticket.title}</td>
                    <td>
                      {new Date(ticket.createdAt).toLocaleDateString("fa-IR")}
                    </td>
                    <td>{ticket.departmentName}</td>
                    <td>
                      <Modal>
                        <Modal.Open>
                          {ticket.isOpen ? (
                            <TButton title={"بستن"} className={"bg-red-600"} />
                          ) : (
                            <TButton
                              title={"باز کردن"}
                              className={"bg-green-600"}
                            />
                          )}
                        </Modal.Open>
                        <Modal.Page>
                          <ConfirmModal
                            title={`آیا از ${
                              ticket.isOpen ? "بستن" : "باز کردن"
                            } اطمینان دارید ؟`}
                            disable={toggleLoading}
                            isConfirming={toggleLoading}
                            onConfirm={() =>
                              activeToggleHandler(
                                ticket._id,
                                ticket.isOpen ? false : true
                              )
                            }
                          />
                        </Modal.Page>
                      </Modal>
                    </td>
                    <td>
                      <Modal>
                        <Modal.Open name={"commentBody"}>
                          <TButton title={"مشاهده"} className={"bg-blue-600"} />
                        </Modal.Open>
                        <Modal.Page name={"commentBody"}>
                          <CommentText text={ticket.body} />
                        </Modal.Page>
                      </Modal>
                    </td>
                    <td>
                      <TButton
                        onClick={() => navigate(`answer/${ticket._id}`)}
                        to={`answer/${ticket._id}`}
                        className="bg-amber-500  text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        title={"پاسخ"}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </div>
      </div>

      {isShowSuccessModal && (
        <SuccessModal
          onClose={setIsShowSuccessModal}
          title={"عملیات با موفقیت انجام شد"}
          text={"خیلی هم عالی"}
          icon={"face-frown"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsShowSuccessModal(false)}
        />
      )}
    </>
  );
}

export default Tickets;
