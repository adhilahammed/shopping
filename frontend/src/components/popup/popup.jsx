const Popup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="flex w-full h-screen justify-center items-center">
        <div className="bg-white w-full mx-8 max-w-3xl shadow-lg ">
          <div className="px-2 py-3 bg-primary text-white flex justify-between items-center">
            <div className="px-2">sdfds</div>
            <div
            // onClick={onClose}
            >
              {/* <CloseOutlined style={{ color: "white" }} /> */}
            </div>
          </div>

          <div className="p-5">dd</div>
          <div className="flex justify-between px-6 py-4 gap-4">
            <textarea name="" id=""></textarea>
            {/* {!isHide && (
              <>
                <SimpleButton
                  type="reset"
                  onClick={onClose}
                  variant={"outline"}
                >
                  Close
                </SimpleButton>
              </>
            )} */}

            {/* <div>{actions}</div> */}
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
