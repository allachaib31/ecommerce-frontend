document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.8) {
        section.classList.add('animated');
      } else {
        section.classList.remove('animated');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
});

window.onload = () => {
  const range = document.querySelectorAll(".range-slider span input");
  let progress = document.querySelector(".range-slider .progress");
  let gap = 0.1;
  const inputValue = document.querySelectorAll(".numberVal input");

  range.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(range[0].value);
      let maxRange = parseInt(range[1].value);

      if (maxRange - minRange < gap) {
        if (e.target.className === "range-min") {
          range[0].value = maxRange - gap;
        } else {
          range[1].value = minRange + gap;
        }
      } else {
        inputValue[0].value = minRange;
        inputValue[1].value = maxRange;
      }
    });
  });
  const chooseCountry = document.querySelectorAll(".chooseCountry");
  try {
    chooseCountry.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById(
          "nameCountry"
        ).innerHTML = `<i class="fa-solid fa-chevron-down"></i> ${btn.getAttribute(
          "data-name"
        )}`;
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const chooseCuurrency = document.querySelectorAll(".chooseCuurrency");
  try {
    chooseCuurrency.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById(
          "nameCurrency"
        ).innerHTML = `<i class="fa-solid fa-chevron-down"></i> ${btn.getAttribute(
          "data-currency"
        )}`;
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const filter = document.getElementById("filter");
  try {
    filter.addEventListener("click", () => {
      document.getElementById("showFilter").classList.toggle("hidden");
    });
  } catch (error) {
    console.log("the element is not existe");
  }

  const showNav = document.getElementById("showNav");
  try {
    showNav.addEventListener("click", () => {
      document.getElementById("nav").classList.toggle("hidden");
    });
  } catch (error) {
    console.log("the element is not existe");
  }

  const showSearch = document.getElementById("search");
  const showSearch2 = document.getElementById("search2");
  try {
    showSearch.addEventListener("keyup", (event) => {
      showSearchFunction("showSearch", event.target.value);
    });
    showSearch2.addEventListener("keyup", (event) => {
      showSearchFunction("showSearch2", event.target.value);
    });
    function showSearchFunction(id, value) {
      if (value != "") {
        document.getElementById(id).classList.remove("hidden");
        return;
      }
      document.getElementById(id).classList.add("hidden");
    }
  } catch (error) {
    console.log("the element is not existe");
  }
  const publicTransportBtn = document.getElementById("publicTransportBtn");
  const privateTransferBtn = document.getElementById("privateTransfer");
  try {
    publicTransportBtn.addEventListener("click", (event) => {
      transportFunction("publicTransportBtn");
    });
    privateTransferBtn.addEventListener("click", (event) => {
      transportFunction("privateTransferBtn");
    });
    function transportFunction(btnId) {
      if (btnId == "publicTransportBtn") {
        if (
          Array.from(publicTransportBtn.classList).indexOf(
            "bg-primary-content"
          ) == -1
        ) {
          publicTransportBtn.classList.remove("bg-transparent");
          publicTransportBtn.classList.add("bg-primary-content");
        }
        privateTransferBtn.classList.remove("bg-primary-content");
        privateTransferBtn.classList.add("bg-transparent");
      } else {
        if (
          Array.from(privateTransferBtn.classList).indexOf(
            "bg-primary-content"
          ) == -1
        ) {
          privateTransferBtn.classList.remove("bg-transparent");
          privateTransferBtn.classList.add("bg-primary-content");
        }
        publicTransportBtn.classList.remove("bg-primary-content");
        publicTransportBtn.classList.add("bg-transparent");
      }
    }
  } catch (error) {
    console.log("the element is not existe");
  }
  const showMoreCarsLogo = document.getElementById("showMoreCarsLogo");
  try {
    showMoreCarsLogo.addEventListener("click", (event) => {
      const logocars = document.getElementById("logocars");
      logocars.innerHTML += `
      <button data-car="15" class="logoCarButton btn h-auto bg-transparent py-[26px] px-[26px]">
      <img src="./images/bmw.png" class="w-[60px] h-[60px]" alt="" />
    </button>
    <button data-car="16" class="logoCarButton btn h-auto bg-transparent py-[26px] px-[26px]">
      <img src="./images/merc.png" class="w-[60px] h-[60px]" alt="" />
    </button>
    <button data-car="17" class="logoCarButton btn h-auto bg-transparent py-[26px] px-[26px]">
      <img src="./images/fiat.png" class="w-[60px] h-[60px]" alt="" />
    </button>
      `;
      addEventToLogoCarButton();
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const externalPartsCarBtn = document.getElementById("externalPartsCarBtn");
  const interiorPartsCarBtn = document.getElementById("interiorPartsCarBtn");
  const accessoriesCarBtn = document.getElementById("accessoriesCarBtn");
  const carHitBtn = document.getElementById("carHitBtn");
  const oldCarBtn = document.getElementById("oldCarBtn");
  try {
    let lastActivePartsCarBtn = "externalPartsCarBtn";
    externalPartsCarBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "externalPartsCarBtn") return;
      partsFunction(externalPartsCarBtn, "externalPartsCarBtn");
    });
    interiorPartsCarBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "interiorPartsCarBtn") return;
      partsFunction(interiorPartsCarBtn, "interiorPartsCarBtn");
    });
    accessoriesCarBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "accessoriesCarBtn") return;
      partsFunction(accessoriesCarBtn, "accessoriesCarBtn");
    });
    carHitBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "carHitBtn") return;
      partsFunction(carHitBtn, "carHitBtn");
    });
    oldCarBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "oldCarBtn") return;
      partsFunction(oldCarBtn, "oldCarBtn");
    });
    function partsFunction(btn, id) {
      btn.classList.remove("bg-transparent");
      btn.classList.add("bg-primary-content");
      const lastActiveButton = document.getElementById(lastActivePartsCarBtn);
      lastActiveButton.classList.remove("bg-primary-content");
      lastActiveButton.classList.add("bg-transparent");
      lastActivePartsCarBtn = id;
    }
  } catch (error) {
    console.log("the element is not existe");
  }
  try {
    function addEventToLogoCarButton(){
      let logoCarButton = document.querySelectorAll(".logoCarButton");
      let lastButtonCarActive = "";
      logoCarButton.forEach((button) => {
        button.addEventListener("click", () => {
          const dataCar = button.getAttribute("data-car");
          if (dataCar == lastButtonCarActive) {
            button.classList.toggle("bg-transparent");
            button.classList.toggle("bg-primary-content");
            lastButtonCarActive = "";
            return;
          }
          button.classList.toggle("bg-transparent");
          button.classList.toggle("bg-primary-content");
          if (lastButtonCarActive != "") {
            logoCarButton[lastButtonCarActive].classList.toggle("bg-transparent");
            logoCarButton[lastButtonCarActive].classList.toggle(
              "bg-primary-content"
            );
          }
          lastButtonCarActive = dataCar;
        });
      });
    };
    addEventToLogoCarButton();
  } catch (error) {
    console.log("the element is not existe");
  }
  const showMoreCity = document.getElementById("showMoreCity");
  try {
    showMoreCity.addEventListener("click", (event) => {
      const city = document.getElementById("city");
      city.innerHTML += `<label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" checked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">الكل</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" defaultChecked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">تبوك</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" checked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">مكه</span>
    </label>
      `;
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const showMoreYears = document.getElementById("showMoreYears");
  try {
    showMoreYears.addEventListener("click", (event) => {
      const years = document.getElementById("years");
      years.innerHTML += `
      <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" checked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">الكل</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" defaultChecked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">2023</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" checked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">2024</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" defaultChecked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">2020</span>
    </label>
      `;
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const showMoreProducts = document.getElementById("showMoreProducts");
  try {
    showMoreProducts.addEventListener("click", (event) => {
      const products = document.getElementById("products");
      products.innerHTML += `
      <div
      class="flex w-full sm:w-1/2 md:w-full gap-5 flex-col-reverse justify-center text-center md:text-right  md:justify-start md:flex-row p-[24px] card border border-[#E4E7EE] bg-base-100 shadow-lg">
      <div class="flex md:flex-row flex-col w-full md:w-[70%]">
        <div class="md:w-1/2 flex flex-col gap-[1rem]">
          <h1 class="text-[20px] md:text-[20px]">باب سياره بيع تشليح</h1>
          <h3 class="text-[1rem] md:text-[14px] text-[#757575]">
            باب سياره تيوتا جديد لم يستخدم
          </h3>
          <div class="w-full flex flex-col gap-2">
            <div class="w-full flex justify-between">
              <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                  class="fa-solid fa-user text-primary-content"></i>
                محمد احمد</span>
              <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                  class="fa-solid fa-comment-dots text-primary-content"></i>
                40</span>
            </div>
            <div class="w-full flex justify-between">
              <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                  class="fa-solid fa-location-dot text-primary-content"></i>مكه</span>
              <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                  class="fa-solid fa-clock text-primary-content"></i>
                الان</span>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col gap-[1rem]">
          <h1 class="text-[20px] md:text-[20px]">100 ريال</h1>
          <h3 class="text-[1rem] md:text-[14px] text-[#757575]">العدد المتبقي : 3</h3>
          <h3 class="text-[1rem] md:text-[14px] text-[#757575]">المشاهده الان : 30</h3>
          <button class="text-[1rem] xxl:text-[1rem] btn bg-primary-content">
            <img class="w-[6.67px] h-[6.67px] sm:w-[25px] sm:h-[25px] xxl:w-[32px] xxl:h-[32px]"
              src="./images/basket.png" alt="" />اضف الي العربه
          </button>
        </div>
      </div>
      <div class="w-full md:w-[30%] flex justify-center items-center border rounded-xl">
        <img src="./images/product1.png" class="sm:w-[110px] sm:h-[100px]" alt="" />
      </div>
    </div>
    <div
    class="flex w-full sm:w-1/2 md:w-full gap-5 flex-col-reverse justify-center text-center md:text-right  md:justify-start md:flex-row p-[24px] card border border-[#E4E7EE] bg-base-100 shadow-lg">
    <div class="flex md:flex-row flex-col w-full md:w-[70%]">
      <div class="md:w-1/2 flex flex-col gap-[1rem]">
        <h1 class="text-[20px] md:text-[20px]">باب سياره بيع تشليح</h1>
        <h3 class="text-[1rem] md:text-[14px] text-[#757575]">
          باب سياره تيوتا جديد لم يستخدم
        </h3>
        <div class="w-full flex flex-col gap-2">
          <div class="w-full flex justify-between">
            <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                class="fa-solid fa-user text-primary-content"></i>
              محمد احمد</span>
            <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                class="fa-solid fa-comment-dots text-primary-content"></i>
              40</span>
          </div>
          <div class="w-full flex justify-between">
            <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                class="fa-solid fa-location-dot text-primary-content"></i>مكه</span>
            <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                class="fa-solid fa-clock text-primary-content"></i>
              الان</span>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col gap-[1rem]">
        <h1 class="text-[20px] md:text-[20px]">100 ريال</h1>
        <h3 class="text-[1rem] md:text-[14px] text-[#757575]">العدد المتبقي : 3</h3>
        <h3 class="text-[1rem] md:text-[14px] text-[#757575]">المشاهده الان : 30</h3>
        <button class="text-[1rem] xxl:text-[1rem] btn bg-primary-content">
          <img class="w-[6.67px] h-[6.67px] sm:w-[25px] sm:h-[25px] xxl:w-[32px] xxl:h-[32px]"
            src="./images/basket.png" alt="" />اضف الي العربه
        </button>
      </div>
    </div>
    <div class="w-full md:w-[30%] flex justify-center items-center border rounded-xl">
      <img src="./images/product1.png" class="sm:w-[110px] sm:h-[100px]" alt="" />
    </div>
  </div>
  <div
  class="flex w-full sm:w-1/2 md:w-full gap-5 flex-col-reverse justify-center text-center md:text-right  md:justify-start md:flex-row p-[24px] card border border-[#E4E7EE] bg-base-100 shadow-lg">
  <div class="flex md:flex-row flex-col w-full md:w-[70%]">
    <div class="md:w-1/2 flex flex-col gap-[1rem]">
      <h1 class="text-[20px] md:text-[20px]">باب سياره بيع تشليح</h1>
      <h3 class="text-[1rem] md:text-[14px] text-[#757575]">
        باب سياره تيوتا جديد لم يستخدم
      </h3>
      <div class="w-full flex flex-col gap-2">
        <div class="w-full flex justify-between">
          <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
              class="fa-solid fa-user text-primary-content"></i>
            محمد احمد</span>
          <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
              class="fa-solid fa-comment-dots text-primary-content"></i>
            40</span>
        </div>
        <div class="w-full flex justify-between">
          <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
              class="fa-solid fa-location-dot text-primary-content"></i>مكه</span>
          <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
              class="fa-solid fa-clock text-primary-content"></i>
            الان</span>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 flex flex-col gap-[1rem]">
      <h1 class="text-[20px] md:text-[20px]">100 ريال</h1>
      <h3 class="text-[1rem] md:text-[14px] text-[#757575]">العدد المتبقي : 3</h3>
      <h3 class="text-[1rem] md:text-[14px] text-[#757575]">المشاهده الان : 30</h3>
      <button class="text-[1rem] xxl:text-[1rem] btn bg-primary-content">
        <img class="w-[6.67px] h-[6.67px] sm:w-[25px] sm:h-[25px] xxl:w-[32px] xxl:h-[32px]"
          src="./images/basket.png" alt="" />اضف الي العربه
      </button>
    </div>
  </div>
  <div class="w-full md:w-[30%] flex justify-center items-center border rounded-xl">
    <img src="./images/product1.png" class="sm:w-[110px] sm:h-[100px]" alt="" />
  </div>
</div>
      `;
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const phoneCodeBtn = document.querySelectorAll(".phoneCodeBtn");
  try {
    phoneCodeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById("phoneNumber").value =
          btn.getAttribute("data-phone");
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const copyPageUrl = document.getElementById("copyPageUrl");
  try {
    copyPageUrl.addEventListener("click", () => {
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute("id", "dummy_id");
      dummy.setAttribute("value", window.location.href);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    });
  } catch (error) {}
  const addQuantiteOfProduct = document.querySelectorAll(
    ".addQuantiteOfProduct"
  );
  const quantiteOfProduct = document.querySelectorAll(".quantiteOfProduct");
  const minusQuantiteOfProduct = document.querySelectorAll(
    ".minusQuantiteOfProduct"
  );
  try {
    addQuantiteOfProduct.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        quantiteOfProduct[index].value =
          Number(quantiteOfProduct[index].value) + 1;
      });
    });
    minusQuantiteOfProduct.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        if (quantiteOfProduct[index].value == 1) return;
        quantiteOfProduct[index].value =
          Number(quantiteOfProduct[index].value) - 1;
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const heart = document.querySelectorAll(".heart");
  try {
    heart.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("text-primary-content");
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const displaySection = document.querySelectorAll(".displaySection");
  try {
    let lastSectionDisplay = "section1";
    displaySection.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById(lastSectionDisplay).classList.toggle("hidden");
        lastSectionDisplay = btn.getAttribute("data-section");
        document.getElementById(lastSectionDisplay).classList.toggle("hidden");
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const sendMessage = document.getElementById("sendMessage");
  const fileUpload = document.getElementById("file-upload");
  const recordButton = document.getElementById('recordButton');
  try {
    sendMessage.addEventListener("click", () => {
      const message = document.getElementById("Message");
      let messages = document.getElementById("messages");
      if (message.value.trim() == "") {
        return;
      }
      const date = new Date();
      messages.innerHTML += `
      <div class="chat chat-start">
      <div class="chat-image avatar">
          <div class="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
      </div>
      <div class="chat-bubble">${message.value.trim()}</div>
      <div class="chat-footer opacity-50">
          اليوم : ${date.getHours()}:${date.getMinutes()}
      </div>
  </div>
      `;
    });
    fileUpload.addEventListener("change",(event) => {
      const files = event.target.files;
      const date = new Date();
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];

        reader.onload = function (e) {
          const image = new Image();
          image.src = e.target.result;
          image.style.width = "200px";
          image.style.height = "200px";
          console.log(image)
          messages.innerHTML += `
          <div class="chat chat-start">
          <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
          </div>
          <img src="${image.src}" width="300px" height="200px"/>
          <div class="chat-footer opacity-50">
              اليوم : ${date.getHours()}:${date.getMinutes()}
          </div>
      </div>
          `;
        };

        reader.readAsDataURL(file);
      }
    })
    let mediaRecorder;
    let chunks = [];
    
    // Function to start recording
    function startRecording() {
      const date = new Date();
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                // Create a MediaRecorder object
                mediaRecorder = new MediaRecorder(stream);
                chunks = [];
    
                // Start recording
                mediaRecorder.start();
    
                // Event handler when data is available
                mediaRecorder.ondataavailable = function(event) {
                    chunks.push(event.data);
                }
    
                // Event handler when recording stops
                mediaRecorder.onstop = function() {
                    // Create a blob from the recorded data
                    let blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    
                    // Create a URL from the blob
                    let audioURL = window.URL.createObjectURL(blob);
                    messages.innerHTML += `
                    <div class="chat chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <audio controls src="${audioURL}"></audio>
                    <div class="chat-footer opacity-50">
                        اليوم : ${date.getHours()}:${date.getMinutes()}
                    </div>
                </div>
                    `;
                }
            })
            .catch(function(err) {
                console.error('Error accessing microphone:', err);
            });
    }
    
    // Function to stop recording
    function stopRecording() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            // Stop recording
            mediaRecorder.stop();
        }
    }
    
    // Event listener for the record button
    recordButton.addEventListener('click', function() {
        // If recording is already in progress, stop recording
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            stopRecording();
            recordButton.innerHTML = '<i class="fas fa-microphone"></i>';
        } else {
            // Otherwise, start recording
            startRecording();
            recordButton.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
        }
    });
  } catch (error) {
    console.log("the element is not existe");
  }

  // Get pagination elements
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const ellipsis = document.getElementById('ellipsis');
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const page99 = document.getElementById('page99');
  const page100 = document.getElementById('page100');
  try {
    // Set initial page
  let currentPage = 1;

  // Event listeners for previous and next buttons
  prevBtn.addEventListener('click', goToPrevPage);
  nextBtn.addEventListener('click', goToNextPage);

  // Function to go to the previous page
  function goToPrevPage() {
      if (currentPage > 1) {
          currentPage--;
          updatePagination();
      }
  }

  // Function to go to the next page
  function goToNextPage() {
      if (currentPage < 100) {
          currentPage++;
          updatePagination();
      }
  }

  // Function to update the pagination buttons based on the current page
  function updatePagination() {
      // Update page buttons
      page1.innerText = currentPage - 1;
      page2.innerText = currentPage;
      page99.innerText = currentPage + 97;
      page100.innerText = currentPage + 98;

      // Hide or show ellipsis
      if (currentPage === 1) {
          ellipsis.style.display = 'none';
      } else {
          ellipsis.style.display = 'inline-block';
      }

      // Disable previous and next buttons at first and last pages
      if (currentPage === 1) {
          prevBtn.disabled = true;
      } else {
          prevBtn.disabled = false;
      }

      if (currentPage === 100) {
          nextBtn.disabled = true;
      } else {
          nextBtn.disabled = false;
      }
  }
  } catch (error) {
    console.log("the element is not existe");
  }
  
  const profileImage = document.getElementById("profileImage");
  try {
    profileImage.addEventListener("change", (event) => {
      const files = event.target.files;
      const preview = document.getElementById("imgProfile");
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];

        reader.onload = function (e) {
          const image = new Image();
          preview.src = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    });
  } catch (error) {
    console.log("the element is not existe");
  }

  const upload = document.getElementById("upload");
  try {
    upload.addEventListener("change", (event) => {
      const files = event.target.files;
      const preview = document.getElementById("image-preview");
      preview.innerHTML = ""; // Clear previous previews

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];

        reader.onload = function (e) {
          const image = new Image();
          image.src = e.target.result;
          image.style.width = "200px";
          image.style.height = "200px";
          preview.appendChild(image);
        };

        reader.readAsDataURL(file);
      }
    });
  } catch (error) {
    console.log("the element is not existe");
  }
};
