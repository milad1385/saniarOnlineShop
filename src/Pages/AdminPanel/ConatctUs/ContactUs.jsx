import React, { useContext, useEffect, useState } from "react";
import Table from "../../../Components/AdminPanel/Table/Table";
import { AppContext } from "../../../App";
import useGetAll from "../../../Hooks/AdminPanel/Contact/useGetAll";
import Modal from "../../../Components/Modal/Modal";
import TButton from "../../../Components/AdminPanel/TButton/TButton";
import CommentText from "../Commnets/CommentText";
import Sppiner from "../../../Components/Sppiner/Spinner";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import useDelete from "../../../Hooks/AdminPanel/Contact/useDelete";
import StatusModal from "../../../Components/SuccessModal/SuccessModal";
import EmptyError from "../../../Components/UserPanel/EmptyError/EmptyError";
import SendContactAnswer from "./SendContactAnswer";

function ContactUs() {
  const [successInfo, setSuccessInfo] = useState({});
  const { setIsShowAdminMenu } = useContext(AppContext);

  const { mutateAsync: deleteContact, isLoading: isDeleting } =
    useDelete(setSuccessInfo);
  const { data: contacts, isLoading } = useGetAll();

  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);

  const deleteContactHandler = async (id) => {
    await deleteContact(id);
  };

  if (isLoading) return <Sppiner />;
  if (!contacts?.length)
    return (
      <div className="mt-10">
        <EmptyError msg={"هیچ پیغامی تاکنون ارسال نشده است"} />;
      </div>
    );
  return (
    <>
      <div className="container">
        <div className="pb-6">
          <Table title={"لیست"} main={"پیغام ها"}>
            <table className="user-table mt-7">
              <thead className="">
                <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                  <td>شماره</td>
                  <td>نام</td>
                  <td>ایمیل</td>
                  <td>شماره</td>
                  <td>تاریخ</td>
                  <td>پاسخ</td>
                  <td>مشاهده</td>
                  <td>حذف</td>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {contacts?.map((contact, index) => (
                  <tr className="child:p-4 text-center font-DanaMedium">
                    <td
                      className={`text-white ${
                        contact.isAnswer ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {index + 1}
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      {new Date(contact.createdAt).toLocaleDateString("fa-IR")}
                    </td>
                    <td>
                      <Modal>
                        <Modal.Open>
                          <TButton title={"پاسخ"} className={"bg-amber-500"} />
                        </Modal.Open>
                        <Modal.Page>
                          <SendContactAnswer
                            email={contact.email}
                            onInfo={setSuccessInfo}
                          />
                        </Modal.Page>
                      </Modal>
                    </td>
                    <td>
                      <Modal>
                        <Modal.Open>
                          <TButton title={"مشاهده"} className={"bg-blue-600"} />
                        </Modal.Open>
                        <Modal.Page>
                          <CommentText
                            title={"متن پیغام"}
                            text={contact.body}
                          />
                        </Modal.Page>
                      </Modal>
                    </td>
                    <td>
                      <Modal>
                        <Modal.Open>
                          <TButton title={"حذف"} className={"bg-red-600"} />
                        </Modal.Open>
                        <Modal.Page>
                          <ConfirmModal
                            disable={isDeleting}
                            isConfirming={isDeleting}
                            onConfirm={() => deleteContactHandler(contact._id)}
                            title={"آیا از حذف اطمینان دارید ؟"}
                          />
                        </Modal.Page>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </div>
      </div>
      {successInfo.title && (
        <StatusModal
          onClose={setSuccessInfo}
          title={successInfo.title}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setSuccessInfo(false)}
        />
      )}
    </>
  );
}

export default ContactUs;
