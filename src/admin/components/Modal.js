import React from "react";
import { useState } from "react";
import { addFilm, getFilmByID, updateFilm } from "../services/FilmService";
import { toast } from "react-toastify";
import { addBrand, updateBrand } from "../services/BrandService";
import { useEffect } from "react";

export const ModalAddFilm = (props) => {
  const [film, setFilm] = useState("");
  const saveFilm = async (e) => {
    e.preventDefault();
    let res = await addFilm(film);
    if (res) {
      setFilm("");
      toast.success("Adding succeed !");
      window.location.reload();
    } else {
      props.onClose();
      setFilm("");
      toast.error("Adding failed !");
    }
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Film</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={props.onClose}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex-auto h-[100px] w-[600px]">
                  <form className="w-full h-full">
                    <div className="flex flex-col justify-between w-full h-full">
                      <div className="border-b-[2px] ">
                        <input
                          type="text"
                          className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                          placeholder="Film name"
                          value={film}
                          onChange={(e) => setFilm(e.target.value)}
                          name="film"
                        ></input>
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.onClose}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={saveFilm}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export const ModalEditFilm = (props) => {
  const { showModal, onClose, dataFilm } = props;
  const [film, setFilm] = useState("");
  useEffect(() => {
    if (showModal) {
      setFilm(dataFilm.name);
    }
  }, [dataFilm]);
  const saveFilm = async (e) => {
    e.preventDefault();
    const res = await updateFilm(dataFilm.id, film);
    if (res) {
      onClose();
      toast.success("Update is succeed !");
      window.location.reload();
    } else {
      toast.error("Update is failed !");
      onClose();
    }
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit film</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex-auto h-[100px] w-[600px]">
                  <form className="w-full h-full">
                    <div className="flex flex-col justify-between w-full h-full">
                      <div className="border-b-[2px] ">
                        <input
                          type="text"
                          className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                          placeholder="Film name"
                          value={film}
                          onChange={(e) => setFilm(e.target.value)}
                          name="film"
                        ></input>
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={saveFilm}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export const ModalAddBrand = (props) => {
  const [brand, setBrand] = useState("");
  const saveBrand = async (e) => {
    e.preventDefault();
    let res = await addBrand(brand);
    if (res) {
      setBrand("");
      toast.success("Add is succeed !");
      window.location.reload();
    } else {
      props.onClose();
      setBrand("");
      toast.error("Add is failed !");
    }
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Brand</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={props.onClose}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex-auto h-[100px] w-[600px]">
                  <form className="w-full h-full">
                    <div className="flex flex-col justify-between w-full h-full">
                      <div className="border-b-[2px] ">
                        <input
                          type="text"
                          className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                          placeholder="Brand name"
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          name="brand"
                        ></input>
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.onClose}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={saveBrand}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export const ModalEditBrand = (props) => {
  const { showModal, onClose, dataBrand } = props;
  const [brand, setBrand] = useState("");
  useEffect(() => {
    if (showModal) {
      setBrand(dataBrand.name);
    }
  }, [dataBrand]);
  const saveBrand = async (e) => {
    e.preventDefault();
    const res = await updateBrand(dataBrand.id, brand);
    if (res) {
      onClose();
      toast.success("Update is succeed !");
      window.location.reload();
    } else {
      toast.error("Update is failed !");
      onClose();
    }
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit brand</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex-auto h-[100px] w-[600px]">
                  <form className="w-full h-full">
                    <div className="flex flex-col justify-between w-full h-full">
                      <div className="border-b-[2px] ">
                        <input
                          type="text"
                          className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                          placeholder="Brand name"
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          name="brand"
                        ></input>
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={saveBrand}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
