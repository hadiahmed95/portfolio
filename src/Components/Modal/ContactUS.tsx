import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
// import StartCanvas from '../Canvas'
import emailjs from '@emailjs/browser';

interface UserData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUSModal({ show, onClose }: any) {
  const cancelButtonRef = useRef(null);
  const formRef: any = useRef();
  const [form, setForm] = useState<UserData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleChange = (e: any) => {
    setForm({...form, [e.target.name]:e.target.value})
  };

  useEffect(()=>{
console.log(form,"form values")
  },[form])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.send("service_fdk8p8b","template_wkqexde",{
      name: form.name,
      message: form.message,
      email: form.email,
      })
    .then((result:any)=>{
      console.log(result,"result")
    })
    .catch(()=>{
      console.log("err")
    })
    .finally(()=>{
      setLoading(false)
    })

  };

  const handleForm = (e:any) => {
    e.preventDefault()
    if(form.name !== "" && form.email !== ""){
      setLoading(true)
    }else{
      if(form.name == ""){
        setNameError(true)
      }
      if(form.email == ""){
        setEmailError(true)
      }
    }
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20 h-screen"
        initialFocus={cancelButtonRef}
        onClose={() => {
          onClose();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-full h-[100vh] overflow-y-hidden">
          <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-black text-left shadow-xl transition-all  w-full h-full overflow-y-auto">
                {/* <StartCanvas /> */}
                <div className="text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex items-center justify-center">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full flex flex-col items-center">
                      <Dialog.Title
                        as="h3"
                        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
                      >
                        Get In Touch
                      </Dialog.Title>
                      <div className="mt-4 bg-[#212428] px-10 py-7 rounded-lg sm:w-[70%] w-full relative">
                        <div className="absolute top-[-15px] right-[-10px] w-[40px] h-[40px] rounded-full bg-white text-black cursor-pointer flex justify-center items-center" onClick={()=>{onClose()}}>
                          <AiOutlineClose />
                        </div>
                        <form
                          action=""
                          ref={formRef}
                          onSubmit={(e)=>{handleSubmit(e)}}
                          className="flex flex-col gap-8"
                        >
                          <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                              Your name*
                            </span>
                            <input
                              type={"text"}
                              name="name"
                              value={form.name}
                              onFocus={()=>{
                                setNameError(false)
                              }}
                              onBlur={()=>{
                                if(form.name == ""){
                                  setNameError(true)
                                }
                              }}
                              onChange={handleChange}
                              placeholder="What's your name?"
                              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
                            />
                          {nameError == true && (
                            <p className="text-[red] text-[14px] mt-2">Required field.</p>
                          )}
                          </label>
                          <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                              Your email*
                            </span>
                            <input
                              type={"email"}
                              name="email"
                              value={form.email}
                              onFocus={()=>{
                                setEmailError(false)
                              }}
                              onBlur={()=>{
                                if(form.email == ""){
                                  setEmailError(true)
                                }
                              }}
                              onChange={handleChange}
                              placeholder="What's your email?"
                              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
                            />
                            {emailError == true &&(
                            <p className="text-[red] text-[14px] mt-2">Required field.</p>
                            )}
                          </label>
                          <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                              Your Message
                            </span>
                            <textarea
                              rows={7}
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              placeholder="What do you want to say?"
                              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
                            ></textarea>
                          </label>
                          <div className="flex justify-end">
                            <button
                              type="submit"
                              className="bg-black py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl flex items-center gap-x-2"
                              onClick={(e)=>{handleForm(e)}}
                            >
                              {loading && (
                                <div role="status">
                                <svg aria-hidden="true" className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                              )}
                              {loading ? "Sending ..." : "Send"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
